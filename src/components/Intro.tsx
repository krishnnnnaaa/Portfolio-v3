import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdOutlineAlternateEmail,  } from 'react-icons/md'

export default function Intro(){
  return (
    <div>
        <span className='text-7xl md:text-8xl cursor-pointer select-none hover:scale-110 transition-all  inline-block my-4'>Krishna.</span>
        <ul className='text-xl md:text-2xl'>
            <li className='my-2 md:my-4 hover:scale-110 cursor-pointer transition-all select-none'>Frontend Developer.</li>
            <li className='my-2 md:my-4 hover:scale-110 transition-all cursor-pointer select-none'>Converting <span className='text-fuchsia-600'>404</span> into <span className='text-fuchsia-600'>hello world</span> </li>
        </ul>
        <div>
            <ul className='flex md:space-x-4 space-x-1 mt-8 md:mt-0 text-2xl'>
        <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li></li><BsTwitter/></Link>
            <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li><BsGithub/></li></Link>
            <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li><BsLinkedin/></li></Link>
            <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li><MdOutlineAlternateEmail/></li></Link>
            </ul>
        </div>
    </div>
  )
}
