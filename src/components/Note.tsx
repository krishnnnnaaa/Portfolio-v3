import { useStatus } from '@/features/appState'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import status from '@/appwrite/status'
import { Textarea } from './ui/textarea'

const Note = () => {
    const {toast} = useToast()
    const {setShouldNoteAppear, setNote, note} = useStatus()
    const [isLoading, setIsLoading] = useState(false)

    const handleAddNote = ()=>{
        setIsLoading(true)
      try {
        if(!note){
          toast({
            description: "Please add something in note!",
            variant: 'destructive'
          })
          return;
        }

        const NoteExpiry = new Date();
        NoteExpiry.setHours(NoteExpiry.getHours() + 24);
        status.addNote({note, noteExpiryDate: NoteExpiry.toString()})
          toast({
            description: "A note has been added!",
          })
          setShouldNoteAppear(false)

      } catch (error) {
        if(error instanceof Error){
          console.log(error);
        }
      }finally{
        setIsLoading(false)
      }
    }
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-[6px] bg-opacity-70 flex justify-center items-center z-50">
          <div className="w-[90%] md:w-[300px]  bg-[#151515] rounded-xl shadow-lg p-4 relative">
            <button
            
              className="absolute mt-2.5 -ml-[35px] top-0 left-full text-gray-600 hover:text-gray-800"
            >
              <MdClose size={24} onClick={()=> setShouldNoteAppear(false)} />
            </button>
    
            <div className="text-center text-white">
              <h2 className="text-xl font-semibold mb-4">Add Note</h2>
              <div className='flex flex-col items-start space-y-1'>
              <Textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=> setNote(e.target.value)} className='bg-[#010a15]' placeholder="write a note.." />
              <div className='w-full'>
              <Button disabled={isLoading} className='bg-green-600 hover:bg-green-800  w-full h-8 mt-2 mb-0.5 text-sm' onClick={handleAddNote}>
                {
                  isLoading ? (
                    <>
                    adding note....
                    <Loader2 className='animate-spin' size={15}/>
                    </> 
                  )
                  : "add note"
                }
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Note