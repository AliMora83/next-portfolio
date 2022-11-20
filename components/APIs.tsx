import React from 'react';
import { motion } from 'framer-motion';
import ExpCard from './ExpCard';
import Card01 from './CardExp/Card01';
import Card02 from './CardExp/Card02';
import Card03 from './CardExp/Card03';
import Card04 from './CardExp/Card04';
import Card05 from './CardExp/Card05';
import Api01 from './Apis/Api01';
import Api02 from './Apis/Api02';
import Api03 from './Apis/Api03';
import Api04 from './Apis/Api04';


export default function APIs() {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center selection:bg-[#f7ab0a] selection:text-gray-100'>
        <h3 className='absolute top-24'>
            namka api </h3>
        
        <div className='w-full flex space-x-5  
        snap-x snap-mandatory overflow-x-scroll p-10
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[350px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 transition-opacity duration-200 overflow-hidden'>
                              <Api01 />
                  </div>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[350px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 transition-opacity duration-200 overflow-hidden'>
                              <Api02 />
                  </div>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[350px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 transition-opacity duration-200 overflow-hidden'>
                              <Api03 />
                  </div>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[350px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 transition-opacity duration-200 overflow-hidden'>
                              <Api04 />
                  </div>
        </div>
        </motion.div>
  )}