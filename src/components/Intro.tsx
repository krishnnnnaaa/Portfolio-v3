import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdOutlineAlternateEmail,  } from 'react-icons/md'

export default function Intro(){
  return (
    <div>
        <span className='text-8xl my-4'>Krishna.</span>
        <ul className='text-2xl'>
            <li className='my-4'>Frontend Developer.</li>
            <li className='my-4'>Converting <span className='text-fuchsia-600'>404</span> into <span className='text-fuchsia-600'>hello world</span> </li>
        </ul>
        <div>
            <ul className='flex space-x-4 text-2xl'>
        <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li></li><BsTwitter/></Link>
            <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li><BsGithub/></li></Link>
            <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li><BsLinkedin/></li></Link>
            <Link className='text-cyan-600 hover:scale-110 px-4 py-2 rounded-full' href={'/'}><li><MdOutlineAlternateEmail/></li></Link>
            </ul>
        </div>
    </div>
  )
}

