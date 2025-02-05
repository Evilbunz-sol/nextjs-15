"use client"

import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import { signOut } from 'next-auth/react'

const Home = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: ROUTES.SIGN_IN })
  }

  return (
    <>
      <h1 className="h1-bold">Welcome to the world of Next.js</h1>
      <div className="px-10 pt-[100px]">
        <Button onClick={handleSignOut}>Log Out</Button>
      </div>
    </>
  )
}

export default Home
