/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';


export default function Projects() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>
            Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] scrollbar-thin'>
         
            
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{opacity:0, y:-300}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.5}} 
                    viewport={{once:true}}
                    className='h-20 w-20'
                    src="/ali_mora.png" 
                    alt="mockup" />
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-xl font-semibold text-center md:text-2xl xl:text-4xl'>
                    <span className='underline decoration-[#f7ab0a] uppercase'>
                    Case-study 1/3</span>Web3 Dapp</h4>

                    <div>
                       
                       <img 
                       src="/ali_mora.png" 
                       alt="image" />     
                     
                    </div>
               
                        <p className='text-sm text-center max-w-2xl'>
                   BBBB</p>
                
                
                </div>
                </div>
      
            </div>
          
            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'/>
       
    </motion.div>
  );
}