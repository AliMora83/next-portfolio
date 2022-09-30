import React from 'react';
import { motion } from 'framer-motion';
import ExpCard from './ExpCard';
import Card01 from './CardExp/Card01';
import Card02 from './CardExp/Card02';


export default function WorkExp() {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>experience</h3>
        
        <div className='w-full flex space-x-5  
        snap-x snap-mandatory overflow-x-scroll p-10
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[300px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                              <Card01 />
                  </div>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[300px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                              <Card02 />
                  </div>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[300px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                              <Card01 />
                  </div>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[300px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                              <Card02 />
                  </div>
        </div>
        </motion.div>
  )}