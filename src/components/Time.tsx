import React from 'react'
import { Input } from './ui/input'
import { Switch } from './ui/switch'

const Time = () => {
  return (
    <div className='flex flex-col space-y-2'>
        <div>
            <span className='inline-bloc select-none hover:scale-110 cursor-pointer transition-all'>Time Started:</span>
        </div>
        <div><Input type='time' className='bg-gray-600'/></div>
    </div>
  )
}

export default Time