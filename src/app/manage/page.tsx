'use client'
import Mood from '@/components/Mood'
import Status from '@/components/Status'
import Time from '@/components/Time'
import Title from '@/components/Title'
import { Separator } from '@/components/ui/separator'
import { Button } from "@/components/ui/button"

import React, { useState } from 'react'
import ToolSet from '@/components/ToolSet'
import { useStatus } from '@/features/appState'
import status from '@/appwrite/status'
import { LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default  function Manage() {
  const router = useRouter()
  const { id, time, title, tool } = useStatus()
  const [isSubmmited, setisSubmmited] = useState(false)
  const handleStatusEvent = ()=> {
    setisSubmmited(true)
    status.saveDocument({id, time, title, tool})
    setisSubmmited(false)
  }
  return (
    <div className='bg-[#010a15] -mt-8 text-white min-h-screen items-center flex flex-col justify-center'>
      <span className='text-4xl mb-8 text-orange-300 select-none hover:scale-110 transition-all'>Manage Status</span>
      <div className='items-start flex flex-col px-8'>
        <span className='select-none'>Preview</span>
      <Status id={id} time={time} title={title} tool={tool} key={id}/>
      <Separator className='w-full bg-gray-600 my-8' orientation='horizontal'/>
      <div className='flex flex-col space-y-8'>
      <Mood/>
      <div className='flex justify-between md:space-x-0 space-x-2'>
      <Title/>
      <ToolSet/>
      <Time/>
      </div>
      <Button onClick={handleStatusEvent} disabled={isSubmmited} className='bg-fuchsia-600 hover:bg-fuchsia-800'>
        {
          isSubmmited ? <LoaderCircle className='animate-spin'/> : "Save changes"
        }
      </Button>
      <Button onClick={()=> router.push('/')}>Go Back</Button>
      </div>
      </div>
    </div>
  )
}

