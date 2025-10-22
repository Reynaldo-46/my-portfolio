import React from 'react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Education & <span className="gradient-text">Certifications</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mr-4">
                <i data-feather="book"></i>
              </div>
              <h3 className="text-xl font-semibold">BS Information Technology</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">ACTS Computer College</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">2011 - 2015</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mr-4">
                <i data-feather="award"></i>
              </div>
              <h3 className="text-xl font-semibold">Certified Java Developer</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Oracle Certification</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">2023</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mr-4">
                <i data-feather="cloud"></i>
              </div>
              <h3 className="text-xl font-semibold">AWS Certified Developer</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Amazon Web Services</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
