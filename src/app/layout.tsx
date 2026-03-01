import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import FloatingElements from '@/components/FloatingElements'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jason Kam - Full Stack Developer & Designer',
  description: 'Full Stack Developer and Designer from Singapore creating modern and responsive web applications',
  keywords: 'jason, kam, freelance, website, designer, graphic, video, editor, developer, singapore',
  authors: [{ name: 'Jason Kam' }],
  openGraph: {
    title: 'Jason Kam - Full Stack Developer & Designer',
    description: 'Full Stack Developer and Designer from Singapore',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingElements />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
