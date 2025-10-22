import React, { useEffect } from 'react'
import feather from 'feather-icons'
import Nav from './components/Nav'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // feather icons
    feather.replace()

    // global scroll animation using IntersectionObserver (fade-up)
    const elements = document.querySelectorAll('.animate-slide-up, .animate-fade-in')
    const setInitial = (el) => {
      if (el.classList.contains('animate-slide-up')) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      } else if (el.classList.contains('animate-fade-in')) {
        el.style.opacity = '0'
        el.style.transition = 'opacity 1s ease-in-out'
      }
    }
    elements.forEach(setInitial)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.15 })

    elements.forEach(el => observer.observe(el))

    // cleanup
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <MobileMenu />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
