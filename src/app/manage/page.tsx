'use client'
import Mood from '@/components/Mood'
import Status from '@/components/Status'
import Time from '@/components/Time'
import Title from '@/components/Title'
import { Separator } from '@/components/ui/separator'
import { Button } from "@/components/ui/button"

import React from 'react'
import ToolSet from '@/components/ToolSet'
import { useStatus } from '@/features/appState'
import status from '@/appwrite/status'

export default  function Manage() {
  const { id, time, title, tool } = useStatus()
  const handleStatusEvent = ()=> {
    status.saveDocument({id, time, title, tool})
  }
  return (
    <div className='bg-[#010a15] -mt-8 text-white min-h-screen items-center flex flex-col justify-center'>
      <span className='text-4xl mb-8 text-orange-300 select-none hover:scale-110 transition-all'>Manage Status</span>
      <div className='items-start flex flex-col'>
      <Status id={id} time={time} title={title} tool={tool} key={id}/>
      <Separator className='w-full bg-gray-600 my-8' orientation='horizontal'/>
      <div className='flex flex-col space-y-8'>
      <Mood/>
      <div className='flex justify-between'>
      <Title/>
      <ToolSet/>
      <Time/>
      </div>
      <Button onClick={handleStatusEvent} className='bg-fuchsia-600 hover:bg-fuchsia-800'>Save changes</Button>
      </div>
      </div>
    </div>
  )
}

