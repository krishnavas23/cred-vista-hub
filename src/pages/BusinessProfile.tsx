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
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Feb', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 33000 },
  { month: 'Apr', revenue: 61000, expenses: 40000 },
  { month: 'May', revenue: 55000, expenses: 38000 },
  { month: 'Jun', revenue: 67000, expenses: 42000 },
];

const cashFlowData = [
  { month: 'Jan', inflow: 85000, outflow: 72000 },
  { month: 'Feb', inflow: 92000, outflow: 78000 },
  { month: 'Mar', inflow: 88000, outflow: 75000 },
  { month: 'Apr', inflow: 105000, outflow: 89000 },
  { month: 'May', inflow: 98000, outflow: 82000 },
  { month: 'Jun', inflow: 112000, outflow: 95000 },
];

const expenseBreakdown = [
  { name: 'Operations', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Marketing', value: 25, color: 'hsl(var(--accent))' },
  { name: 'Personnel', value: 20, color: 'hsl(var(--financial-success))' },
  { name: 'Other', value: 10, color: 'hsl(var(--financial-warning))' },
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="revenue">Revenue & Expenses</TabsTrigger>
            <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
            <TabsTrigger value="breakdown">Expense Breakdown</TabsTrigger>
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
                      <Tooltip formatter={(value: any) => [`${value}%`, 'Percentage']} />
                      <Pie 
                        data={expenseBreakdown} 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={100} 
                        dataKey="value"
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
                          ${((item.value / 100) * 42000).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
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