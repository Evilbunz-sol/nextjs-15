import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
