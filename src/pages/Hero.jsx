import React from 'react';
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div className='h-full' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: 'easeOut' }}>
      <div className='lg:w-3/5 mx-auto flex flex-col lg:flex-row items-center lg:h-screen gap-8 justify-center pt-20'>
        <div>
          <img src="https://via.placeholder.com/200x200" alt='' className='rounded-full' />
        </div>

        <div className='space-y-4 lg:w-3/5 w-4/5 mx-auto'>
          <h2 className='text-xl font-medium'>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum illo ab consequatur eos blanditiis doloremque, rerum dignissimos saepe provident reprehenderit!
          </p>
          <a href="https://docs.google.com" target='_blank' rel="noopener noreferrer"><button className='mt-4 bg-black border px-8 text-white py-2 hover:bg-transparent hover:border-black hover:text-black transition-colors'>resume</button></a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;