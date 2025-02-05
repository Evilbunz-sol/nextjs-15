import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/context/Theme'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import React from 'react'

const inter = localFont({
  src: './fonts/interVF.ttf', // Adjust the path based on your project structure
  variable: '--font-inter', // Custom CSS variable
  display: 'swap',
  weight: '100 200 300 400 500 600 700 800 900',
})

const spaceGrotesk = localFont({
  src: './fonts/SpaceGroteskVF.ttf', // Adjust the path based on your project structure
  variable: '--font-space-grotesk', // Custom CSS variable
  display: 'swap',
  weight: '300 400 500 600 700 800 900',
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: "../public/images/site-logo.svg"
  }
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()

  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  )
}

export default RootLayout