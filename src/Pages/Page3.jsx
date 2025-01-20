import React from 'react'
import bg from '../assets/vedio.mp4'

const Page3 = () => {
  return (
    <div className='w-full h-auto relative flex items-center  justify-center bg-cover bg-center' id="sectiondiv1">
    <video
      className='absolute top-0 left-0 w-full h-auto object-cover border-2 border-white'
      src={bg}
      autoPlay
      loop
      muted
    />
    <div className='relative z-10 p-2 text-white mb-0'>
      <h1 style={{ WebkitTextStroke: "2px blue" }} className='font-semibold uppercase ml-5 text-[12vw] text-pretty text-white'>
        Skills
      </h1>
      <div className="grid grid-cols-4 grid-rows-4 mt-10 ">
        <div className='ml-10 text-3xl bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent hover:text-4xl duration-300'>ReactJS</div>
        <div className='ml-10 text-3xl text-green-500 hover:text-4xl duration-300'>NodeJS</div>
        <div className='ml-10 text-3xl text-green-500 hover:text-4xl duration-300'>MongoDB</div>
        <div className='ml-10 text-3xl text-blue-500 hover:text-4xl duration-300'>ExpressJS</div>
        <div className="row-start-2 text-3xl ml-10 text-pink-600 hover:text-4xl duration-300">Tailwind</div>
        <div className="row-start-2 text-3xl ml-10 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent hover:text-4xl duration-300">Redux</div>
        <div className="row-start-2 text-3xl ml-10 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent hover:text-4xl duration-300">GSAP</div>
        <div className="row-start-2 ml-10 text-3xl text-white hover:text-4xl duration-300">BootStrap</div>
        <div className="col-start-4 row-start-3 ml-10 text-3xl bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent hover:text-4xl duration-300">C++</div>
        <div className="col-start-3 row-start-3 ml-10 text-3xl text-orange-700 hover:text-4xl duration-300">DBMS</div>
        <div className="col-start-2 row-start-3 ml-10 text-3xl text-blue-500 hover:text-4xl duration-300">MySql</div>
        <div className="col-start-1 row-start-3 ml-10 text-3xl text-white hover:text-4xl duration-300">Operating Systems</div>
      </div>
    </div>
  </div>
    
  )
}

export default Page3
