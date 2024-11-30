'use client'
import React from 'react'
import { Input } from './ui/input'
import { useStatus } from '@/features/appState'

export default function ToolSet(){
  const {setTool, tool } = useStatus()
  const handleTool = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setTool(e.target.value)
  }
  return (
    <div className='flex flex-col space-y-2'>
        <div>
            <span className='inline-block select-none hover:scale-110 cursor-pointer transition-all'>Tool</span>
        </div>
        <div><Input value={tool} onChange={(e)=> handleTool(e)} placeholder='e.g., VS Code' className='bg-[#010a15]'/></div>
    </div>
  )
}