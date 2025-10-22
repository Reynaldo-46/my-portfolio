import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center animate-slide-up">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <img
              src="/src/assets/profile.jpg"
              alt="About"
              className="rounded-lg shadow-lg w-full max-w-md animate-float"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Innovative and results-driven Full Stack Developer with strong
              experience in designing and delivering enterprise-grade web
              applications, automation systems, and data-driven solutions.
              Skilled in both frontend and backend development with a deep
              understanding of system architecture and scalability.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Adept at building secure, high-performance applications using
              modern frameworks and technologies such as React, Vue, Node.js,
              Django, C#.NET, and SQL/NoSQL databases. Experienced in machine
              integration and IoT-based solutions for real-time monitoring and
              process automation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Currently working as an Open System Developer (DB2) at Nityo
              Infotech, contributing to large-scale system enhancements and
              financial enterprise solutions. Previously served as Lead
              Programmer at Denso Philippines Corporation, developing critical
              manufacturing systems and leading cross-functional technical
              initiatives.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Passionate about solving complex problems, optimizing performance,
              and building smart, scalable, and future-ready software solutions
              that deliver real business impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <i
                  data-feather="map-pin"
                  className="text-primary-600 dark:text-primary-400 mr-2"
                ></i>
                <span>Pagsanjan, Laguna, Philippines</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <i
                  data-feather="mail"
                  className="text-primary-600 dark:text-primary-400 mr-2"
                ></i>
                <span>reynaldo_yasona@outlook.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <i
                  data-feather="phone"
                  className="text-primary-600 dark:text-primary-400 mr-2"
                ></i>
                <span>0991-483-9977</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
