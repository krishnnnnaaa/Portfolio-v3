'use client'
import React, { useEffect, useState } from 'react'
import Project from './Project'
import { projectsType, proofs } from '@/app/projects'

export default function ProofOfWork(){
    const [proofOfWork, setProofOfWork] = useState<projectsType[]>([])

    useEffect(() => {
        setProofOfWork(proofs)
    }, [])
  return (
    <div className='flex justify-center items-center flex-col'>
        <div>
        <h1 className='text-center text-4xl text-fuchsia-600 my-8'>Proof of Work</h1>
        </div>
        <div className='w-full flex-wrap justify-center flex '>
        {
                    proofOfWork && proofOfWork.map(item => <Project key={item.repoName} demo={item.demo} github={item.gituhb as string} repoDesc={item.repoDesc} repoName={item.repoName} tech={item.tech} />)
                }
        </div>
    </div>
  )
}
