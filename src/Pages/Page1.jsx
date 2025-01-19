import React, { useRef,useState } from 'react'
import bg from '../assets/Background.jpg'
import Tilttext from '../Components/Tilttext'
import Page1bottom from '../Components/Page1bottom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

    const tiltref= useRef(null)
    const [Xval, setXval] = useState(0);
    const [Yval, setYval] = useState(0);

    const mousemoving=(e)=>{
      setXval((e.clientX-tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width/2)/20)
      setYval(-(e.clientY-tiltref.current.getBoundingClientRect().y - tiltref.current.getBoundingClientRect().height/2)/20)

       
    }


useGSAP(()=>{

  gsap.to(tiltref.current,{
transform: `rotateX(${Yval}deg) rotateY(${Xval}deg)`,
duration: 3,
ease:'elastic.out(1.0.3)'

  })
},[Xval,Yval])


  return (
    <div onMouseMove={(e)=>{mousemoving(e)}} className='h-screen p-3 bg-black w-full '>
     <div 
     id='page1-in'
        className='w-full h-full pt-9 pl-24 shadow-md shadow-blue-400 rounded-xl bg-cover bg-center bg-black' 
        style={{ backgroundImage: `url(${bg})` }}
      >

<span  className="text-sm font-normal  mt-10 tracking-wider text-blue-600 bg-gray-900 p-2 rounded-lg shadow-lg border-2 border-green-500  transition duration-300">
  ISHAN SAINI
</span>

<Page1bottom/>
<Tilttext tiltref={tiltref}/>
      </div>
    </div>
  )
}

export default Page1
