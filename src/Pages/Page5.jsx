import React from 'react'
import bg3 from '../assets/Bg3.mp4'
const Page5 = () => {
  return (
    <div className='h-screen p-6 bg-white'>
    <div className='h-full w-full bg-black bg-cover bg-center rounded-[60px] relative overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover rounded-[60px]'
      >
        <source src={bg3} type='video/mp4' />
      </video>
    </div>
  </div>
  
  )
}

export default Page5
