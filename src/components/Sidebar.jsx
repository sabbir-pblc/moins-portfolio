import React from 'react'
import { FiSearch } from "react-icons/fi";
import CustomLink from './CustomLink';

const Sidebar = () => {
  return (
    <div className='bg-white absolute -translate-x-full lg:translate-x-0 transition-all duration-300'>
      <div className='h-screen w-96 p-14 flex flex-col gap-2 justify-center'>
        <h2 className='text-3xl font-bold mb-14'>Faisal Moin</h2>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/skill'>Skill</CustomLink>
        <CustomLink to='/projects'>Projects</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>

        <div className='relative w-fit mt-14'>
          <input type="text" placeholder='search' className='border-b py-3 outline-none focus:border-black transition-colors' />
          <FiSearch className='absolute right-0 bottom-4 text-gray-400' />
        </div>
      </div>

    </div>
  )
}

export default Sidebar