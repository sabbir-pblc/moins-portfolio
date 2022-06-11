import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [expand, setExpand] = useState(false)
  return (
    <div className='p-1' >
      <Sidebar />
      <Navbar setExpand={setExpand} expand={expand} />
      <div className={`mt-24 lg:mt-0 lg:ml-96 min-h-screen ${expand && 'translate-y-20'} lg:translate-y-0 bg-[#f8f8f8] transition-all duration-300`}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Home