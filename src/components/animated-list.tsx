import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedListProps {
  children?: ReactNode[];
  className?: string;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  children = [],
  className = ''
}) => {
  return (
    <div 
      className={`projects-list-container ${className}`}
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60, rotateX: 12, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring' as const,
            stiffness: 65,
            damping: 14,
            mass: 0.8,
            delay: index * 0.06,
          }}
          style={{ width: '100%', originX: 0.5, originY: 0.5, transformStyle: 'preserve-3d' }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
