import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold text-white">Reynaldo Yasoña</span>
            <p className="mt-2">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Reynaldo Yasoña. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition"><i data-feather="github"></i></a>
            <a href="#" className="hover:text-white transition"><i data-feather="linkedin"></i></a>
            <a href="#" className="hover:text-white transition"><i data-feather="twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
