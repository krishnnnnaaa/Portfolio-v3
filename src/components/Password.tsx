
import { useStatus } from '@/features/appState'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Password = () => {
  const {toast} = useToast()
    const {setTogglePassword, setShouldNoteAppear} = useStatus()
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('')

    const handlePasswordCheck = ()=>{
      setIsLoading(true)
      try {
        if(!password){
          toast({
            description: "Please enter a 4-digit password!",
            variant: 'destructive'
          })
          return;
        }

        const isPasswordValid = password === process.env.NEXT_PUBLIC_PROCESS_KEY;

        if(isPasswordValid){
          setTogglePassword(false)
          setShouldNoteAppear(true)
        }else{
          toast({
            description: "Invalid password!",
            variant: 'destructive'
          })
        }

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
              <MdClose size={24} onClick={()=> setTogglePassword(false)} />
            </button>
    
            <div className="text-center text-white">
              <h2 className="text-xl font-semibold mb-4 select-none">Confirm password</h2>
              <div className='flex flex-col items-start space-y-1'>
              <Input onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)} type="password" className='bg-[#010a15]' placeholder="enter password" />
              <span className='text-xs text-gray-400 select-none'>Enter a 4-digit numeric password</span>
              <div className='w-full'>
              <Button disabled={isLoading} className='bg-green-600 hover:bg-green-800 w-full h-8 mt-2 mb-0.5 text-sm' onClick={handlePasswordCheck}>
                {
                  isLoading ? (
                    <>
                    checking....
                    <Loader2 className='animate-spin' size={15}/>
                    </> 
                  )
                  : "check"
                }
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Password