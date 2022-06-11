import React from 'react';
import { motion } from 'framer-motion'
const Skill = () => {
  return (
    <motion.div className='grid grid-cols-2 items-center h-full justify-items-center pt-20' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: 'easeOut' }}>
      <h2>this is skill</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci non quibusdam quisquam distinctio, laboriosam amet voluptatibus cupiditate unde reprehenderit illum aliquid natus commodi. Quae nisi officia exercitationem laborum, esse, beatae laboriosam adipisci neque doloribus debitis vero dolorum repudiandae, molestias quo ullam. Obcaecati odio sunt voluptate iure corporis porro numquam?</p>
    </motion.div>
  );
};

export default Skill;