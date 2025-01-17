'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useStatus } from '@/features/appState'
import Image from 'next/image'
import {workspaceStack} from '../app/workspacetoolicons'
import { Switch } from './ui/switch'

const WorkspaceTool = () => {
  const {setWorkTool, workTool, toggleIcon, setToggleIcon } = useStatus()
  
  const handleTool = (e:string)=> {
    setWorkTool(e)
  }

  const handleToggleIcon = ()=>{
    setToggleIcon(!toggleIcon)
  }
  return (
    <div className='flex flex-col space-y-2'>
        <div className='flex space-x-2 items-center'>

          <label htmlFor="workspace-tool">
            <span className='inline-block select-none hover:scale-110 cursor-pointer transition-all'>Icons / Emojis</span>
          </label>
            <Switch checked={toggleIcon} onCheckedChange={handleToggleIcon} id="workspace-tool" />
        </div>
        <div>
            <Select onValueChange={(e)=> handleTool(e)} defaultValue={workTool} >
  <SelectTrigger className="bg-[#010a15] w-full md:w-[180px]">
  <SelectValue placeholder="Select a tool"/>
  </SelectTrigger>
  <SelectContent className='bg-[#010a15]'>
    {
        workspaceStack.map((item)=> <SelectItem className='bg-[#010a15] text-white flex items-center' key={item.id} value={item.name}><Image src={item.image} width={20} height={20} className='inline-block mx-1' alt='img'/>{item.name}</SelectItem>)
    }
  </SelectContent>
</Select>
            </div>
    </div>
  )
}

export default WorkspaceTool