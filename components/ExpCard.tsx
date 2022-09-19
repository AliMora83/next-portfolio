/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ExpCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        className='h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
        src="ali_mora.png" alt="image" />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light text-center'>FOUNDER</h4>
            <p className='font-semibold text-xl mt-1 text-center'>Open Mind Industries</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full'
                src="https://imgs.search.brave.com/1BcVcmdSrY-PXvLWxr2dnB1X0q4JOPlDumA9Hmxr2RE/rs:fit:600:600:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvamF2YXNjcmlw/dC12ZWN0b3ItcG5n/LWphdmFzY3JpcHQt/dmVjdG9yLWxvZ28t/NjAwLnBuZw" alt="image" />
            
            </div>
            <p className='uppercase py-5 text-gray-500 tracking-wider text-sm'>Start date: ... | End date: ...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}