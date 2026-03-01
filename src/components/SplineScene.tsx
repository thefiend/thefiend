'use client'

import Spline from '@splinetool/react-spline'
import { Suspense, useEffect, useState } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export default function SplineScene({ scene, className = '' }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const originalError = console.error
    const originalWarn = console.warn
    
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Data read, but end of buffer not reached') ||
         args[0].includes('buffer'))
      ) {
        return
      }
      originalError.apply(console, args)
    }

    console.warn = (...args) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Data read, but end of buffer not reached') ||
         args[0].includes('buffer'))
      ) {
        return
      }
      originalWarn.apply(console, args)
    }

    const handleError = (event: ErrorEvent) => {
      if (event.message && event.message.includes('Data read, but end of buffer not reached')) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
    }

    window.addEventListener('error', handleError)

    return () => {
      console.error = originalError
      console.warn = originalWarn
      window.removeEventListener('error', handleError)
    }
  }, [])

  const handleLoad = () => {
    setHasError(false)
  }

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-neutral-400">3D scene unavailable</div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{
      filter: 'contrast(1.1) brightness(1.15) saturate(1.2)',
      mixBlendMode: 'normal'
    }}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-pulse text-neutral-400">Loading 3D scene...</div>
        </div>
      }>
        <div className="relative w-full h-full" style={{
          filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
        }}>
          <Spline 
            scene={scene}
            onLoad={handleLoad}
          />
        </div>
      </Suspense>
    </div>
  )
}
