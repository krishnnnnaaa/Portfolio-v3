import { useStatus } from '@/features/appState'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { HelpCircle, Info, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import status from '@/appwrite/status'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Message = () => {
    const {setShouldNoteAppear, setNote, note} = useStatus()

    // const handleAddNote = ()=>{
    //     setIsLoading(true)
    //   try {
    //       setShouldNoteAppear(false)

    //   } catch (error) {
    //     if(error instanceof Error){
    //       console.log(error);
    //     }
    //   }finally{
    //     setIsLoading(false)
    //   }
    // }
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-[6px] bg-opacity-70 flex justify-center items-center z-50">
          <div className="w-[90%] md:w-[300px]  bg-[#151515] rounded-xl shadow-lg p-4 relative">
            <button
            
              className="absolute mt-2.5 -ml-[35px] top-0 left-full text-gray-600 hover:text-gray-800"
            >
              <MdClose size={24} onClick={()=> setShouldNoteAppear(false)} />
            </button>
    
            <div className="text-center text-white">
              <h2 className="text-xl font-semibold mb-4">A note for you...</h2>
              <div className='flex flex-col items-start space-y-1'>
                <p className='whitespace-pre-wrap mx-auto'>{note}</p>
              </div>
              <div className='w-full flex justify-end'>
              <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                <HelpCircle size={15}/>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-600 text-white p-2 rounded-lg border-none outline-none" >
                      <p>This secret note will expire in 24 hours after it is uploaded.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Message