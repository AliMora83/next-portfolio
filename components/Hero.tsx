/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';



function Hero() {
    const [text, count] = useTypewriter({
        words: [
            `🏆 I am Ali Mora, welcome 🏆`,
            "I-Program-the-Future.tsx",
            "<And-Loves-Traveling />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        
            <BackgroundCircles />
                <img className='relative rounded-full h-32 w-32 mx-auto object-cover' 
                  src="/ali_mora.png"
                  alt="" />

            <div className='z-20'>
            
              <h2 className='uppercase text-sm text-gray-500 pb-2 pt-5 tracking-[8px]
               selection:bg-[#f7ab0a] selection:text-gray-100'>
                  full stack <span className='text-white animate-pulse'>web3</span> developer</h2>
            
                <h1 className='text-xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7aB0a'/>
                </h1>
                <div className='pt-5'>
                    <Link href="#about"><button className='heroButton'>About</button></Link>
                    <Link href="#clients"><button className='heroButton'>Clients</button></Link>
                    <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                    <Link href="#projects"><button className='heroButton'>Projects</button></Link>
                    <Link href="#python"><button className='heroButton'>Python</button></Link>
                    
                </div>
                </div>
            
    </div>
  )
}

export default Hero
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

