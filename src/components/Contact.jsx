import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary-600 text-white px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Get In <span className="gradient-text">Touch</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i data-feather="mail" className="text-gray-600"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-primary-100">reynaldo_yasona@outlook.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i data-feather="phone"  className="text-gray-600"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-primary-100">+63 991 483 9977</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i data-feather="map-pin"  className="text-gray-600"></i>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-primary-100">Pagsanjan, Laguna, Philippines</p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <i data-feather="github" className="text-gray-600"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <i data-feather="linkedin" className="text-gray-600"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <i data-feather="twitter" className="text-gray-600"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <i data-feather="facebook" className="text-gray-600"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)') }}>
              <div>
                <label htmlFor="name" className="block mb-2">Full Name</label>
                <input id="name" type="text" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-700 placeholder-opacity-70" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input id="email" type="email" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-700 placeholder-opacity-70" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input id="subject" type="text" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-700 placeholder-opacity-70" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-700 placeholder-opacity-70" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-white text-primary-600 font-medium rounded-md hover:bg-opacity-90 transition text-gray-600">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
