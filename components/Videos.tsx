/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Videos({}: Props) {
  return (
    <div>
      <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-6xl px-10 justify-evenly mx-auto items-center selection:bg-[#f7ab0a] selection:text-gray-100'>
        <h3 className='absolute top-24'>
            Videos</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
        snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] scrollbar-thin'>
            
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 scroll-px-2
                items-center justify-center p-20 md:p-44 h-screen '>
                  
                  <div>
                  <iframe width="560" height="360" src="https://www.youtube.com/embed/_00mdxryRTQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                  </iframe>
                  </div>

                  <p className='text-[#f7ab0a] uppercase text-sm'> 
                   Case study 1 of 3</p>
                  <h2 className=''>
                    NK Note App</h2>
                  <p className=''>
                  This Note App was developed using Scrimba. Click below to view the code and test the NAMKA Note App.</p>
                
                  <a href="https://scrimba.com/scrim/c6Rn2rur" target="_blank" rel='noreferrer'>
                    <button className='heroButton'>NAMKA NOTE APP</button></a>

                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

                <div>
                  <iframe width="560" height="360" src="https://www.youtube.com/embed/GTXg1TpHIOw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                  </iframe>
                  </div>

                  <p className='text-[#f7ab0a] uppercase text-sm'> 
                   Case study 2 of 3</p>
                  <h2 className=''>
                    Converter App</h2>
                  <p className=''>
                  This unit Converter helps to translate Mass, Volume and Weight, respectively. I made use of JavaScript in Visual Studio Code.</p>
                
                  <a href="https://youtu.be/GTXg1TpHIOw" target="_blank" rel='noreferrer'>
                    <button className='heroButton'>Watch on YouTube</button></a>

                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

                <div>
                  <iframe width="560" height="360" src="https://www.youtube.com/embed/-NTnwZqojX4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                  </iframe>
                  </div>

                   <p className='text-[#f7ab0a] uppercase text-sm'> 
                   Case study 3 of 3</p>
                  <h2 className=''>
                    Counter App</h2>
                  <p className=''>
                  This Counter App was build with JavaScript as part of my Programming studies. More updates will be made to the App in the future. </p>
                  
                  <a href="https://youtu.be/-NTnwZqojX4" target="_blank" rel='noreferrer'>
                    <button className='heroButton'>Watch on YouTube</button></a>
                </div>
            
              
              </div>
            <div className='w-full absolute top-[30%] bg-[#2d2d2d] left-0 h-[500px] -skew-y-12'/>
      </motion.div>
    </div>

  );
}