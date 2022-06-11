import React from 'react';
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <motion.div className='h-full' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: 'easeOut' }}>
      <div className='lg:w-3/5 mx-auto flex flex-col lg:flex-row items-center h-full gap-8 justify-center pt-20'>
        <div>
          <img src="https://via.placeholder.com/200x200" alt='' className='rounded-full' />
        </div>

        <div className='space-y-4 w-3/5 mx-auto'>
          <h2 className='text-xl font-medium'>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum illo ab consequatur eos blanditiis doloremque, rerum dignissimos saepe provident reprehenderit!
          </p></div>
      </div>
    </motion.div>
  );
};

export default Hero;