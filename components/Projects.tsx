/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Card01 from './CardExp/Card01';
import { type } from 'os';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <div>
      <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>
            Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] scrollbar-thin'>
              {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                  <img src="/mock01.png" alt="" />
                  <h4>Case study {i+1} of {projects.length}: Web3 Edutech</h4>
                </div>
              ))}
                
                </div>
            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'/>
      </motion.div>
    </div>

  );
}