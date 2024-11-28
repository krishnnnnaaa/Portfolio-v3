import Link from 'next/link'
import React from 'react'

export default function Navbar(){
  return (
    <div className='flex justify-center items-center px-6 py-4'>
        <ul className='flex space-x-20'>
            <Link className='hover:bg-fuchsia-600 px-4 py-2 rounded-full' href={'/'}><li>/</li></Link>
            <Link className='hover:bg-fuchsia-600 px-4 py-2 rounded-full' href={'/'}><li>Work</li></Link>
            <Link className='hover:bg-fuchsia-600 px-4 py-2 rounded-full' href={'/'}><li>Project</li></Link>
        </ul>
    </div>
  )
}