/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Card01 from './CardExp/Card01';


export default function ExpCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
    </article>
  )
}