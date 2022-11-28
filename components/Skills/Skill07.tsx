import React from 'react';
import { motion } from 'framer-motion';


export default function Skill07(directionLeft: any) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex relative group cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? 200 : -200,
            opacity: 0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        className="rounded-full border border-gray-500 object-cover w-16 h-16
        filter group-hover:grayscale transition duration-300 ease-in-out md:w-24 md:h-24"
        src="/mongodb.png" alt="image" />

        <div className="absolute opacity-0 rounded-full border border-gray-500 object-cover w-16 h-16
        filter group-hover:opacity-80 transition duration-300 ease-in-out md:w-24 md:h-24 group-hover:bg-white z-0">
          <a href="https://www.mongodb.com/" target="_blank" rel='noreferrer'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm font-bold text-black opacity-100'>
                    MONGODB</p>
            </div></a>
        </div>
    </motion.div>
  )
}