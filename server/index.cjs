
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const Parser = require('rss-parser');
const Sentiment = require('sentiment');
const NodeCache = require('node-cache');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const parser = new Parser();
const sentiment = new Sentiment();
const cache = new NodeCache({ stdTTL: 60 });

async function cached(key, fn, ttl=60){
  const hit = cache.get(key);
  if(hit) return hit;
  const val = await fn();
  cache.set(key, val, ttl);
  return val;
}

app.get('/api/health', (req,res)=>res.json({ ok: true, time: new Date().toISOString() }));

// Structured 1: Quotes via Yahoo Finance public endpoint (no key)
app.get('/api/market/quotes', async (req,res)=>{
  const symbols = String(req.query.tickers||'').split(',').map(s=>s.trim()).filter(Boolean);
  if(!symbols.length) return res.status(400).json({ message: 'tickers required' });
  try{
    const payload = await cached('q:'+symbols.join(','), async ()=>{
      const url = 'https://query1.finance.yahoo.com/v7/finance/quote?symbols='+encodeURIComponent(symbols.join(','));
      const { data } = await axios.get(url, { timeout: 12000 });
      const list = (data.quoteResponse?.result || []).map(r => ({
        symbol: r.symbol,
        name: r.shortName,
        price: r.regularMarketPrice,
        change: r.regularMarketChange,
        changePct: r.regularMarketChangePercent,
        volume: r.regularMarketVolume,
        marketCap: r.marketCap,
        currency: r.currency,
        fiftyTwoWeekHigh: r.fiftyTwoWeekHigh,
        fiftyTwoWeekLow: r.fiftyTwoWeekLow
      }));
      return { updatedAt: new Date().toISOString(), data: list };
    }, 20);
    res.json(payload);
  }catch(err){
    console.error('quotes error', err.message);
    res.status(500).json({ message: 'Failed to fetch quotes' });
  }
});

// Structured 2: World Bank macro indicator
app.get('/api/market/worldbank', async (req,res)=>{
  const country = String(req.query.country || 'US');
  const indicator = String(req.query.indicator || 'NY.GDP.MKTP.KD.ZG');
  try{
    const payload = await cached('wb:'+country+':'+indicator, async ()=>{
      const url = `https://api.worldbank.org/v2/country/${encodeURIComponent(country)}/indicator/${encodeURIComponent(indicator)}?format=json&per_page=60`;
      const { data } = await axios.get(url, { timeout: 15000 });
      const series = (data?.[1]||[]).map(d=>({ date: d.date, value: d.value })).reverse();
      return { country, indicator, series, updatedAt: new Date().toISOString() };
    }, 3600);
    res.json(payload);
  }catch(err){
    console.error('wb error', err.message);
    res.status(500).json({ message: 'Failed to fetch world bank' });
  }
});

// Unstructured: Google News RSS + sentiment
app.get('/api/market/news', async (req,res)=>{
  const q = String(req.query.q || 'markets');
  try{
    const payload = await cached('news:'+q, async ()=>{
      const feed = await parser.parseURL(`https://news.google.com/rss/search?q=${encodeURIComponent(q + ' stock OR earnings OR credit')}&hl=en-US&gl=US&ceid=US:en`);
      const items = (feed.items || []).slice(0, 20).map(it => {
        const s = sentiment.analyze(`${it.title||''} ${it.contentSnippet||''}`);
        return {
          title: it.title,
          link: it.link,
          pubDate: it.pubDate,
          snippet: it.contentSnippet || '',
          sentiment: s.score
        };
      });
      return { query: q, items, updatedAt: new Date().toISOString() };
    }, 60);
    res.json(payload);
  }catch(err){
    console.error('news error', err.message);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
});

app.listen(PORT, ()=>console.log(`API listening on http://localhost:${PORT}`));
