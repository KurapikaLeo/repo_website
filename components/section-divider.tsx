'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className='relative flex items-center justify-center my-24'>
      <motion.div
        className='bg-gray-200 h-16 w-1 rounded-full dark:bg-opacity-20'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      />
      <motion.div
        className='absolute -top-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className='text-2xl'>🌷</span>
      </motion.div>
     
    </div>
  );
}
