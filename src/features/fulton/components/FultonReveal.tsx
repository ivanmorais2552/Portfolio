'use client';

import type { ReactNode } from 'react';

import { motion, useReducedMotion } from 'motion/react';

type FultonRevealProps = {
  children: ReactNode;
  className?: string;
};

export function FultonReveal({ children, className = '' }: FultonRevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
