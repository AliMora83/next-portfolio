import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

export default function Skilll({skill, directionLeft}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex relative group cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        className="rounded-full border border-gray-500 object-cover w-24 h-24
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out
        md:w-28 md:h-28"
        src={urlFor(skill?.image).url()} alt="image" />

        <div className="absolute opacity-0 rounded-full border border-gray-500 object-cover w-24 h-24
        xl:w-32 xl:h-32 filter group-hover:opacity-80 transition duration-300 ease-in-out
        md:w-28 md:h-28 group-hover:bg-white z-0">
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skill.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}