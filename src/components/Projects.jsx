import React, { useState } from 'react'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {title:'Manpower Mapping and Monitoring System', tags:['C#.NET','SQL Server'], desc:'A comprehensive system for tracking and optimizing workforce allocation across multiple projects.', img:'http://static.photos/technology/640x360/1'},
    {title:'Electronic Kanban Monitoring System', tags:['TypeScript','Angular','Node.js','MySQL'], desc:'Real-time monitoring system for manufacturing processes with analytics dashboard.', img:'http://static.photos/technology/640x360/2'},
    {title:'PCB Case Traceability', tags:['C#','.NET','SQL Server'], desc:'End-to-end PCB tracking and traceability solution.', img:'http://static.photos/technology/640x360/3'},
    {title:'Finance System', tags:['Java','Spring Boot','React','PostgreSQL'], desc:'Automated financial reporting and analytics platform for enterprise use.', img:'http://static.photos/technology/640x360/4'},
    {title:'Final Assembly NG PCB Detection System', tags:['Python','OpenCV','TensorFlow'], desc:'Detects defective PCBs in final assembly line using computer vision.', img:'http://static.photos/technology/640x360/5'},
    {title:'Pas Box Monitoring System', tags:['C#.NET','SQL Server'], desc:'Monitors and manages storage and movement of parts in boxes.', img:'http://static.photos/technology/640x360/6'},
    {title:'Dial System', tags:['C#.NET','WPF'], desc:'Custom dial management application for industrial processes.', img:'http://static.photos/technology/640x360/7'},
    {title:'Smart Home Security System', tags:['Arduino','Python','React Native','Firebase'], desc:'IoT-based home security system with mobile integration.', img:'http://static.photos/technology/640x360/8'},
    {title:'Barcode DLL', tags:['C#.NET'], desc:'Reusable library for barcode generation and scanning.', img:'http://static.photos/technology/640x360/9'},
    {title:'ZipExtractor', tags:['C#.NET'], desc:'Utility for extracting and managing zip archives.', img:'http://static.photos/technology/640x360/10'},
    {title:'ICS', tags:['C#.NET','MySQL'], desc:'Integrated control system for industrial processes.', img:'http://static.photos/technology/640x360/11'},
    {title:'Canteen Application', tags:['C#.NET','SQL Server'], desc:'Canteen management system for employee meals and transactions.', img:'http://static.photos/technology/640x360/12'},
    {title:'Bin Failure Monitoring System', tags:['C#.NET','SQL Server'], desc:'Tracks bin failures in production lines and generates alerts.', img:'http://static.photos/technology/640x360/13'},
    {title:'Project Management System', tags:['TypeScript','React','Node.js'], desc:'Organizes tasks, teams, and deadlines efficiently.', img:'http://static.photos/technology/640x360/14'},
    {title:'Robot Car Path Finder', tags:['Python','OpenCV','TensorFlow','ROS'], desc:'Autonomous vehicle navigation system using computer vision.', img:'http://static.photos/technology/640x360/15'}
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {displayedProjects.map((p, i) => (
            <div key={i} className="project-card bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t, j) => (
                    <span key={j} className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs rounded">{t}</span>
                  ))}
                </div>
                <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 flex items-center transition">
                  <span>View Details</span>
                  <i data-feather="arrow-right" className="ml-1 w-4 h-4"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-gray-700 transition inline-flex items-center"
          >
            <span>{showAll ? 'Show Less' : 'View All Projects'}</span>
            <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
