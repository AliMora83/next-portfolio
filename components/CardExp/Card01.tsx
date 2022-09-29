/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';


export default function Card01() {
  return (
    <><motion.img
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className='h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
          src="/ali_mora.png" alt="image" /><div className='px-0 md:px-10'>
              <h4 className='text-2xl font-light text-center'>FOUNDER</h4>
              <p className='font-semibold text-xl mt-1 text-center'>Open Mind Industries</p>
              <div className='flex space-x-2 my-2'>
                  <img className='h-10 w-10 rounded-full'
                      src="/ali_mora.png"
                      alt="image" />
              </div>
              <p className='uppercase py-5 text-gray-500 tracking-wider text-sm'>
                  Start date: BBB | End date BBB
              </p>
              <ul className='list-disc space-y-4 ml-5 text-lg'>
                  <li>BBB</li>
                  <li>BBB</li>
                  <li>BBB</li>
                  <li>BBB</li>
              </ul>
          </div></>
  )
}