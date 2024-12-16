import Link from 'next/link'
import React from 'react'

export default function Navbar(){
  return (
    <div className='justify-center items-center md:flex px-6 py-4'>
        <ul className='flex space-x-4 justify-center md:space-x-20'>
            <Link className='hover:bg-fuchsia-600 hover:shadow-[0px_0px_26px_4px_rgba(255,_0,_255,_0.45)] transition-all px-4 py-2 rounded-full' href={'/'}><li>/</li></Link>
            <Link className='hover:bg-fuchsia-600 hover:shadow-[0px_0px_26px_4px_rgba(255,_0,_255,_0.45)] transition-all px-4 py-2 rounded-full' href={'#work'}><li>Project</li></Link>
            <Link className='hover:bg-fuchsia-600 hover:shadow-[0px_0px_26px_4px_rgba(255,_0,_255,_0.45)] transition-all px-4 py-2 rounded-full' href={'/#tweets'}><li>Tweets</li></Link>
        </ul>
    </div>
  )
}