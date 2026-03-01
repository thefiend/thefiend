import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import FloatingElements from '@/components/FloatingElements'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jason Kam — Full Stack Developer',
  description: 'Singapore-based Full Stack Developer building modern, scalable web applications with clean design and frictionless user experiences.',
  keywords: 'Jason Kam, Full Stack Developer, Singapore, React, Next.js, Spring Boot, Go, Python, GovTech, software engineer',
  authors: [{ name: 'Jason Kam' }],
  openGraph: {
    title: 'Jason Kam — Full Stack Developer',
    description: 'Singapore-based Full Stack Developer building modern, scalable web applications.',
    type: 'website',
    url: 'https://thefiend.netlify.app',
    images: [{ url: '/assets/images/jason-kam.jpeg', width: 400, height: 400, alt: 'Jason Kam' }],
  },
  twitter: {
    card: 'summary',
    title: 'Jason Kam — Full Stack Developer',
    description: 'Singapore-based Full Stack Developer building modern, scalable web applications.',
    images: ['/assets/images/jason-kam.jpeg'],
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
