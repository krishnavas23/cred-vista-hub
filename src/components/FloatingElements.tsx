import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-success/10 to-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--border))_1px,_transparent_0)] bg-[size:50px_50px] opacity-20" />
    </div>
  );
};

export default FloatingElements;