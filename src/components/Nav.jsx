import React from 'react'

export default function Nav() {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-sm z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold gradient-text">My Portfolio</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">Projects</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition">Experience</a>
            <a href="#contact" className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">Contact</a>
            {/* <button id="theme-toggle" className="text-gray-600 dark:text-gray-300 transition-transform">
              <i data-feather="moon" className="hidden dark:block"></i>
              <i data-feather="sun" className="dark:hidden"></i>
            </button> */}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            {/* <button id="theme-toggle-mobile" className="text-gray-600 dark:text-gray-300">
              <i data-feather="moon" className="hidden dark:block"></i>
              <i data-feather="sun" className="dark:hidden"></i>
            </button> */}
            <button id="menu-btn" className="text-gray-600 dark:text-gray-300">
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
