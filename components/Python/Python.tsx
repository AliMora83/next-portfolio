import React from 'react'
import { motion } from 'framer-motion';
import Quizgame from './templates/Quizgame';



type Props = {}

function Python({}: Props) {
  return (
    <div>
      <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-6xl px-10 justify-evenly mx-auto items-center selection:bg-[#f7ab0a] selection:text-gray-100'>
        <h3 className='absolute top-24'>
            Python</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
        snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] scrollbar-thin'>
        
            <div className='w-full flex space-x-5  
        snap-x snap-mandatory overflow-x-scroll p-10
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>
                  <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[350px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
                        opacity-40 transition-opacity duration-200 overflow-hidden'>
                              <Quizgame />
                  </div>
                
                  
               
            </div>
        </div>
           
      </motion.div>
    </div>
  )
}

export default Python