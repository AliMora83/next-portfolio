import React from 'react';
import { motion } from 'framer-motion';
import ExpCard from './ExpCard';

type Props = {}

export default function WorkExp({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExpCard />
            <ExpCard />
            <ExpCard />
            <ExpCard />
        </div>
        </motion.div>
  )
}