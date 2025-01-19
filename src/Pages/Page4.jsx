import React from 'react'
import bg from '../assets/Bg2.mp4'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page4 = () => {
  


  
  

    
  return (
    <div id='sectiondiv2' className='bg-white border-2 border-white mt-14  bg-cover bg-center w-full h-auto p-10'>
     
     <video autoPlay loop muted className='absolute   top-0 left-0 w-full h-full object-cover'>
        <source src={bg} type='video/mp4' />
      </video>
     
     <div  className='parent relative z-10'>
       <div className='rotatetext '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[12vw]   text-white font-[Anzo1] leading-[15vw] '>Passionate</h1>
   </div>
   <div className='rotatetext '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[12vw]  text-white font-[Anzo1] leading-[15vw] '>About</h1>
   </div>
   <div className='rotatetext '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[12vw]   text-white font-[Anzo1] leading-[15vw] '>WEB Dev</h1>
   </div>
   </div>
    </div>
  )
}

export default Page4
