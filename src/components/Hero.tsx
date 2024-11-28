import React from 'react'
import Intro from './Intro'
import Bio from './Bio'
import Status from './Status'

export default function Hero() {
  return (
    <div className='flex justify-between w-[85%] mx-auto items-center mb-20 mt-8'>
        <div className='flex flex-col space-y-12'>
        <Intro/>
        <Status/>
        </div>
        <div>
        <Bio/>
        </div>
    </div>
  )
}
