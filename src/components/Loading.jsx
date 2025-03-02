import React from 'react';
import { motion as Motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loading; 