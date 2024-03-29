/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function Card06() {
  return (
    <article>
      <a href="#about">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-24 w-24 rounded-full mt-6"
          src="/omi_logo.png"
          alt="image"
        />
      </a>
      <div className="px-0 md:px-10 pt-5 text-left">
        <h5 className="text-gray-200">
          Open Mind Industries
        </h5>
        <p className="text-left font-medium mt-1">
          Bloemfontein | International
        </p>
        <div className="flex space-x-2 my-2 mt-5">
          <img
            className="h-10 w-10 rounded-full"
            src="/nextjs.webp"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/tailwind.webp"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/thirdweb.webp"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/react-icon.png"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/canva.webp"
            alt="image"
          />
        </div>
        <p className="uppercase py-5 text-gray-500 text-left tracking-wider text-xs">
          from: Feb 10 2017
        </p>
        <ul className="list-none space-y-4 ml-5 text-sm text-gray-300">
          <li>Business Consultation Services</li>
          <li>Brand/CI Development</li>
          <li>Full-stack Web Development</li>
        </ul>
      </div>
    </article>
  );
}
