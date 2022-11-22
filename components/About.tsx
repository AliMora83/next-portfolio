import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24'>
            about</h3>
    
   
    <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{x: 0, opacity: 1}}
            src="/ali_mora2.jpg"
            alt='image'
            className='md:mb-0 mt-28 flex-shrink-0 w-24 h-24 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
    /> 
    
    <div className='space-y-10 px-0 md:px-10 selection:bg-[#f7ab0a] selection:text-gray-100' >
        <h2 className='md:text-left'>
            More about <span className='underline decoration-[#f7ab0a]'>me</span></h2>
        <p className='text-sm text-gray-500 max-w-2xl text-left'> Born Daurius Swarts, a.k.a. Ali Mora. 
        With over a decade Advertising Experience, building brands for small companies. I made use of Adobe CC for Graphic Design, Visual Effects, DTP and Prototyping.
        Now, as a Fullstack Web3 Developer, I use Tailwind CSS, React and Next.js, MongoDB and ThirdWeb for Smart Contracts.
        </p>
        <p className='text-sm text-gray-500 max-w-2xl text-left'>
            I am open to partner with Individuals(Content Creators, Artists, Teachers) or Organisations (Real Estate, FinTech, Art Galleries).
            South Africa is my home! Looking forward to traveling and programming a better future with everyone I meet.
            </p>
            <div>
            <a href="https://www.udemy.com/certificate/UC-3a085922-4210-4387-9452-efcec9475ff8/" target="_blank" rel='noreferrer'>
                    <button className='heroButton'>Udemy Certificate</button></a>
            <br/>
            <a href="https://cs50.harvard.edu/x/2022/syllabus/" target="_blank" rel='noreferrer'>
                    <button className='heroButton'>CS50 Syllabus</button></a>
            </div>
    </div>
    </motion.div>
  )
}