import React from 'react';
import { motion } from 'framer-motion';


type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
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
            {projects.map((project, i) => (
            
                // eslint-disable-next-line react/jsx-key
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{opacity:0, y:-300}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1.5}} 
                    viewport={{once:true}}
                    className='h-80 w-80'
                    src="/mock01.png" alt="mockup" />
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-xl font-semibold text-center md:text-2xl xl:text-4xl'>
                    <span className='underline decoration-[#f7ab0a] uppercase'>
                    Case-study {i + 1} | {projects.length}:</span>{" "} Web3 Edutech</h4>
                <p className='text-sm text-center max-w-2xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod non deserunt quia adipisci maxime sunt odit repudiandae, 
                    vero voluptates quas animi quam aliquid! Odio voluptas culpa ipsum aspernatur dolorum. Reiciendis!
                    Quod non deserunt quia adipisci maxime sunt odit repudiandae, 
                    vero voluptates quas animi quam aliquid! Odio voluptas culpa ipsum aspernatur dolorum.</p>
                </div>
                </div>
            ))}
            </div>
          
            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'/>
       
    </motion.div>
  );
}