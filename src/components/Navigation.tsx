'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#project', label: 'Project' },
    { href: '#technical-skills', label: 'Technical Skills' },
    { href: '#writing', label: 'Writing' },
    { href: '#contact', label: 'Contact' },
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'project', 'technical-skills', 'writing', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 z-50 bg-background/80 backdrop-blur-md border-r border-neutral-200 dark:border-neutral-800 flex flex-col items-center py-8">
      <a href="#home" className="mb-12 flex flex-col items-center group">
        <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center text-white dark:text-black font-bold text-lg group-hover:scale-110 transition-transform">
          JK
        </div>
      </a>
      
      <ul className="flex flex-col items-center gap-8 flex-1">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`flex flex-col items-center gap-2 group transition-all ${
                activeSection === link.href.substring(1)
                  ? 'text-foreground'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
              title={link.label}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                activeSection === link.href.substring(1)
                  ? 'bg-foreground scale-150'
                  : 'bg-neutral-400 group-hover:bg-foreground group-hover:scale-125'
              }`} />
              <span className="text-xs font-medium [writing-mode:vertical-lr] rotate-180">
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
