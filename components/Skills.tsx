import React from 'react';
import { motion } from 'framer-motion';
import Skilll from './Skilll';

export default function Skills() {
  return (
    <motion.div
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative min-h-screen text-center md:text-left md:flex-row
    max-w-[2000px] xl:px-10 xl:space-y-0 justify-center mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>
            skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over skill icon for proficiency</h3>

        <div className="grid grid-cols-4 gap-5">
           
              <Skilll />
              <Skilll />
              <Skilll />
       
              <Skilll directionLeft/>
              <Skilll directionLeft/>
              <Skilll directionLeft/>
        </div>
    </motion.div>
  )
}