'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { mood } from '@/app/mood';
import { Loader2 } from 'lucide-react';

export default function Status({id, tool, time, title}: {id: string, tool:string, time:string, title: string}){
  const [clickCount, setClickCount] = useState(0);
  const [currentTime, setCurrentTime] = useState('04:35:04 PM')
  const [elapsedTime, setElapsedTime] = useState<{hours: number, minutes: number}>()
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

  const calculateElapsedTime = (inputTime: string): { hours: number; minutes: number } => {
    const [hours, minutes] = inputTime.split(":").map(Number);
    const now = new Date();
    const inputDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    
    const diffInMs = now.getTime() - inputDate.getTime(); 
    const diffInMinutes = Math.floor(diffInMs / 60000); 
    
    return { 
        hours: Math.floor(diffInMinutes / 60), 
        minutes: diffInMinutes % 60 
    };
};


  const item = mood.find(obj => obj.id === id)

  useEffect(() => {
    const timer = setInterval(() => {
        setElapsedTime(calculateElapsedTime(time));

        const currentTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            second: '2-digit',
        });
        setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(timer);
}, [time]);
  

  return (
    <div className='flex space-y-4 flex-col items-start'> 
    <div className='text-2xl text-orange-300 select-none hover:scale-110 transition-all'>Status</div>
    <div className='flex space-x-4 md:ml-0 ml-4'>
        <div>
            <Image src={item?.image as StaticImageData} alt='next' onClick={handleClick} className='hover:scale-110 transition-all' height={80} width={80}/>
        </div>
        {
          !elapsedTime ? 
        <p className='flex my-auto text-orange-300 font-semibold'>Fetching <Loader2 className='mx-2 inline-block animate-spin'/></p>
        : 
          <div className='flex flex-col text-white'>
           <span className='text-xl text-fuchsia-600 font-semibold select-none hover:scale-110 transition-all'>{title}</span>
           <span className='font-semibold select-none hover:scale-110 transition-all'>Elapsed: {elapsedTime?.hours} hours and {elapsedTime?.minutes} minutes</span>
           <div className='flex space-x-2'>
           <span className='text-lg select-none hover:scale-110 transition-all'>Tool: {tool}</span>
           <span className='select-none hover:scale-110 transition-all'>•</span>
           <span className='text-cyan-600 select-none hover:scale-110 transition-all'>{currentTime}</span>
           </div>
        </div> 
        }
    </div>
    </div>
  )
}
