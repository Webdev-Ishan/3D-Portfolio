import React, { useRef } from 'react'
import bg from '../assets/Background.jpg'
import Tilttext from '../Components/Tilttext'
import Page1bottom from '../Components/Pasge1bottom'

const Page1 = () => {

    const tiltref= useRef(null)
    const mousemoving=(e)=>{
        tiltref.current.style.transform = `rotateX(${e.clientX}) rotateY(${e.clientY})`
    }
  return (
    <div onMouseMove={(e)=>{mousemoving(e)}} className='h-screen p-3 bg-white'>
     <div 
     id='page1-in'
        className='w-full h-full pt-9 pl-24 shadow-md shadow-blue-400 rounded-xl bg-cover bg-center bg-black' 
        style={{ backgroundImage: `url(${bg})` }}
      >

<span  className="text-sm font-normal  mt-10 tracking-wider text-blue-600 bg-gray-900 p-2 rounded-lg shadow-lg border-2 border-green-500  transition duration-300">
  MERN STACK
</span>

<Page1bottom/>
<div id='titlediv' ref={tiltref} className='text-white mt-10'>
      <h1 className='text-6xl font-[Anzo1]'>I am <span style={{ WebkitTextStroke: "1px blue" }} className='text-yellow-400'>FULL STACK</span></h1>
      <h1 className='text-7xl font-[Anzo1] text-yellow-400 ' style={{ WebkitTextStroke: "1px blue" }}>Developer</h1>
      <h1 className='text-5xl mt-4 font-[Anzo1]' style={{ WebkitTextStroke: "1px blue" }}>To Hire</h1>
    </div>
      </div>
    </div>
  )
}

export default Page1
