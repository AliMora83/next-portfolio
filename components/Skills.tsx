import React from 'react';
import { motion } from 'framer-motion';
import Skill01 from './Skill01';
import Skill02 from './Skill02';
import Skill03 from './Skill03';
import Skill04 from './Skill04';
import Skill05 from './Skill05';
import Skill06 from './Skill06';
import Skill07 from './Skill07';
import Skill08 from './Skill08';
import Skill10 from './Skill10';
import Skill09 from './Skill09';

export default function Skills() {
  return (
    <motion.div
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative min-h-screen text-center md:text-left md:flex-row
    max-w-[2000px] xl:px-10 xl:space-y-0 justify-center mx-auto items-center selection:bg-[#f7ab0a] selection:text-gray-100'>
        <h3 className='absolute top-24'>
            Technologies</h3>

        <h4 className='absolute top-36 animate-pulse'>
            Hover over skill icon</h4>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
           
              <Skill01 />
              <Skill02 />
              <Skill03 />
              <Skill04 />
              <Skill05 />
              <Skill06 />
              <Skill07 />
              <Skill08 />
              <Skill09 />
              <Skill10 />
        </div>
    </motion.div>
  )
}