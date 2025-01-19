import React from 'react'
import bg from '../assets/vedio.mp4'
import laptop from '../assets/try.avif'

const Page3 = () => {
  return (
    <div className='w-full  h-auto    relative flex items-center justify-center bg-cover bg-center '>

    <video
              className='object-cover h-full w-full border-2 border-white'
              src={bg}
              autoPlay
              loop
              muted
            />
    
        
    
    </div>
    
  )
}

export default Page3
