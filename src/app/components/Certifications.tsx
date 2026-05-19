import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Data Analysis with Pandas and Python',
    issuer: 'Udemy',
    issuerLogo: '🎓',
    description: 'Comprehensive course covering data manipulation, analysis, and exploration using the Pandas library with Python.',
    skills: ['Pandas', 'Python', 'Data Cleaning', 'Data Analysis'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    badgeColor: 'bg-orange-100 text-orange-700'
  },
  {
    id: 2,
    title: 'Git & GitHub - The Practical Guide',
    issuer: 'Udemy',
    issuerLogo: '🎓',
    description: 'Hands-on training for version control using Git and collaboration workflows using GitHub.',
    skills: ['Git', 'GitHub', 'Version Control', 'Branching'],
    color: 'from-purple-500 to-blue-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-700'
  },
  {
    id: 3,
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    issuer: 'Udemy',
    issuerLogo: '🎓',
    description: 'End-to-end Python training covering fundamentals to advanced topics including OOP, file handling, and real-world projects.',
    skills: ['Python', 'OOP', 'File Handling', 'Problem Solving'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-700'
  },
  {
    id: 4,
    title: 'Introduction to HTML, CSS, & JavaScript',
    issuer: 'IBM',
    issuerLogo: '🏢',
    description: 'IBM-certified course introducing core web technologies: HTML structure, CSS styling, and JavaScript programming fundamentals.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Basics'],
    color: 'from-teal-500 to-green-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    badgeColor: 'bg-teal-100 text-teal-700'
  },
  {
    id: 5,
    title: 'Inheritance and Data Structures in Java',
    issuer: 'IBM',
    issuerLogo: '🏢',
    description: 'IBM-certified course covering advanced Java concepts including inheritance, polymorphism, interfaces, and core data structures like stacks, queues, linked lists, and trees.',
    skills: ['Java', 'Inheritance', 'Data Structures', 'OOP'],
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    badgeColor: 'bg-red-100 text-red-700'
  },
  {
    id: 6,
    title: 'Oracle Java Foundations',
    issuer: 'Oracle',
    issuerLogo: '🔴',
    description: 'Oracle-certified foundational Java course covering Java syntax, object-oriented programming, exception handling, and core APIs — building a solid base for enterprise Java development.',
    skills: ['Java', 'OOP', 'Exception Handling', 'Core APIs'],
    color: 'from-red-600 to-red-800',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    badgeColor: 'bg-red-100 text-red-800'
  }
];

export function Certifications() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-recognized credentials validating my skills and commitment to learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`group relative rounded-2xl border-2 ${cert.borderColor} ${cert.bgColor} p-6 hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg">{cert.issuerLogo}</span>
                    <span className="text-sm font-semibold text-gray-500">{cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills covered */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${cert.badgeColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Continuously learning and adding new credentials to my profile.
          </p>
        </div>
      </div>
    </div>
  );
}
