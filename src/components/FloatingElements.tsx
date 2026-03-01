'use client'

import { useEffect, useState } from 'react'

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl animate-float" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-2xl animate-float"
           style={{ animationDelay: '1s', animationDuration: '8s' }} />
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-green-400/30 to-cyan-400/30 rounded-full blur-2xl animate-float"
           style={{ animationDelay: '2s', animationDuration: '7s' }} />
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-yellow-400/25 to-red-400/25 rounded-full blur-2xl animate-float"
           style={{ animationDelay: '0.5s', animationDuration: '5s' }} />
      <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-xl animate-float"
           style={{ animationDelay: '3s', animationDuration: '9s' }} />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-teal-400/25 to-blue-400/25 rounded-full blur-xl animate-float"
           style={{ animationDelay: '1.5s', animationDuration: '6.5s' }} />
    </div>
  )
}
