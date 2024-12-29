'use client'
import { mood, moodType } from '@/app/mood'
import { useStatus } from '@/features/appState'
import { Loader2Icon, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export default function Mood(){
    const [moodIcon, setMoodIcon] = useState<moodType[]>([])
    const [loading, setLoading] = useState(false)
    const {setId}  = useStatus()
  const handleImage = (id:string)=> {
    setId(id)
  }
    useEffect(() => {
      setLoading(true)
        setMoodIcon(mood)
        setLoading(false)
    }, [])
  return (
    <div className='flex flex-col border-2 border-cyan-600 p-4 rounded-2xl text-white'>
        <div className='mb-4 text-orange-300 select-none hover:scale-110 transition-all cursor-pointer'>Choose icon</div>
        <div className='flex flex-wrap justify-center items-center'>
          {
            loading && <Loader2Icon className='animate-spin'/>
          }
        {
                    moodIcon && moodIcon.map(item => <Image onClick={()=> handleImage(item.id)} className='md:w-20 md:h-20 w-[60px] h-[60px] select-none m-1 hover:scale-110 transition-all cursor-pointer' src={item.image} alt='mood' height={80} width={80} key={item.id}/>)
}
{/* <div className='border-[3px] border-dashed m-1 border-cyan-600 px-2 py-4 rounded-xl text-orange-300 select-none hover:scale-110 transition-all cursor-pointer flex flex-col justify-center items-center'>
  <PlusIcon/>
  <span className='inline-block text-xs'>Add Image</span>
</div> */}
        </div>
    </div>
  )
}