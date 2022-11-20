/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Video01 from './Videos/Video01';


export default function ExpCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[400px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
       <Video01 />
    </article>
  )
}