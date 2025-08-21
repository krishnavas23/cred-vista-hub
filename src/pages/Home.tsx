import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity,
  ArrowRight,
  Star,
  BarChart3,
  Globe,
  Lock,
  Shield,
  Award,
  ChevronRight
} from 'lucide-react';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import heroImage from '@/assets/financial-hero.jpg';
import PageTransition from '@/components/PageTransition';
import AnimatedCard from '@/components/AnimatedCard';
import FloatingElements from '@/components/FloatingElements';
import InteractiveMetrics from '@/components/InteractiveMetrics';
import ProfessionalFeatures from '@/components/ProfessionalFeatures';
import AdvancedCharts from '@/components/AdvancedCharts';

const performanceData = [
  { month: 'Jan', value: 2400, volume: 1200, growth: 5.2 },
  { month: 'Feb', value: 2210, volume: 1400, growth: -7.9 },
  { month: 'Mar', value: 2890, volume: 1800, growth: 30.8 },
  { month: 'Apr', value: 3490, volume: 2100, growth: 20.8 },
  { month: 'May', value: 4200, volume: 2400, growth: 20.3 },
  { month: 'Jun', value: 3800, volume: 2200, growth: -9.5 },
  { month: 'Jul', value: 4100, volume: 2600, growth: 7.9 },
  { month: 'Aug', value: 4500, volume: 2800, growth: 9.8 },
  { month: 'Sep', value: 4200, volume: 2500, growth: -6.7 },
  { month: 'Oct', value: 4800, volume: 3000, growth: 14.3 },
  { month: 'Nov', value: 5200, volume: 3200, growth: 8.3 },
  { month: 'Dec', value: 5800, volume: 3500, growth: 11.5 },
];

const issuerScores = [
  { name: 'Goldman Sachs', score: 94, change: +2.3, rating: 'AAA', sector: 'Investment Banking', risk: 'Low' },
  { name: 'JPMorgan Chase', score: 91, change: +1.8, rating: 'AAA', sector: 'Commercial Banking', risk: 'Low' },
  { name: 'Bank of America', score: 88, change: -0.5, rating: 'AA+', sector: 'Retail Banking', risk: 'Medium' },
  { name: 'Wells Fargo', score: 85, change: +1.2, rating: 'AA', sector: 'Commercial Banking', risk: 'Medium' },
  { name: 'Citigroup', score: 82, change: -1.1, rating: 'AA-', sector: 'Global Banking', risk: 'Medium' },
  { name: 'Morgan Stanley', score: 89, change: +2.7, rating: 'AA+', sector: 'Investment Banking', risk: 'Low' },
  { name: 'US Bancorp', score: 87, change: +1.5, rating: 'AA', sector: 'Regional Banking', risk: 'Low' },
  { name: 'Truist Financial', score: 84, change: +0.8, rating: 'AA-', sector: 'Regional Banking', risk: 'Medium' },
];

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <FloatingElements />
        
        {/* Hero Section */}
        <section 
          className="relative h-[100vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${heroImage})`
          }}
        >
          <motion.div 
            className="text-center max-w-6xl mx-auto px-4 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              Cred Intel Ultimate
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The most advanced financial intelligence platform for 
              <span className="text-primary font-semibold"> real-time credit analysis</span>, 
              comprehensive market insights, and 
              <span className="text-accent font-semibold"> predictive analytics</span>.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow text-lg px-8 py-6 rounded-xl">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 border-accent/50 hover:border-accent bg-background/10 backdrop-blur-sm">
                  <Globe className="mr-3 h-6 w-6" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-success" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span>99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Key Metrics */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Real-Time Financial Intelligence
            </motion.h2>
            <motion.p 
              className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Monitor your portfolio performance with advanced analytics and predictive insights
            </motion.p>
            <InteractiveMetrics />
          </motion.div>

          {/* Features Section */}
          <ProfessionalFeatures />

          {/* Advanced Charts */}
          <AdvancedCharts />

          {/* Issuer Scores */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedCard delay={0.4}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center text-2xl">
                    <Star className="mr-3 h-6 w-6 text-accent" />
                    Top Financial Institutions
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Real-time credit ratings, performance metrics, and risk assessments
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:border-primary/40">
                    View All Institutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {issuerScores.map((issuer, index) => (
                    <motion.div 
                      key={issuer.name} 
                      className="flex items-center justify-between p-6 bg-gradient-to-r from-muted/30 to-muted/10 rounded-xl hover:from-muted/50 hover:to-muted/20 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
                          whileHover={{ rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {index + 1}
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{issuer.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {issuer.rating}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {issuer.sector}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                issuer.risk === 'Low' ? 'border-success/40 text-success' : 
                                issuer.risk === 'Medium' ? 'border-financial-warning/40 text-financial-warning' : 
                                'border-destructive/40 text-destructive'
                              }`}
                            >
                              {issuer.risk} Risk
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <motion.div 
                          className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {issuer.score}
                        </motion.div>
                        <div className={`text-sm flex items-center justify-end mt-1 ${
                          issuer.change > 0 ? 'text-success' : 'text-destructive'
                        }`}>
                          {issuer.change > 0 ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          <span className="font-medium">
                            {issuer.change > 0 ? '+' : ''}{issuer.change}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;