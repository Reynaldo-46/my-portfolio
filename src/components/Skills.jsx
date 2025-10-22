import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-primary-400 rounded-full flex items-center justify-center mr-4">
                <i data-feather="layout"></i>
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                HTML, CSS, JavaScript (ES6+)
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                React.js, Angular.js, Next.js
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                TypeScript
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                Tailwind CSS, Bootstrap
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4">
                <i data-feather="server"></i>
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Node.js (Express), Django, .NET, Laravel
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Java, Python, C#
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                RESTful APIs & WebSockets
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                Authentication (JWT, OAuth)
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mr-4">
                <i data-feather="database"></i>
              </div>
              <h3 className="text-xl font-semibold">Database</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                MySQL, PostgreSQL, DB2, SQL Server
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                MongoDB & NoSQL
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                Database Architecture & Optimization
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mr-4">
                <i data-feather="cloud"></i>
              </div>
              <h3 className="text-xl font-semibold">DevOps & IoT</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                Docker, Kubernetes, CI/CD Pipelines
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                AWS / Azure Cloud Deployment
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                Git, GitHub, GitLab
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                Arduino & IoT Machine Integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
