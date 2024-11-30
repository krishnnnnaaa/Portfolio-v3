'use client'
import React from 'react'
import { Input } from './ui/input'
import { useStatus } from '@/features/appState'

const Title = () => {
  const {setTitle, title } = useStatus()
  const handleTitle = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setTitle(e.target.value)
  }
  return (
    <div className='flex flex-col space-y-2'>
        <div>
            <span className='inline-block select-none hover:scale-110 cursor-pointer transition-all'>Title</span>
        </div>
        <div><Input value={title} onChange={(e)=> handleTitle(e)} placeholder='e.g., Editing page.tsx' className='bg-[#010a15]'/></div>
    </div>
  )
}

export default Title