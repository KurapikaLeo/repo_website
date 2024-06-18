"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import { type } from 'os';
import React from 'react'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
          initial={{opacity:0, scale: 0}}
          animate={{opacity:1, scale:1}}
          transition={{type: "tween"}}
          >
          <Image src="/self.jpg" alt="justine" width="192" height="192" quality="95" priority={true}
          className='h-28 w-28 rounded-full border-[0.35rem] object-cover  border-white shadow-xl'/>
          </motion.div>
          <motion.div
          initial={{scale:0}}
          animate={{scale:1 }}
          transition={{type:"spring", stiffness: 200, delay: 0.1}}
          >
          <span className='text-4xl '>
           🐘
          </span>
          </motion.div>
        </div>
      </div>
      <p>
        <span className='font-bold'>My name is Justyna. </span>I'm a {" "}
        <span className='font-bold'>computer science student. </span> I love learning about{" "}
        <span className='italic'>Cybersecurity & the cloud. </span>

      </p>
    </section>
  )
}

