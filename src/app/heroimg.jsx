'use client';

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
  

const HeroImg = () => {
  return (
    <>
    <motion.div
    variants={variants}
    initial="hidden"
    animate="show"
    >
        <motion.img src="/heroimg.png" alt="" width={600} height={600}  /> 
        {/* add this inside above motion.img bracket variants={images} */}
    </motion.div>
    </>
  )
}

export default HeroImg;