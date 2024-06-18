"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import { type } from 'os';
import React from 'react'
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs"
import { HiDownload } from "react-icons/hi";


export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
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
      <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      >
        <span className='font-bold'>My name is Justyna. </span>I'm a {" "}
        <span className='font-bold'>computer science student. </span> I love learning about{" "}
        <span className='italic underline'>Cybersecurity & the cloud. </span>

      </motion.p>




      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium '
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y:0}}
      transition={{delay: 0.1}}>
      <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
          ">
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-[#ede9fe] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack shadow-lg"
          href="/CV.pdf"
          download>
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

      <a className=' bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
      href="https://www.linkedin.com/in/justyna-leoniuk-386b7719a/">
        <BsLinkedin />
      </a>


      <a className=' bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
      href = "https://github.com/KurapikaLeo">
        <BsGithub />
      </a>

      </motion.div>



    </section>
  );

  }
