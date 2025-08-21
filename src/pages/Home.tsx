import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  PieChart,
  Activity,
  ArrowRight,
  Star
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import heroImage from '@/assets/financial-hero.jpg';

const performanceData = [
  { month: 'Jan', value: 2400 },
  { month: 'Feb', value: 2210 },
  { month: 'Mar', value: 2890 },
  { month: 'Apr', value: 3490 },
  { month: 'May', value: 4200 },
  { month: 'Jun', value: 3800 },
];

const issuerScores = [
  { name: 'Goldman Sachs', score: 94, change: +2.3, rating: 'AAA' },
  { name: 'JPMorgan Chase', score: 91, change: +1.8, rating: 'AAA' },
  { name: 'Bank of America', score: 88, change: -0.5, rating: 'AA+' },
  { name: 'Wells Fargo', score: 85, change: +1.2, rating: 'AA' },
  { name: 'Citigroup', score: 82, change: -1.1, rating: 'AA-' },
  { name: 'Morgan Stanley', score: 89, change: +2.7, rating: 'AA+' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cred Intel Ultimate
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced financial intelligence platform providing real-time credit analysis, 
            issuer ratings, and comprehensive market insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              <BarChart3 className="mr-2 h-5 w-5" />
              View Analytics
            </Button>
            <Button variant="outline" size="lg">
              <Star className="mr-2 h-5 w-5" />
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.4M</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Credit Score</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.3</div>
              <p className="text-xs text-success flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +1.2 points this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
              <PieChart className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Low</div>
              <p className="text-xs text-muted-foreground">
                Diversified portfolio
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Return</CardTitle>
              <BarChart3 className="h-4 w-4 text-financial-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.2%</div>
              <p className="text-xs text-destructive flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -0.3% from target
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Portfolio Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Issuer Scores */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <Star className="mr-2 h-5 w-5" />
                Top Issuer Scores
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Real-time credit ratings and performance metrics
              </p>
            </div>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {issuerScores.map((issuer, index) => (
                <div key={issuer.name} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{issuer.name}</h3>
                      <Badge variant="secondary">{issuer.rating}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{issuer.score}</div>
                    <div className={`text-sm flex items-center ${
                      issuer.change > 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {issuer.change > 0 ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {issuer.change > 0 ? '+' : ''}{issuer.change}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;