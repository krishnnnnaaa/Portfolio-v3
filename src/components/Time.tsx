'use client'
import React from 'react'
import { Input } from './ui/input'
import { useStatus } from '@/features/appState'

export default function Time(){
  const {setTime, time } = useStatus()
  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTime(e.target.value);
  }
  
  return (
    <div className='flex flex-col space-y-2'>
        <div>
            <span className='inline-bloc select-none hover:scale-110 cursor-pointer transition-all'>Time Started:</span>
        </div>
        <div><Input type='time' defaultValue={time} onChange={(e)=> handleTime(e)} className='bg-[#010a15]'/></div>
    </div>
  )
}

