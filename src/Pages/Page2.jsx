import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Page2 = () => {


  const navparaMessages = [
    "I am a passionate full-stack developer specializing in the MERN stack.",
    "I build responsive and user-friendly web applications with a focus on performance.",
    "My expertise lies in creating seamless front-end interfaces using React.",
    "I enjoy collaborating in teams and using modern tools to deliver impactful projects."
  ];

    const [navpara] = useTypewriter({
      words: navparaMessages,
      loop: 0,
      typeSpeed: 50, // Faster typing speed
      deleteSpeed: 30, // Faster deleting speed
      delaySpeed: 500, // Shorter delay between words
    });

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
    <div id='sectiondiv' className='bg-white text-black p-2 text-center w-full h-auto '>
      <h2 className='font-mono text-green-600 text-lg mb-24' >{navpara}  <Cursor cursorStyle="|" /></h2>
   <div className='rotatetext shadow-md'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[22vw] bg-black text-blue-500 font-[Anzo1] leading-[23vw] '>React<span  style={{ WebkitTextStroke: "1px blue" }} className='text-white'>JS</span></h1>
   </div>
   <div className='rotatetext shadow-md'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[18vw] text-green-500 font-[Anzo1] leading-[23vw]'>Node<span  style={{ WebkitTextStroke: "1px yellow" }} className='text-black'>JS</span></h1>
   </div>
   <div className='rotatetext shadow-md'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[20vw] text-emerald-500 font-[Anzo1] leading-[23vw] bg-black'>Mongo<span  style={{ WebkitTextStroke: "1px blue" }} className='text-white'>DB</span></h1>
   </div>
   <div className='rotatetext shadow-md'>
    <h1  style={{ WebkitTextStroke: "1px " }} className='text-[18vw] text-black font-[Anzo1] leading-[23vw]'>Express<span  style={{ WebkitTextStroke: "1px black" }} className='text-orange-500'>JS</span></h1>
   </div>
   <div className='rotatetext shadow-md'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[17vw]  text-green-500 font-[Anzo1] leading-[23vw] bg-black'>GSAP</h1>
   </div >
   <div className='rotatetext shadow-md'>
    <h1  style={{ WebkitTextStroke: "2px black" }} className='text-[22vw]  text-blue-700 font-[Anzo1] leading-[23vw]'>Tailwind</h1>
   </div>
   <div className='rotatetext shadow-md'>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[22vw]  text-yellow-400 font-[Anzo1] leading-[23vw] bg-black'>And</h1>
   </div>
   <div className='rotatetext '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[22vw]  text-red-500 font-[Anzo1] leading-[23vw]'>Many More</h1>
   </div>
   <div className='rotatetext bg-black '>
    <h1  style={{ WebkitTextStroke: "1px black" }} className='text-[20vw]  bg-gradient-to-r from-rose-500 to-fuchsia-400 bg-clip-text text-transparent font-[Anzo1] leading-[23vw]'>Skills...</h1>
   </div>



<div  className='w-full flex justify-center items-center mt-20 mb-14 text-5xl font-bold font-[Fantasy]'> 
Find Me Here

</div>



   <div className='w-full h-auto mt-12 p-4 flex justify-evenly items-start mb-14 '>
 


<a href="https://github.com/Webdev-Ishan" className='font-mono  text-green-500 text-3xl'> <img 
className='w-12 h-12 rounded-full '
src="https://imgs.search.brave.com/RcGUFp-puv2DlgDgjW82vdmHIFbGtY55CWt2qXzpu4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaWNvbnNpbXBs/ZS1sb2dvdHlwZXMv/NTEyL2dpdGh1Yi01/MTIucG5n" alt="" />
Github ...</a>

<a href="https://www.linkedin.com/in/ishan-saini-49b6842a6/" className='font-mono text-blue-500 text-3xl'>
<img
className='w-10 h-10 rounded-md '
src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" alt="" />
Linkedin ...</a>

<a href="https://x.com/saini_isha57790" className='font-mono text-black text-3xl'>
<img
className='w-[43px] h-10 rounded-md '
 src="https://imgs.search.brave.com/nKd3NFbMdj8R87z1rQjwbeGkkfHxaNJhSGoBC4IWSso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW5q/aS5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNy9YLWxv/Z28tdHdpdHRlci0x/MDI0eDU3NC5qcGc" alt="" />
Twitter ...</a>

<a href="https://www.geeksforgeeks.org/user/ishansai2rb6/" className='font-mono text-emerald-500 text-3xl'
>
<img className='w-[46px] h-10 rounded-md ' src="https://imgs.search.brave.com/oJ4I-oR5_wXw1YTHQe4YDiwdN7xu1PvQBGHcnN8vJ0o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQzL0dlZWtzZm9y/R2Vla3Muc3Zn" alt="" />
  GfG...
</a>

   </div>




    </div>
    
  )
}

export default Page2
