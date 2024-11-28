import Image from 'next/image'
import React from 'react'
import next from '../assets/code/nextjs.png'

export default function Status(){
  return (
    <div className='flex space-x-4 items-center'> 
        <div>
            <Image src={next} alt='next' height={80} width={80}/>
        </div>
        <div className='flex flex-col'>
           <span className='text-xl text-fuchsia-600 font-semibold'> Building Portfolio</span>
           <span className='font-semibold'>Elapsed: 02:30</span>
           <span className='text-lg'>Tool: VS Code • <span className='text-cyan-600'>07:36 PM</span></span>
        </div>
    </div>
  )
}
