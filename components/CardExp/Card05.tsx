/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function Card05() {
  return (
    <article>
      <a
        href="http://udynet.co.za/"
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-24 w-24 rounded-full mt-6"
          src="/udy_icon.png"
          alt="image"
        />
      </a>
      <div className="px-0 md:px-10 pt-5 text-left">
        <h5 className="text-gray-200">
          UDYNET Wireless Wi-Fi
        </h5>
        <p className="text-left font-medium text-l mt-1">
          Bloemfontein | National
        </p>
        <div className="flex space-x-2 my-2 mt-5">
          <img
            className="h-10 w-10 rounded-full"
            src="/photoshop.webp"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/premiere.webp"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/after.webp"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/wordpress.webp"
            alt="image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/canva.webp"
            alt="image"
          />
        </div>
        <p className="uppercase py-5 text-gray-500 text-left tracking-wider text-xs">
          from: Feb 10 2019
        </p>
        <ul className="list-none space-y-4 ml-5 text-sm text-gray-300">
          <li>Full-stack Web Development</li>
          <li>Presentations, Graphic Design</li>
          <li>Video/Animated Promos</li>
        </ul>
      </div>
    </article>
  );
}
