import React from 'react';
import bg3 from '../assets/Bg3.mp4';

const Page5 = () => {
  return (
    <div className='h-screen p-3  mb-10 mt-10  bg-black'>
      <div className='h-full w-full bg-black bg-cover bg-center p-4 rounded-[50px]  relative overflow-hidden'>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 w-full h-full border-2 border-white object-cover rounded-[60px]'
        >
          <source src={bg3} type='video/mp4' />
        </video>

        {/* Content container */}
        <div className='relative z-10 p-2 text-white'>
          <h1 style={{ WebkitTextStroke: "1px black" }}  className='font-semibold uppercase text-[15vw] text-pretty text-blue-600 '>
            About
          </h1>
          <p className='font-normal relative left-6 text-white text-ellipsis text-md mb-8'>
            I am a passionate <span  className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>Full-Stack</span> Developer specializing in the <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>MERN</span> stack, with expertise in modern web technologies like <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>GSAP</span> for animations, <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>Tailwind CSS</span>, Bootstrap, and <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>Redux</span> for efficient state management. My skill set extends beyond web development to include a solid understanding of <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>Operating Systems</span>, System Design, and Database Management Systems <span  className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>(DBMS)</span> , enabling me to create <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>Scalable</span>, user-friendly, and <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>High-Performance</span> applications. With a keen eye for detail and a commitment to continuous learning, I enjoy turning complex ideas into seamless <span className='text-blue-500 hover:text-yellow-400 hover:text-lg duration-300'>Digital Experiences</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;

