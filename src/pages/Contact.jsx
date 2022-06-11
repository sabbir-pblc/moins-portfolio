import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY').then((res) => {
      console.log(res)
      reset()
    }).catch((err) => console.log(err))
  }
  return (
    <motion.div className='lg:h-full w-4/5 md:w-3/5 xl:w-1/3 mx-auto pt-20 grid items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: 'easeOut' }}>
      <div>
        <h2 className='text-3xl font-bold'>Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col mt-5 space-y-2'>
            <label htmlFor="name">Name</label>
            <input className='p-2 border outline-none' type="text" {...register('name')} placeholder='name' />
          </div>
          <div className='flex flex-col mt-5 space-y-2'>
            <label htmlFor="email">Email</label>
            <input type="email" className='p-2 border outline-none' {...register('email')} placeholder='email' />
          </div>
          <div className='flex flex-col mt-5 space-y-2'>
            <label htmlFor="message">Message</label>
            <textarea rows={4} type="message" className='p-2 border outline-none' {...register('message')} placeholder='write message' />
          </div>
          <div className=' mt-5'>
            <input type="submit" value="send" className='bg-black text-white px-12 py-2 cursor-pointer hover:bg-transparent border hover:text-black border-black transition-colors' />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;