import React from 'react'
import user from '../user/me.jpg'
import Image from 'next/image'
import { DiGithub, DiGithubBadge } from 'react-icons/di'
import Link from 'next/link'
import { LuCode2  } from "react-icons/lu";

const Project = ({repoName, repoDesc, tech, demo, github =''}: {repoName:string, repoDesc:string, tech:string, demo:string, github: string}) => {
  return (
    <div className='border-2 select-none cursor-pointer hover:scale-105 transition-all bg-[#00132e] border-cyan-600 rounded-lg p-4 w-[500px] m-4'>
        <div className='flex justify-between mb-4'>
            <div className='flex'>
                <div>
                    <Image src={user} alt='me' className='rounded-full mr-2' height={25}width={25}/>
                </div>
                <div>krishnaaaa</div>
            </div>
            <div>
                <Link href={github}>
                <DiGithubBadge className='text-3xl'/>
                </Link>
            </div>
        </div>
        <div>
            <Link href={demo}>
            <span className='text-2xl text-cyan-600 mb-2 inline-block'>{repoName}</span>
            </Link>
            <p className='text-xl'>{repoDesc}</p>
            <span className='text-lg mt-4 inline-block'><LuCode2 className='inline'/> <span className='text-fuchsia-600'>{tech}</span></span>
        </div>
    </div>
  )
}

export default Project