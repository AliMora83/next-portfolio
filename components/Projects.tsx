/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-6xl px-10 justify-evenly mx-auto items-center selection:bg-[#f7ab0a] selection:text-gray-100"
      >
        <h3 className="absolute top-24">
          Projects
        </h3>
        <div
          className="relative w-full flex overflow-x-scroll overflow-y-hidden
          snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] scrollbar-thin"
        >
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 scroll-px-2
                    items-center justify-center p-20 md:p-44 h-screen "
          >
            <a
              href="https://namka-marketplace.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:h-80 h-44 mt-14"
                src="/nk_nft.png"
                alt=""
              />
            </a>
            <p className="text-[#f7ab0a] uppercase text-sm">
              Case study 1 of 3
            </p>
            <h2 className="">NFT Marketplace</h2>
            <p className="">
              Free State, South Africa’s first
              digital marketplace for crypto
              collectibles and non-fungible tokens
              (NFTs). Buy, sell, and discover
              exclusive local digital items.
            </p>

            <a
              href="https://namka-marketplace.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="heroButton">
                NAMKA MARKETPLACE
              </button>
            </a>
          </div>
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:h-80 h-44 mt-14"
              src="/dm_icon.png"
              alt=""
            />
            <p className="text-[#f7ab0a] uppercase text-sm">
              Case study 2 of 3
            </p>
            <h2 className="">DevelopMe</h2>
            <p className="">
            Connect with experienced mentors.
            </p>

            <a href="https://www.behance.net/gallery/173247639/Develop-Me">
              <button className="heroButton">
                View Live Link 
              </button>
            </a>
          </div>
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <a
              href="https://devconnect-v2.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:h-80 h-44 mt-14"
                src="/dc_icon.png"
                alt=""
              />
            </a>
            <p className="text-[#f7ab0a] uppercase text-sm">
              Case study 3 of 3
            </p>
            <h2 className="">DevConnect</h2>
            <p className="">
            A Platform that creates connections between junior developers and clients in search of cost-effective software solutions. We facilitate growth through real-world projects and hands-on learning, empowering both developers and clients in a mutually beneficial partnership.
            </p>

            <a
              href="https://devconnect-v2.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="heroButton">
              View Live Link 
              </button>
            </a>
          </div>
        </div>
        <div className="w-full absolute top-[30%] bg-[#2d2d2d] left-0 h-[500px] -skew-y-12" />
      </motion.div>
    </div>
  );
}
