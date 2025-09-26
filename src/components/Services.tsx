import React from 'react';
import { CheckCircle, Code, Bug, Zap, Settings, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Manual Testing',
      description: 'Writing and executing test cases, detecting and reporting bugs, and ensuring the product meets requirements.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: 'Automation Testing',
      description: 'Developing and running automated test scripts using Selenium and Java to improve testing efficiency and coverage.'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: 'API Testing',
      description: 'Validating APIs with Postman, ensuring reliable communication between software components.'
    },
    {
      icon: <Bug className="w-8 h-8 text-red-600" />,
      title: 'Bug Tracking & Project Management',
      description: 'Using Jira for test management, bug tracking, and reporting (applied in real projects such as banking systems).'
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: 'Problem Solving with Programming',
      description: 'Applying strong algorithmic and coding skills in C++ and Java to analyze, solve, and optimize complex software issues.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Teamwork & Collaboration',
      description: 'Actively supporting development and QA teams, sharing knowledge, and contributing to continuous improvement of software quality.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software testing services to ensure your applications meet the highest quality standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Software Quality?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's work together to ensure your software meets the highest standards of quality and reliability
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}