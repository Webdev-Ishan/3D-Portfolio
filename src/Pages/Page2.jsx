import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Page2 = () => {

gsap.registerPlugin(ScrollTrigger)
  
useGSAP(()=>{
gsap.from('.rotatetext',{
  transform:'rotateX(-90deg)',
  opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
trigger:'.rotatetext',
scrub:1,
start:'top 65%',
end:'top -400%'
  }
})
})

  return (
    <div id='sectiondiv' className='bg-white text-black p-2 text-center '>
      <h2 className='font-[Anzo] mb-12'>Myself Ishan Saini , I am a Full Stack Developern. In MERN Stack....</h2>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[24vw] text-blue-500 font-[Anzo1] leading-[23vw] '>React<span  style={{ WebkitTextStroke: "1px blue" }} className='text-black'>JS</span></h1>
   </div>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[24vw] text-green-500 font-[Anzo1] leading-[23vw]'>Node<span  style={{ WebkitTextStroke: "1px yellow" }} className='text-black'>JS</span></h1>
   </div>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[20vw] text-emerald-500 font-[Anzo1] leading-[23vw]'>Mongo<span  style={{ WebkitTextStroke: "1px blue" }} className='text-black'>DB</span></h1>
   </div>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px " }} className='text-[19vw] text-black font-[Anzo1] leading-[23vw]'>Express<span  style={{ WebkitTextStroke: "1px black" }} className='text-orange-500'>JS</span></h1>
   </div>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[17vw]  bg-gradient-to-r from-lime-400 to-teal-500 bg-clip-text text-transparent font-[Anzo1] leading-[23vw]'>GSAP</h1>
   </div >
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "2px black" }} className='text-[22vw]  text-blue-700 font-[Anzo1] leading-[23vw]'>Tailwind</h1>
   </div>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[22vw]  text-yellow-400 font-[Anzo1] leading-[23vw]'>And</h1>
   </div>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[22vw]  text-red-500 font-[Anzo1] leading-[23vw]'>Many More</h1>
   </div>
   <div className='rotatetext'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[22vw]  bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-[Anzo1] leading-[23vw]'>Skills...</h1>
   </div>
    </div>
  )
}

export default Page2
