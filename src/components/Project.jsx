import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  const { name, title, image, desc, link } = project
  return (
    <div className='group space-y-2 hover:border-black p-4 border border-transparent transition-colors '>
      <img src={image} alt="" />
      <h2 className='text-3xl font-medium'>{name}</h2>
      <h3 className='text-xl'>{title}</h3>
      <p className='text-gray-600 max-w-[300px]'>{desc.slice(0, 100) + ' ...'}</p>
      <div className='overflow-hidden'>
        <Link to={`/project/${name}`}>
          <div className='group-hover:translate-x-0 -translate-x-20 flex items-center gap-2 transition-all ease-in-out duration-500'>
            <button className='text-lg'>explore</button>
            <div className='w-24 h-[1px] bg-black'></div>
          </div>
        </Link>
      </div>


    </div>
  );
};

export default Project;