/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  return (
    <div>
      <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>
            Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] scrollbar-thin'>
            
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                  <motion.img 
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:h-80 h-54"
                  src="/project_nft.png" alt="" />
                  <p className='text-[#f7ab0a] uppercase text-base'> 
                   Case study 1 of 3</p>
                  <h4 className='text-xl md:text-3xl font-semibold text-center uppercase tracking-wider'>
                    NFT Marketplace</h4>
                  <p className='text-base text-gray-300 text-center max-w-lg'>
                  Free State, South Africa’s first digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive local digital items.</p>
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                  <motion.img 
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:h-80 h-54"
                  src="/project_dao.png" alt="" />
                  <p className='text-[#f7ab0a] uppercase text-base'> 
                   Case study 2 of 3</p>
                  <h4 className='text-xl md:text-3xl font-semibold text-center uppercase tracking-wider'>
                    Web3 DAO</h4>
                  <p className='text-base text-gray-300 text-center max-w-lg'>
                  Decentralized Autonomous Organization. The blockchain application automates decisions through the consensus between participants. Usually owns the treasury in cryptocurrency value.</p>
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                  <motion.img 
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:h-80 h-54"
                  src="/project_draw.png" alt="" />
                   <p className='text-[#f7ab0a] uppercase text-base'> 
                   Case study 3 of 3</p>
                  <h4 className='text-xl md:text-3xl font-semibold text-center uppercase tracking-wider'>
                    Crypto Draw</h4>
                  <p className='text-base text-gray-300 text-center max-w-lg'>
                  A tool for raising funds, by buying a certian amount of tickets, and distributing rewards to the bearer for the winning ticket, drawn at random. It is a game whose victory or failure is lead by probability.</p>
                </div>
            
              
              </div>
            <div className='w-full absolute top-[30%] bg-[#2d2d2d] left-0 h-[500px] -skew-y-12'/>
      </motion.div>
    </div>

  );
}