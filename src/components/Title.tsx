import React from 'react'
import { Switch } from './ui/switch'
import { Input } from './ui/input'

const Title = () => {
  return (
    <div className='flex flex-col space-y-2'>
        <div>
            <span className='inline-block select-none hover:scale-110 cursor-pointer transition-all'>Title</span>
        </div>
        <div><Input className='bg-gray-600'/></div>
    </div>
  )
}

export default Title