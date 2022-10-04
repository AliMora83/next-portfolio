/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';


export default function Card03() {
  return (
    <article><a href="https://institutedbs.com/" target="_blank" rel='noreferrer'>
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='h-24 w-24 rounded-full mt-6'
          src="/idbs_icon.png" alt="image" /></a>
          <div className='px-0 md:px-10 pt-5 text-left'>
              <h4 className='text-xl font-light'>IDBS Online Learning</h4>
              <p className='font-semibold text-l mt-1'>Cape Town | International</p>
              <div className='flex space-x-2 my-2 mt-5'>
                  <img className='h-10 w-10 rounded-full'
                      src="/indesign.webp"
                      alt="image" />
                  <img className='h-10 w-10 rounded-full'
                      src="/canva.webp"
                      alt="image" />
                  <img className='h-10 w-10 rounded-full'
                      src="/wordpress.webp"
                      alt="image" />
                  <img className='h-10 w-10 rounded-full'
                      src="/thirdweb.webp"
                      alt="image" />
              </div>
              <p className='uppercase py-5 text-gray-500 tracking-wider text-xs'>
                  from: Feb 10 2020
              </p>
              <ul className='list-none space-y-4 ml-5 text-base text-gray-300'>
                  <li>Full-stack Web Development</li>
                  <li>Presentations, Graphic Design</li>
                  <li>Web3 Education Platform</li>
                
              </ul>
          </div>
    </article>
  )
}