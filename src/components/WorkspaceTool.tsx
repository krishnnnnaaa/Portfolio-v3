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
import { stack } from '@/app/stack'
import spotify from '../assets/code/spotify.webp'

const WorkspaceTool = () => {
  const {setWorkTool, workTool } = useStatus()
  
  const handleTool = (e:string)=> {
    setWorkTool(e)
  }
  return (
    <div className='flex flex-col space-y-2'>
        <div>
            <span className='inline-block select-none hover:scale-110 cursor-pointer transition-all'>Workspace Tool</span>
        </div>
        <div>
            <Select onValueChange={(e)=> handleTool(e)} defaultValue={workTool} >
  <SelectTrigger className="bg-[#010a15] w-full md:w-[180px]">
  <SelectValue placeholder="Select a tool"/>
  </SelectTrigger>
  <SelectContent className='bg-[#010a15]'>
    {
        stack.map((item)=> <SelectItem className='bg-[#010a15] text-white flex items-center' key={item.id} value={item.name}><Image src={item.image} width={20} height={20} className='inline-block mx-1' alt='img'/>{item.name}</SelectItem>)
    }
    <SelectItem className='bg-[#010a15] text-white flex items-center' value={'Spotify'}><Image src={spotify} width={20} height={20} key={453} className='inline-block mx-1' alt='img'/>Spotify</SelectItem>
  </SelectContent>
</Select>
            </div>
    </div>
  )
}

export default WorkspaceTool