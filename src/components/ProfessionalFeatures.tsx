import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Target, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Bank-grade encryption and multi-factor authentication protect your financial data with zero-trust architecture.',
    color: 'text-success',
    bgColor: 'bg-success/10'
  },
  {
    icon: Zap,
    title: 'Real-time Analytics',
    description: 'Get instant insights with live market data, predictive analytics, and ML-powered recommendations.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Target,
    title: 'Smart Alerts',
    description: 'Customizable notifications for market changes, portfolio updates, and risk threshold breaches.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: Award,
    title: 'Expert Insights',
    description: 'Access professional-grade research, market analysis tools, and institutional-level data feeds.',
    color: 'text-financial-warning',
    bgColor: 'bg-financial-warning/10'
  }
];

const ProfessionalFeatures = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-background to-muted/20"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for financial professionals who demand the highest standards of accuracy, security, and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-elegant border-border/50 backdrop-blur-sm bg-card/80 group-hover:bg-card/90 group-hover:border-primary/20">
                  <CardHeader className="text-center">
                    <motion.div
                      className={`mx-auto p-4 rounded-2xl ${feature.bgColor} mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group-hover:text-primary transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ProfessionalFeatures;