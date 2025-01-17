import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


const Page1bottom = () => {
useGSAP(()=>{
  gsap.to('img',{
    rotate:360,
    duration:2,
    repeat:-1,
    ease:'linear'
  })
})

  return (
    <div className='absolute left-0 p-6 flex items-end justify-between bottom-0 w-full'>
      <div className='text-white text-sm font-[Anzo1]'>
        FULLSTACK DEVELOPMENT | FRONTEND DEVELOPMENT
        <br />
        BACKEND DEVELOPMENT
      </div>
      <div>
      <img 
      className='w-20 h-20 mb-5 border-2 border-blue-600 rounded-full'
      src="https://img.freepik.com/free-vector/it-specialists-upgrading-operating-system-illustration_1262-18941.jpg?ga=GA1.1.677472336.1735643290&semt=ais_hybrid" alt="" />
      <img  className='w-20 h-20 border-2 border-blue-600 rounded-full' src="https://img.freepik.com/premium-vector/programming-engineering-development-tiny-girl-programmer-developer-create-code-programming_501813-507.jpg?ga=GA1.1.677472336.1735643290&semt=ais_hybrid" alt="" />
      </div>
    </div>
  )
}

export default Page1bottom
