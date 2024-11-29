'use client'
import React, { useEffect, useState } from 'react'
import {stack, stackType} from '../app/stack'
import Tool from './tool'

const Skills = () => {
    const [stackData, setStackData] = useState<stackType[]>([])

    useEffect(() => {
        setStackData(stack)
    }, [])
  return (
    <div className='mx-auto mt-32 pt-10 w-full flex flex-col justify-center items-center'>
        <div><h1  className='text-orange-300 text-4xl my-8'>Coding Skills</h1></div>
        <div className="flex flex-wrap w-full md:w-[75%] mt-8 justify-around ">
        {
                    stackData && stackData.map(item => <Tool key={item.id} tech={item.image} techName={item.name}/>)
                }
        </div>
    </div>
  )
}

export default Skills