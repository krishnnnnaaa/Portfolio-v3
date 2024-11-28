import React from 'react'
import me from '../assets/hero.png'
import Image from 'next/image'

export default function Bio(){
  return (
    <div className='w-[450px]'>
        <div>
            <Image className='animate-pulse' src={me} alt='me' width={400}  height={600}/>
        </div>
        <div className='text-xl font-semibold'>
            <p>I&apos;m <span className='text-cyan-600'>Krishna</span>  I'm <span className='text-cyan-600'>19</span> y/o, frontend developer from <span className='text-cyan-600'>India</span>. I am Interested in designing and building things from my learnings.</p>
            <p>My hobbies includes reading books, travelling and listening music. Loves to upskill myself by learning new things everyday.</p>
        </div>
    </div>
  )
}
