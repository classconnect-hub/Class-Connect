"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{ opacity: 0, y: 15 }}
        transition={{
          delay: 0.50,
          duration: 0.5,
        }}
      >
        {children}
        {/*
          Add a new motion.div for the floating effect
          You can adjust the values to your liking
        */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Your content here */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </>
);