import React from 'react';
import { motion } from 'framer-motion';


type Props = {
    directionLeft?: boolean;
};

export default function Skil({directionLeft}: Props) {
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
        src="https://imgs.search.brave.com/Q7vsndj7akXd7BbNA0eEaiCkAbaDyLYJTzq7cNKT3go/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZ29z/LWRvd25sb2FkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wOS9SZWFjdF9s/b2dvX2xvZ290eXBl/X2VtYmxlbS5wbmc" alt="image" />
        <div className="absolute opacity-0 rounded-full border border-gray-500 object-cover w-24 h-24
        xl:w-32 xl:h-32 filter group-hover:opacity-80 transition duration-300 ease-in-out
        md:w-28 md:h-28 group-hover:bg-white z-0">
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </motion.div>
  )
}