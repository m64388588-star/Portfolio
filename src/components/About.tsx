import React from 'react';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    'Manual Testing',
    'Test Automation',
    'API Testing',
    'Performance Testing',
    'Mobile Testing',
    'Regression Testing',
    'Bug Tracking & Reporting',
    'Test Case Design',
    'Quality Assurance',
    'Agile Testing'
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Precision',
      description: 'Meticulous attention to detail in every test case and bug report'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Collaboration',
      description: 'Working closely with development teams to ensure quality delivery'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: 'Innovation',
      description: 'Continuously learning new testing tools and methodologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to ensuring software quality and delivering exceptional user experiences
          </p>
        </div>

        {/* Journey + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a passionate Software Tester, I bring a keen eye for detail and a systematic approach 
              to quality assurance. My expertise spans across manual and automated testing, ensuring 
              that every application meets the highest standards of functionality, performance, and user experience.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe that quality is not just about finding bugs—it's about understanding user needs, 
              preventing issues before they occur, and contributing to the overall success of the product. 
              My approach combines technical expertise with strong communication skills to bridge the gap 
              between development and user expectations.
            </p>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">
                Committed to continuous learning and improvement
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={process.env.PUBLIC_URL + '/profile.jpg'}  // ← الطريقة المضمونة
                alt="Mohamed Elsayed at work"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl object-center"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}