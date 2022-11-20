/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';


export default function Api04() {
  return (
    <article><a href="https://alimora83.github.io/Drum-Kit/" target="_blank" rel='noreferrer'>
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='h-50 w-30 rounded-md mt-6'
          src="/drum_kit.png" alt="image" /></a>
          <div className='px-0 md:px-10 pt-5 text-center'>
              <h5 className='text-gray-200'>Drum Kit</h5>
              <p className='font-medium mt-1'>Build using JavaScript</p>
             
              <p className='uppercase py-5 text-gray-500 tracking-wider text-xs'>
                  Date: Feb 10 2022
              </p>
              <p className='mt-1'>
                Use your mouse to play the drums or type the corresponding letter on the keyboard. </p>
             
          </div>
    </article>
  )
}