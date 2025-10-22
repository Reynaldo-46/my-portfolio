import React, { useEffect, useRef } from 'react'

// We'll load Vanta via CDN dynamically (three + vanta.net). animejs loaded via npm but not required here.

export default function Hero() {
  const vantaRef = useRef(null)
  const vantaInstanceRef = useRef(null)

  useEffect(() => {
    // helper to load scripts
    const loadScript = (src) => new Promise((res, rej) => {
      if (document.querySelector(`script[src="${src}"]`)) return res()
      const s = document.createElement('script')
      s.src = src
      s.async = true
      s.onload = res
      s.onerror = rej
      document.head.appendChild(s)
    })

    let cancelled = false

    async function initVanta(color = 0x0ea5e9, backgroundColor = 0xf8fafc) {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js')
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js')
        if (cancelled) return
        if (window.VANTA && typeof window.VANTA.NET === 'function') {
          if (vantaInstanceRef.current && vantaInstanceRef.current.destroy) {
            vantaInstanceRef.current.destroy()
            vantaInstanceRef.current = null
          }
          vantaInstanceRef.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color,
            backgroundColor,
            points: 10.0,
            maxDistance: 20.0,
            spacing: 16.0
          })
        }
      } catch (err) {
        console.warn('Vanta load failed', err)
      }
    }

    // initialize with correct theme
    const isDark = localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    initVanta(isDark ? 0x7c3aed : 0x0ea5e9, isDark ? 0x111827 : 0xf8fafc)

    // theme toggle buttons update Vanta — attach listeners
    const themeButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile')
    function handleThemeToggle() {
      const dark = document.documentElement.classList.toggle('dark')
      localStorage.setItem('color-theme', dark ? 'dark' : 'light')
      // reinitialize vanta with different colors
      initVanta(dark ? 0x7c3aed : 0x0ea5e9, dark ? 0x111827 : 0xf8fafc)
    }
    themeButtons.forEach(b => b.addEventListener('click', handleThemeToggle))

    // ensure initial theme class is correct
    if (isDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')

    return () => {
      cancelled = true
      themeButtons.forEach(b => b.removeEventListener('click', handleThemeToggle))
      if (vantaInstanceRef.current && vantaInstanceRef.current.destroy) vantaInstanceRef.current.destroy()
    }
  }, [])

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div ref={vantaRef} id="vanta-bg" className="vanta-canvas" />
      <div className="max-w-6xl mx-auto hero-content">
        <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm <span className="gradient-text">Rey</span></h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Building scalable web applications with 5+ years of experience in both frontend and backend development.</p>
            <div className="flex space-x-4">
              <a href="#projects" className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">View Projects</a>
              <a href="#contact" className="px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition">Contact Me</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-float">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 flex items-center justify-center animate-pulse-slow">
                <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-white dark:bg-gray-800 overflow-hidden shadow-xl">
                  {/* Replace with your local profile image path under src/assets/profile.jpg or change path */}
                  <img src="http://static.photos/technology/640x360/42" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                  <i data-feather="code"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
