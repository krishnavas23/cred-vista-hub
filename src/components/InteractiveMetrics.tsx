import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Activity, PieChart, BarChart3, Target, Zap } from 'lucide-react';

const metrics = [
  {
    title: 'Total Portfolio Value',
    value: '$2.4M',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-success',
    bgColor: 'bg-success/10',
    description: 'Monthly growth'
  },
  {
    title: 'Credit Score Average',
    value: '87.3',
    change: '+1.2',
    trend: 'up',
    icon: Activity,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    description: 'Points this week'
  },
  {
    title: 'Risk Assessment',
    value: 'Low',
    change: 'Stable',
    trend: 'stable',
    icon: PieChart,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    description: 'Diversified portfolio'
  },
  {
    title: 'Monthly Return',
    value: '8.2%',
    change: '-0.3%',
    trend: 'down',
    icon: BarChart3,
    color: 'text-financial-warning',
    bgColor: 'bg-financial-warning/10',
    description: 'From target'
  },
  {
    title: 'Active Investments',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: Target,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    description: 'New positions'
  },
  {
    title: 'Performance Score',
    value: '94.8',
    change: '+2.1',
    trend: 'up',
    icon: Zap,
    color: 'text-success',
    bgColor: 'bg-success/10',
    description: 'Overall rating'
  }
];

const InteractiveMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <Card className="h-full transition-all duration-300 hover:shadow-hover border-border/50 backdrop-blur-sm bg-card/80 group-hover:bg-card/90">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <motion.div
                  className={`p-2 rounded-lg ${metric.bgColor}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="text-2xl font-bold mb-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {metric.value}
                </motion.div>
                <div className="flex items-center justify-between">
                  <div className={`text-xs flex items-center ${
                    metric.trend === 'up' ? 'text-success' : 
                    metric.trend === 'down' ? 'text-destructive' : 'text-muted-foreground'
                  }`}>
                    {metric.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                    {metric.trend === 'down' && <TrendingDown className="h-3 w-3 mr-1" />}
                    {metric.change}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {metric.description}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default InteractiveMetrics;