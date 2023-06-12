/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function Card01() {
  return (
    <article>
      <a
        href="https://develop-me.onrender.com/"
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-24 w-24 rounded-full mt-6"
          src="/dm_icon.png"
          alt="image"
        />
      </a>
      <div className="px-0 md:px-10 pt-5 text-left ">
        <h5 className="text-gray-200">
          Develop Me
        </h5>
        <p className="text-left font-medium text-l mt-1">
          Connect with experienced mentors
        </p>
        <div className="flex space-x-2 my-2 mt-5">
          <img
            className="h-10 w-10 rounded-full"
            src="/react-icon.png"
            alt="image"
          />
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
            src="/canva.webp"
            alt="image"
          />
        </div>
        <p className="uppercase py-5 text-gray-500 text-left tracking-wider text-xs">
          from: May 01 2023
        </p>
        <ul className="list-none space-y-4 ml-5 text-sm text-gray-300">
          <li>Full-stack Web Development</li>
          <li>Web Responsiveness</li>
          <li>Consultation</li>
        </ul>
      </div>
    </article>
  );
}
