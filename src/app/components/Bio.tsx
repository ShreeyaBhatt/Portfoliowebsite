import { Code, Database, BarChart2, Layers } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Bio() {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Python Development',
      description: 'Building scripts, data pipelines, and applications using Python with popular libraries like Pandas, Matplotlib, Seaborn, and Scikit-learn'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Full Stack (MERN)',
      description: 'Developing end-to-end web applications using MongoDB, Express.js, React, and Node.js'
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Data Analysis',
      description: 'Exploring and visualizing data using Pandas, Matplotlib, Seaborn, and Scikit-learn for meaningful insights'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Java & DSA',
      description: 'Strong fundamentals in Core Java, OOP, Data Structures & Algorithms, JDBC, and DBMS — certified by IBM and Oracle'
    }
  ];

  const technologies = [
    'Java', 'Core Java', 'JDBC', 'OOP',
    'Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn',
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB',
    'Data Structures', 'DBMS', 'Git', 'GitHub'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc5MTI2MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate About Building Meaningful Solutions
            </h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                I'm an aspiring Python & Full Stack Developer Intern with hands-on experience
                in building real-world applications using Python and the MERN stack.
              </p>
              <p>
                My journey spans data science — working with Pandas, Scikit-learn, Matplotlib,
                and Seaborn — to full stack web development using React, Node.js, Express, and MongoDB.
              </p>
              <p>
                I'm committed to continuous learning, backed by industry-recognized certifications,
                and always eager to contribute to impactful projects and collaborative teams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
                <div className="text-sm text-gray-500">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-sm text-gray-500">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
