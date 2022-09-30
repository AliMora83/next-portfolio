/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Card01 from './CardExp/Card01';
import Card02 from './CardExp/Card02';


export default function ExpCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] md:w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
       <Card01 />
    </article>
  )
}