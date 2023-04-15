/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function Api05() {
  return (
    <article>
      <iframe
        src="https://scratch.mit.edu/projects/834227200/embed"
        width="485"
        height="402"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      >
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-50 w-30 rounded-md mt-6"
          src="/dice.png"
          alt="image"
        />
      </iframe>
      <div className="px-0 md:px-10 pt-5 text-center">
        <h5 className="text-gray-200">
          CS50 Cat Game
        </h5>
        <p className="font-medium mt-1">
          Build using Scratch by MIT
        </p>

        <p className="uppercase py-5 text-gray-500 tracking-wider text-xs">
          Date: Feb 10 2023
        </p>
        <p className="mt-1">
          Use arrow keys to navigate to the
          Spaceship. Avoid the Grass and Space
          dogs. Have fun!
        </p>
      </div>
    </article>
  );
}
