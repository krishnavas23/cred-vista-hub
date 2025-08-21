import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Area, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Activity, TrendingUp, BarChart3, PieChart as PieChartIcon } from 'lucide-react';

const performanceData = [
  { month: 'Jan', revenue: 2400, volume: 1200, growth: 5.2, profit: 1800 },
  { month: 'Feb', revenue: 2210, volume: 1400, growth: -7.9, profit: 1600 },
  { month: 'Mar', revenue: 2890, volume: 1800, growth: 30.8, profit: 2200 },
  { month: 'Apr', revenue: 3490, volume: 2100, growth: 20.8, profit: 2800 },
  { month: 'May', revenue: 4200, volume: 2400, growth: 20.3, profit: 3400 },
  { month: 'Jun', revenue: 3800, volume: 2200, growth: -9.5, profit: 3000 },
  { month: 'Jul', revenue: 4100, volume: 2600, growth: 7.9, profit: 3300 },
  { month: 'Aug', revenue: 4500, volume: 2800, growth: 9.8, profit: 3600 },
  { month: 'Sep', revenue: 4200, volume: 2500, growth: -6.7, profit: 3400 },
  { month: 'Oct', revenue: 4800, volume: 3000, growth: 14.3, profit: 3800 },
  { month: 'Nov', revenue: 5200, volume: 3200, growth: 8.3, profit: 4100 },
  { month: 'Dec', revenue: 5800, volume: 3500, growth: 11.5, profit: 4600 },
];

const riskData = [
  { name: 'Low Risk', value: 45, fill: 'hsl(var(--success))' },
  { name: 'Medium Risk', value: 35, fill: 'hsl(var(--primary))' },
  { name: 'High Risk', value: 20, fill: 'hsl(var(--destructive))' },
];

const sectorData = [
  { sector: 'Banking', score: 78, fill: 'hsl(var(--primary))' },
  { sector: 'Tech', score: 85, fill: 'hsl(var(--accent))' },
  { sector: 'Healthcare', score: 72, fill: 'hsl(var(--success))' },
  { sector: 'Energy', score: 68, fill: 'hsl(var(--financial-warning))' },
];

const AdvancedCharts = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial insights with interactive charts and real-time data visualization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="performance" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:mx-auto">
              <TabsTrigger value="performance" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Performance
              </TabsTrigger>
              <TabsTrigger value="risk" className="flex items-center gap-2">
                <PieChartIcon className="h-4 w-4" />
                Risk Analysis
              </TabsTrigger>
              <TabsTrigger value="sectors" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Sectors
              </TabsTrigger>
              <TabsTrigger value="trends" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trends
              </TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5 text-primary" />
                    Portfolio Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={performanceData}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        fill="url(#revenueGradient)"
                        stroke="hsl(var(--primary))"
                        name="Revenue"
                      />
                      <Bar dataKey="volume" fill="hsl(var(--accent))" name="Volume" />
                      <Line 
                        type="monotone" 
                        dataKey="profit" 
                        stroke="hsl(var(--success))" 
                        strokeWidth={3}
                        name="Profit"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Risk Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={riskData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {riskData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle>Sector Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={sectorData}>
                        <RadialBar dataKey="score" cornerRadius={10} />
                        <Tooltip />
                        <Legend />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sectors">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Sector Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sectorData.map((sector, index) => (
                      <motion.div
                        key={sector.sector}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: sector.fill }}
                          />
                          <span className="font-medium">{sector.sector}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full"
                              style={{ backgroundColor: sector.fill }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${sector.score}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="font-bold">{sector.score}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Growth Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="growth"
                        fill="hsl(var(--accent))"
                        stroke="hsl(var(--accent))"
                        fillOpacity={0.3}
                      />
                      <Line
                        type="monotone"
                        dataKey="growth"
                        stroke="hsl(var(--primary))"
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedCharts;