"use client"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButton(){
    const { pending } = useFormStatus()
    
    return (
    <>
        {pending ? (
            <Button disabled className="mt-4 w-fit"><Loader2 className="mr-2 w-4 h-4 animate-spin"/>Please Wait</Button>
        )
            : 
            (<Button type="submit" className="mt-4 w-fit">Save Now</Button>)
        }


  
         
     </> )
}