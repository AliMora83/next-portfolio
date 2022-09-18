import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey, I am Ali Mora",
            "Programmer-of-Gold.tsx",
            "<And-Loves-Traveling />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' 
            src="/ali_mora.png" alt="Image" />
            
            <div className='z-20'>
               
                <h2 className='uppercase text-sm text-gray-500 pb-2 pt-5 tracking-[15px]'>software engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7aB0a'/>
                </h1>
                <div className='pt-5'>
                    <Link href="#about"><button className='heroButton'>About</button></Link>
                    <Link href="#exp"><button className='heroButton'>Experience</button></Link>
                    <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                    <Link href="#projects"><button className='heroButton'>Projects</button></Link>
                    
                </div>
                </div>
            
    </div>
  )
}

export default Hero