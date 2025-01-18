import React from 'react'
import bg from '../assets/vedio.mp4'
import laptop from '../assets/try.avif'

const Page3 = () => {
  return (
    <div className='w-full  h-auto pb-14 border-b-2 border-b-black pt-8 pr-10 pl-10  bg-white relative flex items-center justify-center bg-cover bg-center '>
    <img className='absolute w-full  h-[110vh]' src={laptop} alt="" />
    <video
              className='object-cover h-[95vh]'
              src={bg}
              autoPlay
              loop
              muted
            />
    
        
    
    </div>
    
  )
}

export default Page3
