import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';   // ← add this
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Expense Tracker System (Python)',
      category: 'python',
      description: 'A command-line expense tracking application built with Python. Allows users to add, view, categorize, and summarize expenses with data stored using file handling. Visualizations powered by Matplotlib and Pandas.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlbnNlJTIwdHJhY2tlciUyMGZpbmFuY2V8ZW58MXx8fHwxNzc5MTUyOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'File Handling'],
      liveUrl: 'https://spendwiseexpensetrackerusingpython-mttyhdzjnpaltleagptftt.streamlit.app/',
      githubUrl: 'https://github.com/ShreeyaBhatt/SpendWise_Expense_Tracker_using_Python'
    },
    {
      id: 2,
      title: 'Expense Tracker System (Full Stack)',
      category: 'fullstack',
      description: 'A full stack expense tracker built using plain HTML, CSS, and JavaScript. Features a clean UI for adding, categorizing, and deleting expenses with localStorage for data persistence — no frameworks used.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjBmaW5hbmNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3OTEzOTc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      liveUrl: 'https://shreeyabhatt.github.io/Spendwise_Expense_Tracker_using_HTML_CSS_JS/',
      githubUrl: 'https://github.com/ShreeyaBhatt/Spendwise_Expense_Tracker_using_HTML_CSS_JS'
    },
    {
      id: 3,
      title: 'CareeRise: Job Portal System',
      category: 'java',
      description: 'A comprehensive job portal system built with Java, JDBC, and Data Structures. Supports job posting, applicant management, search/filter functionality, and role-based access for employers and job seekers.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBwb3J0YWwlMjBoaXJpbmd8ZW58MXx8fHwxNzc5MTUyOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Java', 'JDBC', 'Data Structures', 'OOP'],
      liveUrl: 'https://drive.google.com/file/d/10kYLRJd9O2SCSgV0dtghOcXH4Mgojn6Z/view?usp=drive_link',
      githubUrl: 'https://github.com/ShreeyaBhatt/CareeRiseJobPortal'
    },
    {
      id: 4,
      title: 'Payroll Management System',
      category: 'java',
      description: 'A CLI-based payroll management system built with Core Java. Handles employee records, salary computation, deductions, tax calculations, and payslip generation through an interactive command-line interface.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXlyb2xsJTIwc2FsYXJ5JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NzkxMzk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Core Java', 'OOP', 'CLI', 'File Handling'],
      liveUrl: 'https://drive.google.com/file/d/1Sqp_ToIFUPxs0AMCd3uvWaYQG8rPZJkw/view?usp=drive_link',
      githubUrl: 'https://github.com/ShreeyaBhatt/Payroll_Management_System'
    },
    {
      id: 5,
      title: 'SmartCart: Supermarket System',
      category: 'java',
      description: 'A CLI-based supermarket management system in Core Java. Covers product inventory, cart operations, billing, discount application, and stock management using object-oriented design principles.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGdyb2Nlcnl8ZW58MXx8fHwxNzc5MTUyOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Core Java', 'OOP', 'Data Structures', 'CLI'],
      liveUrl: 'https://drive.google.com/file/d/1JN-fgFbySEvSrHFbmRL8HYHAihHnO6Pg/view?usp=drive_link',
      githubUrl: 'https://github.com/ShreeyaBhatt/SmartCart_SuperMarket_Management_System'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'java', label: 'Java' },
    { id: 'python', label: 'Python' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
      <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world projects built with Python and Full Stack web technologies
          </p>
        </div>
 
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
 
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
 
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
 
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
