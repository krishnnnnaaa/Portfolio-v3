import Mood from '@/components/Mood'
import Status from '@/components/Status'
import Time from '@/components/Time'
import Title from '@/components/Title'
import { Separator } from '@/components/ui/separator'
import { Button } from "@/components/ui/button"

import React from 'react'

const page = () => {
  return (
    <div className='bg-[#010a15] text-white min-h-screen items-center flex flex-col justify-center'>
      <span className='text-4xl mb-8 text-orange-300 select-none hover:scale-110 transition-all'>Manage Status</span>
      <div className='items-start flex flex-col'>
      <Status/>
      <Separator className='w-full bg-gray-600 my-8' orientation='horizontal'/>
      <div className='flex flex-col space-y-8'>
      <Mood/>
      <div className='flex justify-between'>
      <Title/>
      <Time/>
      </div>
      <Button className='bg-fuchsia-600 hover:bg-fuchsia-800'>Save changes</Button>
      </div>
      </div>
    </div>
  )
}

export default page