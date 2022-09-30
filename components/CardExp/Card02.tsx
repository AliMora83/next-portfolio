/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';


export default function Card02() {
  return (
    <article>
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] justify-center items-center'
          src="/twotone_logo.jpg" alt="image" />
          <div className='px-0 md:px-10 pt-5'>
              <h4 className='text-xl font-light'>GRAPHIC DESIGNER</h4>
              <p className='font-semibold text-l mt-1'>TWO TONE GLOBAL</p>
              <div className='flex space-x-2 my-2'>
                  <img className='h-10 w-10 rounded-full'
                      src="/photoshop.webp"
                      alt="image" />
                  <img className='h-10 w-10 rounded-full'
                      src="/premier.webp"
                      alt="image" />
                  <img className='h-10 w-10 rounded-full'
                      src="/after.webp"
                      alt="image" />
              </div>
              <p className='uppercase py-5 text-gray-500 tracking-wider text-sm'>
                  from: Feb 10 2016 | to: 2017
              </p>
              <ul className='list-none space-y-4 ml-5 text-lg'>
                  <li>Managing client proposals from typesetting through to graphic design, print and production.</li>
                  <li>Corporate Identity Development </li>
                  <li>Annual Reports and Desktop Publishing</li>
                
              </ul>
          </div>
    </article>
  )
}