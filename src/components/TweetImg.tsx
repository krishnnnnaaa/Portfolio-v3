import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function TweetImg({tweet}:{tweet:StaticImageData}){
  return (
    <div>
       <Image
          src={tweet}
          alt='tweet'
          className="w-[300px] cursor-pointer select-none hover:scale-110 transition-all md:w-[500px] h-auto m-4"/>
    </div>
  )
}