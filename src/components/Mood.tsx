'use client'
import { mood, moodType } from '@/app/mood'
import { useStatus } from '@/features/appState'
import { Loader2Icon, LoaderCircle } from 'lucide-react'
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
        <div className='flex space-x-2 flex-wrap justify-center space-y-2 items-center'>
          {
            loading && <Loader2Icon className='animate-spin'/>
          }
        {
                    moodIcon && moodIcon.map(item => <Image onClick={()=> handleImage(item.id)} className='select-none hover:scale-110 transition-all cursor-pointer' src={item.image} alt='mood' height={80} width={80} key={item.id}/>)
}
        </div>
    </div>
  )
}