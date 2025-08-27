import React from 'react';
import { motion } from 'framer-motion';

interface LightRaysProps {
  className?: string;
}

const LightRays: React.FC<LightRaysProps> = ({ className }) => {
  return (
    <motion.div
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(255, 165, 0, 0.2) 0%, rgba(255, 165, 0, 0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(0, 123, 255, 0.2) 0%, rgba(0, 123, 255, 0) 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
    </motion.div>
  );
};

export default LightRays;
