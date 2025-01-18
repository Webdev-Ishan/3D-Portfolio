import React from 'react'
import bg from '../assets/Bg2.jpg'


const Page4 = () => {


    
  return (
    <div id='sectiondiv2' className='bg-white bg-cover bg-center w-full h-auto p-10'  style={{ backgroundImage: `url(${bg})` }}>
       <div className='rotatetext '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[17vw] text-white font-[Anzo1] leading-[23vw] '>Passionate</h1>
   </div>
   <div className='rotatetext '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[17vw] text-white font-[Anzo1] leading-[23vw] '>About</h1>
   </div>
   <div className='rotatetext '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[17vw] text-white font-[Anzo1] leading-[23vw] '>WEB Dev</h1>
   </div>
  
    </div>
  )
}

export default Page4
