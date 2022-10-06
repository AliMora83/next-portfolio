import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';


function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}

        className='flex flex-row items-center hover:text-[#f7ab0a]'>
            
                <SocialIcon url='https://github.com/alimora83'
                target='_blank' 
                fgColor='gray' 
                bgColor='transparent'/>
                <SocialIcon url='https://www.facebook.com/Dauriuss/'
                target='_blank' 
                fgColor='gray' 
                bgColor='transparent'/>
                <SocialIcon url='https://www.linkedin.com/in/daurius-ali-swarts-1b151420b/'
                target='_blank' 
                fgColor='gray' 
                bgColor='transparent'/>
                <SocialIcon url='https://twitter.com/swarts_d'
                target='_blank' 
                fgColor='gray' 
                bgColor='transparent'/>
            
        </motion.div>
        <motion.div 
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}>
        <a href="#contact">
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/></a>
           <a href="https://invincible-guavaberry-51f.notion.site/DS-Resume-2022-85246e7b41a143919dd814ef2e8f5263" target="_blank" rel='noreferrer'>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400 hover:text-gray-100'>
                View My Resume</p></a>
        </motion.div>
    </header>
  )}

export default Header