import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Building, 
  Calendar,
  DollarSign,
  PieChart,
  BarChart3,
  Activity,
  Download,
  RefreshCw
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000, growth: 5.2 },
  { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000, growth: 7.8 },
  { month: 'Mar', revenue: 48000, expenses: 33000, profit: 15000, growth: 6.1 },
  { month: 'Apr', revenue: 61000, expenses: 40000, profit: 21000, growth: 12.3 },
  { month: 'May', revenue: 55000, expenses: 38000, profit: 17000, growth: 8.9 },
  { month: 'Jun', revenue: 67000, expenses: 42000, profit: 25000, growth: 15.4 },
  { month: 'Jul', revenue: 72000, expenses: 45000, profit: 27000, growth: 18.2 },
  { month: 'Aug', revenue: 68000, expenses: 43000, profit: 25000, growth: 16.7 },
  { month: 'Sep', revenue: 75000, expenses: 47000, profit: 28000, growth: 19.1 },
  { month: 'Oct', revenue: 78000, expenses: 49000, profit: 29000, growth: 20.5 },
  { month: 'Nov', revenue: 82000, expenses: 51000, profit: 31000, growth: 22.8 },
  { month: 'Dec', revenue: 85000, expenses: 53000, profit: 32000, growth: 24.1 },
];

const cashFlowData = [
  { month: 'Jan', inflow: 85000, outflow: 72000, netFlow: 13000 },
  { month: 'Feb', inflow: 92000, outflow: 78000, netFlow: 14000 },
  { month: 'Mar', inflow: 88000, outflow: 75000, netFlow: 13000 },
  { month: 'Apr', inflow: 105000, outflow: 89000, netFlow: 16000 },
  { month: 'May', inflow: 98000, outflow: 82000, netFlow: 16000 },
  { month: 'Jun', inflow: 112000, outflow: 95000, netFlow: 17000 },
  { month: 'Jul', inflow: 118000, outflow: 98000, netFlow: 20000 },
  { month: 'Aug', inflow: 115000, outflow: 96000, netFlow: 19000 },
  { month: 'Sep', inflow: 125000, outflow: 102000, netFlow: 23000 },
  { month: 'Oct', inflow: 132000, outflow: 107000, netFlow: 25000 },
  { month: 'Nov', inflow: 128000, outflow: 104000, netFlow: 24000 },
  { month: 'Dec', inflow: 135000, outflow: 109000, netFlow: 26000 },
];

const expenseBreakdown = [
  { name: 'Operations', value: 35, color: 'hsl(var(--primary))', amount: 18900 },
  { name: 'Personnel', value: 30, color: 'hsl(var(--financial-success))', amount: 16200 },
  { name: 'Marketing', value: 20, color: 'hsl(var(--accent))', amount: 10800 },
  { name: 'Technology', value: 10, color: 'hsl(var(--financial-info))', amount: 5400 },
  { name: 'Other', value: 5, color: 'hsl(var(--financial-warning))', amount: 2700 },
];

const performanceMetrics = [
  { quarter: 'Q1 2023', revenue: 145000, customers: 1250, satisfaction: 87 },
  { quarter: 'Q2 2023', revenue: 168000, customers: 1420, satisfaction: 89 },
  { quarter: 'Q3 2023', revenue: 185000, customers: 1580, satisfaction: 91 },
  { quarter: 'Q4 2023', revenue: 201000, customers: 1750, satisfaction: 93 },
  { quarter: 'Q1 2024', revenue: 225000, customers: 1920, satisfaction: 94 },
  { quarter: 'Q2 2024', revenue: 247000, customers: 2150, satisfaction: 95 },
];

const departmentPerformance = [
  { department: 'Sales', target: 100, achieved: 112, efficiency: 95 },
  { department: 'Marketing', target: 100, achieved: 87, efficiency: 78 },
  { department: 'Operations', target: 100, achieved: 105, efficiency: 92 },
  { department: 'Support', target: 100, achieved: 98, efficiency: 88 },
  { department: 'R&D', target: 100, achieved: 91, efficiency: 85 },
];

const riskMetrics = [
  { category: 'Credit Risk', current: 15, threshold: 25, status: 'low' },
  { category: 'Market Risk', current: 32, threshold: 40, status: 'medium' },
  { category: 'Operational Risk', current: 18, threshold: 30, status: 'low' },
  { category: 'Liquidity Risk', current: 12, threshold: 20, status: 'low' },
  { category: 'Compliance Risk', current: 8, threshold: 15, status: 'low' },
];

const BusinessProfile = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Business Profile</h1>
            <p className="text-muted-foreground">Comprehensive financial analytics and insights</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Company Info Card */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">TechCorp Industries</h2>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Founded 2015
                  </div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    Technology Sector
                  </div>
                  <Badge className="bg-financial-success/20 text-financial-success">
                    Credit Rating: A+
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-financial-success">$2.4M</div>
                <div className="text-sm text-muted-foreground">Annual Revenue</div>
                <div className="flex items-center text-sm text-financial-success">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15.2% YoY
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-financial-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-financial-success">$67,000</div>
              <p className="text-xs text-financial-success flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +21.8% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
              <Activity className="h-4 w-4 text-financial-danger" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-financial-danger">$42,000</div>
              <p className="text-xs text-financial-danger flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
              <PieChart className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">37.3%</div>
              <p className="text-xs text-financial-success flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.1% improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
              <BarChart3 className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-financial-success">$17,000</div>
              <p className="text-xs text-muted-foreground">
                Net positive this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="revenue">Revenue & Expenses</TabsTrigger>
            <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
            <TabsTrigger value="breakdown">Expense Breakdown</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Revenue vs Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: any) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Bar dataKey="revenue" fill="hsl(var(--financial-success))" name="Revenue" />
                    <Bar dataKey="expenses" fill="hsl(var(--financial-danger))" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cashflow">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5" />
                  Cash Flow Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={cashFlowData}>
                    <defs>
                      <linearGradient id="inflowGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--financial-success))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--financial-success))" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="outflowGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--financial-danger))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--financial-danger))" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: any) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="inflow" 
                      stackId="1" 
                      stroke="hsl(var(--financial-success))" 
                      fill="url(#inflowGradient)" 
                      name="Cash Inflow"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="outflow" 
                      stackId="2" 
                      stroke="hsl(var(--financial-danger))" 
                      fill="url(#outflowGradient)" 
                      name="Cash Outflow"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="breakdown">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="mr-2 h-5 w-5" />
                    Expense Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Tooltip formatter={(value: any, name: any) => [`${value}%`, name]} />
                      <Pie 
                        data={expenseBreakdown} 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={100} 
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {expenseBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {expenseBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{item.value}%</div>
                        <div className="text-sm text-muted-foreground">
                          ${item.amount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Quarterly Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={performanceMetrics}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="quarter" />
                      <YAxis yAxisId="revenue" orientation="left" />
                      <YAxis yAxisId="customers" orientation="right" />
                      <Tooltip 
                        formatter={(value: any, name: any) => [
                          name === 'revenue' ? `$${value.toLocaleString()}` : value,
                          name === 'revenue' ? 'Revenue' : name === 'customers' ? 'Customers' : 'Satisfaction'
                        ]}
                      />
                      <Line 
                        yAxisId="revenue"
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="hsl(var(--financial-success))" 
                        strokeWidth={3}
                        name="revenue"
                      />
                      <Line 
                        yAxisId="customers"
                        type="monotone" 
                        dataKey="customers" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        name="customers"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5" />
                    Customer Satisfaction Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={performanceMetrics}>
                      <defs>
                        <linearGradient id="satisfactionGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--financial-success))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--financial-success))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="quarter" />
                      <YAxis domain={[80, 100]} />
                      <Tooltip 
                        formatter={(value: any) => [`${value}%`, 'Satisfaction']}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="satisfaction" 
                        stroke="hsl(var(--financial-success))" 
                        fill="url(#satisfactionGradient)" 
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="departments">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Department Performance vs Target
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={departmentPerformance}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value: any, name: any) => [
                          `${value}%`, 
                          name === 'target' ? 'Target' : name === 'achieved' ? 'Achieved' : 'Efficiency'
                        ]}
                      />
                      <Bar dataKey="target" fill="hsl(var(--muted))" name="target" />
                      <Bar dataKey="achieved" fill="hsl(var(--financial-success))" name="achieved" />
                      <Bar dataKey="efficiency" fill="hsl(var(--primary))" name="efficiency" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Department Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departmentPerformance.map((dept, index) => {
                    const performance = dept.achieved - dept.target;
                    const isPositive = performance >= 0;
                    return (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{dept.department}</h4>
                          <Badge className={isPositive ? "bg-financial-success/20 text-financial-success" : "bg-financial-danger/20 text-financial-danger"}>
                            {isPositive ? '+' : ''}{performance}%
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <div className="text-muted-foreground">Target</div>
                            <div className="font-medium">{dept.target}%</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Achieved</div>
                            <div className="font-medium">{dept.achieved}%</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Efficiency</div>
                            <div className="font-medium">{dept.efficiency}%</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risk">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5" />
                    Risk Assessment Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={riskMetrics} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis type="number" domain={[0, 50]} />
                      <YAxis dataKey="category" type="category" width={100} />
                      <Tooltip 
                        formatter={(value: any, name: any) => [
                          `${value}%`, 
                          name === 'current' ? 'Current Risk' : 'Risk Threshold'
                        ]}
                      />
                      <Bar dataKey="threshold" fill="hsl(var(--muted))" name="threshold" />
                      <Bar dataKey="current" fill="hsl(var(--financial-warning))" name="current" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Status Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {riskMetrics.map((risk, index) => {
                    const riskLevel = risk.current / risk.threshold;
                    const statusColor = risk.status === 'low' ? 'financial-success' : 
                                      risk.status === 'medium' ? 'financial-warning' : 'financial-danger';
                    
                    return (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{risk.category}</h4>
                          <Badge className={`bg-${statusColor}/20 text-${statusColor}`}>
                            {risk.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Current: {risk.current}%</span>
                            <span>Threshold: {risk.threshold}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-${statusColor}`}
                              style={{ width: `${Math.min((riskLevel * 100), 100)}%` }}
                            />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Risk Utilization: {Math.round(riskLevel * 100)}%
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessProfile;