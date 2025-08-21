import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hover?: boolean;
}

const AnimatedCard = ({ children, delay = 0, className = '', hover = true }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      } : undefined}
      className={className}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-hover border-border/50 backdrop-blur-sm bg-card/80">
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;