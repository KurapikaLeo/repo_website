'use client';

import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'


export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{opacity:0 , y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175}}
    id="about"
    >


      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I am currently in my <span className='font-medium'>third year of computer science in MTU</span>. Ever since I was very young I have been interested in detective stories and fell in love with ones like  
        <span className='italic underline'> Sherlock Holmes</span>. After hearing about cyber criminals hacking into companies like the HSE, I realised that this is the field that I really want to pursue and <span className='italic'> help people and businesses</span>.
        In my degree I have completed an <span className='underline'> introduction into cybersecurity module, linux operating system as well as networking modules</span> where I have learned about packet capturing using wireshark, 
        used Cisco packet tracer to learn about networks and setups, John the ripper and Hashcat as well as password spraying techniques and much more.
      </p>
      <p>
        In my free time I love learning about cybersecurity on my own from platforms like <span className='underline'> TCM academy and Try Hack Me</span>. <span className='underline'>I love art</span>, I've participated in competitions and particularly enjoy painting with acrylics and drawing.
        I'm an active member of the <span className='underline'> Krav maga club</span> and I am always open to learn new things!
        My dream is to <span className='underline'> travel the world</span> and explore the wonderful cultures!
      </p>
    </motion.section>
  )
}
