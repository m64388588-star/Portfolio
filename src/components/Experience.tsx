import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Testing Student',
      company: 'Self-Learning & Practice',
      location: 'Fayoum, Egypt',
      period: '2024 - Present',
      description: [
        'Learning comprehensive testing methodologies for web and mobile applications',
        'Developing skills in automated testing using Selenium and Java',
        'Practicing API testing with Postman and various testing tools',
        'Building knowledge in bug tracking and project management with Jira'
      ]
    },
    {
      title: 'Programming & Problem Solving',
      company: 'Academic & Personal Projects',
      location: 'Fayoum, Egypt',
      period: '2023 - Present',
      description: [
        'Developing strong programming skills in C++ and Java',
        'Solving algorithmic problems and optimizing code solutions',
        'Working on various software projects to understand development lifecycle',
        'Building foundation for test automation and technical testing approaches'
      ]
    },
    {
      title: 'Banking System Testing Project',
      company: 'Academic Project',
      location: 'Fayoum, Egypt',
      period: '2024',
      description: [
        'Applied Jira for test management and bug tracking in banking system project',
        'Conducted comprehensive testing of financial transactions and user workflows',
        'Documented test cases and tracked defects throughout the project lifecycle',
        'Gained hands-on experience with real-world testing scenarios and requirements'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous growth in software quality assurance
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col lg:items-end space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <Award size={16} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}