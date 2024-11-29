import React from 'react'
import Intro from './Intro'
import Bio from './Bio'
import Status from './Status'

export default function Hero() {
  return (
    <div className='flex justify-between w-full md:w-[85%] md:flex-row flex-col pl-4 md:mx-auto items-start md:items-center md:mb-20 pt-8 md:mt-8'>
        <div className='flex flex-col space-y-12'>
        <Intro/>
        <Status/>
        </div>
        <div className='md:w-auto w-full'>
        <Bio/>
        </div>
    </div>
  )
}
