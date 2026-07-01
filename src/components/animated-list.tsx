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
    <div className={`projects-list-container ${className}`}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: 'spring' as const,
            stiffness: 70,
            damping: 15,
            delay: index * 0.05,
          }}
          style={{ width: '100%', originX: 0.5, originY: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
