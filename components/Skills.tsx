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
            Hover over skill icon</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
           
              <Skill01 />
              <Skill02 />
              <Skill03 />
              <Skill04 />
              <Skill05 />
              <Skill06 />
              <Skill07 />
              <Skill08 />
        </div>
    </motion.div>
  )
}