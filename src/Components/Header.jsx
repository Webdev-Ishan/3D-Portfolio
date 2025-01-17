import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='fixed w-full flex items-center gap-5 justify-end z-10 p-20'>
    <button type="button" className="text-white bg-blue-600 hover:opacity-80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  border-2 border-white">Hire Me</button>
    <i className="ri-menu-2-line  text-white text-xl "></i>
    </div>
  )
}

export default Header
