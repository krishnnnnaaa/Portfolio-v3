'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import next from '../assets/code/nextjs.png'
import { useRouter } from 'next/navigation';

export default function Status(){
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter()

  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        setTimeout(() => {
          router.push('/manage')
        }, 2000);
        return 0; 
      }
      return newCount;
    });
  };

  return (
    <div className='flex space-y-4 flex-col items-start'> 
    <div className='text-2xl text-orange-300 select-none hover:scale-110 transition-all'>Status</div>
    <div className='flex space-x-4 md:ml-0 ml-4'>
        <div>
            <Image src={next} alt='next' onClick={handleClick} className='hover:scale-110 transition-all' height={80} width={80}/>
        </div>
        <div className='flex flex-col text-white'>
           <span className='text-xl text-fuchsia-600 font-semibold select-none hover:scale-110 transition-all'> Building Portfolio</span>
           <span className='font-semibold select-none hover:scale-110 transition-all'>Elapsed: 02:30</span>
           <div className='flex space-x-2'>
           <span className='text-lg select-none hover:scale-110 transition-all'>Tool: VS Code</span>
           <span className='select-none hover:scale-110 transition-all'>•</span>
           <span className='text-cyan-600 select-none hover:scale-110 transition-all'>07:36 PM</span>
           </div>
        </div>
    </div>
    </div>
  )
}
