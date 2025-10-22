import React, { useEffect } from 'react'

export default function MobileMenu() {
  useEffect(() => {
    const menuBtn = document.getElementById('menu-btn')
    const mobileMenu = createOrGetMobileMenu()
    function toggleMenu() {
      mobileMenu.classList.toggle('hidden')
    }
    menuBtn?.addEventListener('click', toggleMenu)
    return () => menuBtn?.removeEventListener('click', toggleMenu)
  }, [])

  function createOrGetMobileMenu() {
    let el = document.getElementById('mobile-menu')
    if (el) return el
    // create mobile menu element and attach to body
    el = document.createElement('div')
    el.id = 'mobile-menu'
    el.className = 'hidden fixed inset-0 bg-white dark:bg-gray-800 z-40 pt-16 transition-all duration-300'
    el.innerHTML = `
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col space-y-6">
          <a href="#about" class="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">About</a>
          <a href="#skills" class="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">Skills</a>
          <a href="#projects" class="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">Projects</a>
          <a href="#experience" class="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition">Experience</a>
          <a href="#contact" class="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition text-center">Contact</a>
        </div>
      </div>
    `
    document.body.appendChild(el)
    return el
  }

  return null
}
