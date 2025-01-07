'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { useStatus } from '@/features/appState'
import { Switch } from './ui/switch'

export default function ToolSet(){
  const {setTool, tool, toggleTool, setToggleTool } = useStatus()
  
  const handleTool = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setTool(e.target.value)
  }

  const handleToggleTool = ()=>{
    setToggleTool(!toggleTool)
  }
  return (
    <div className='flex flex-col space-y-2'>
        <div className='flex space-x-2 items-center'>
          <label htmlFor="tool">
            <span className='inline-block select-none hover:scale-110 cursor-pointer transition-all'>Tool</span>
          </label>
            <Switch checked={toggleTool} onCheckedChange={handleToggleTool} id="tool" />
        </div>
        <div><Input value={tool} onChange={(e)=> handleTool(e)} placeholder='e.g., VS Code' className='bg-[#010a15]'/></div>
    </div>
  )
}