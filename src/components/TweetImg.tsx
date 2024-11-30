import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TweetImg({tweet, link}:{tweet:StaticImageData, link:string}){
  return (
    <div>
      <Link href={link} target='_blank'>
       <Image
          src={tweet}
          alt='tweet'
          className="w-[300px] cursor-pointer select-none hover:scale-110 transition-all md:w-[500px] h-auto m-4"/>
          </Link>
    </div>
  )
}
