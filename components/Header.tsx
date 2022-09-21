import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '../typings';


type Props = {
    socials: Social[];
}

function Header({socials}: Props) {
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
            {socials.map((socials) => (
                <SocialIcon 
                key={socials._id}
                url={socials.url} 
                target='_blank' 
                fgColor='gray' 
                bgColor='transparent'/>
            ))}
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
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p></a>
        </motion.div>
    </header>
  )
}

export default Header