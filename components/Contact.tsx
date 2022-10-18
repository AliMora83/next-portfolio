import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon,
        MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

export default function Contact({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:ali@openmindi?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`
    };


  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-col
    max-w-7xl px-10 mx-auto items-center justify-center selection:bg-[#f7ab0a] selection:text-gray-100'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-xl'>
         Contact</h3>

         <div className='space-y-5 px-0 md:px-6 text-center mt-32 mb-5 '>
        <h2 className='md:text-lg text-base'>
            Ready to <span className='underline decoration-[#f7ab0a]'>start</span>? 
            <br/>contact me</h2>
    </div>

    <div className='space-y-3 md:pb-10 pb-5'>
        <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-sm md:text-base'>+2762 456 7890</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-sm md:text-base'>ali@openmindi.co.za</p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
            <p className='text-sm md:text-base'>South Africa - Remote</p>
        </div>
    </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full md:w-fit mx-auto'>
                <div className='md:flex md:space-x-2'>
                    <input {...register('name')} placeholder='name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='email' className='contactInput' type="email" />
                </div>
                    <input {...register('subject')} placeholder='subject' className='contactInput' type="text"/>
                    <textarea {...register('message')} placeholder='message' className='contactInput' />
                    <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>
                    Submit</button>
            </form>
   
        </motion.div>
  )
}