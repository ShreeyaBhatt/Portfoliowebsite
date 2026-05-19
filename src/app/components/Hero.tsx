import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../../imports/image.png';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
                <img
                  src={profilePic}
                  alt="Shreeya Bhatt"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Shreeya Bhatt</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aspiring Python & Full Stack Developer Intern
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            I build web applications and data-driven solutions using Python, the MERN stack,
            and data science libraries — with a passion for clean code and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-16">
            <a
              href="https://github.com/ShreeyaBhatt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreeya-bhatt-4a5715363"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shreeyasbhatt@gmail.com"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('bio')}
            className="inline-flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
