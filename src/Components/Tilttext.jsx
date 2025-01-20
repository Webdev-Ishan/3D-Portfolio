import React from 'react'

const Tilttext = (props) => {

  return (
    <div id='titlediv' ref={props.tiltref} className='text-white mt-10'>
    <h1 className='text-6xl font-[Anzo1]'>I am <span style={{ WebkitTextStroke: "2px blue" }} className='text-yellow-400'>FULL STACK</span></h1>
    <h1 className='text-7xl font-[Anzo1] text-yellow-400 ' style={{ WebkitTextStroke: "2px blue" }}>Developer</h1>
    <h1 className='text-5xl mt-4 font-[Anzo1]' style={{ WebkitTextStroke: "2px blue" }}>To Hire</h1>
  </div>
  )
}

export default Tilttext
