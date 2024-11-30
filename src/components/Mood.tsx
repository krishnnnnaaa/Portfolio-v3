'use client'
import { mood, moodType } from '@/app/mood'
import { useStatus } from '@/features/appState'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export default function Mood(){
    const [moodIcon, setMoodIcon] = useState<moodType[]>([])
    const {setId}  = useStatus()
  const handleImage = (id:string)=> {
    setId(id)
  }
    useEffect(() => {
        setMoodIcon(mood)
    }, [])
  return (
    <div className='flex flex-col border-2 border-cyan-600 p-4 rounded-2xl text-white'>
        <div className='mb-4 text-orange-300 select-none hover:scale-110 transition-all cursor-pointer'>Choose icon</div>
        <div className='flex space-x-2'>
        {
                    moodIcon && moodIcon.map(item => <Image onClick={()=> handleImage(item.id)} className='select-none hover:scale-110 transition-all cursor-pointer' src={item.image} alt='mood' height={80} width={80} key={item.id}/>)
}
        </div>
    </div>
  )
}