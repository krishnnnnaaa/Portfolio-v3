'use client'
import React from 'react'
import { Input } from './ui/input'
import { useStatus } from '@/features/appState'
import { Switch } from './ui/switch'

export default function Time(){
  const {setTime, time, toggleTime, setToggleTime } = useStatus()
  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTime(e.target.value);
  }

  const handleToggleTime = ()=>{
    setToggleTime(!toggleTime)
  }
  
  return (
    <div className='flex flex-col space-y-2'>
        <div className='flex space-x-2 items-center'>
        <label htmlFor="time">
            <span className='inline-bloc select-none hover:scale-110 cursor-pointer transition-all'>Time: </span>
        </label>
            <Switch checked={toggleTime} onCheckedChange={handleToggleTime} id="time" />
        </div>
        <div><Input type='time' defaultValue={time} onChange={(e)=> handleTime(e)} className='bg-[#010a15]'/></div>
    </div>
  )
}

