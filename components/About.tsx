import React from 'react';
import { motion } from 'framer-motion';



export default function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>
            about</h3>
    
   
    <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{x: 0, opacity: 1}}
            src="/ali_mora2.jpg"
            alt='image'
            className='-mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
    /> 
    
    <div className='space-y-10 px-0 md:px-10' >
        <h4 className='text-4xl font-semibold uppercase tracking-wider'>
            More about <span className='underline decoration-[#f7ab0a]'>me</span></h4>
        <p className='text-base text-gray-500'>
        With over 15 years Advertising Experience, building brands for small companies. I make use of Adobe CC for Graphic Design, Visual Effects, DTP and Prototyping.
        </p>
        
    </div>
    </motion.div>
  )
}