"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { toast } from "@/hooks/use-toast"
import { signIn } from 'next-auth/react'
import ROUTES from "@/constants/routes"
import React from 'react'



const SocialAuthForm = () => {
    const buttonClass =
      'background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5'
    
    const handleSignIn = async (provider: "github" | "google") => {
      try {
        await signIn(provider, {
          callbackUrl: ROUTES.HOME,
          redirect: false,
        })
      } catch (error) {
        console.log(error)

        toast({
          title: 'Sign-in Failed',
          description: "An error occurred during sign-in",
          variant: "destructive"
        })
        
      }
    }

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn('github')}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span> Login with GitHub </span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn('google')}>
        <Image
          src="/icons/google.svg"
          alt="Github Logo"
          height={20}
          width={20}
          className="mr-2.5 object-contain"
        />
        <span> Login with Google </span>
      </Button>
    </div>
  )
}
export default SocialAuthForm