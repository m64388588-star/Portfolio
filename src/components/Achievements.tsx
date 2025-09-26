import React from 'react';
import { Trophy, Star, Users, Target } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: 'Academic Excellence',
      description: 'Maintaining high academic performance while specializing in software testing methodologies',
      year: '2024'
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: 'Programming Proficiency',
      description: 'Developed strong skills in C++ and Java for problem-solving and test automation',
      year: '2024'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Collaborative Learning',
      description: 'Actively participating in study groups and knowledge sharing sessions with peers',
      year: '2024'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: 'Practical Application',
      description: 'Successfully applied testing knowledge in real banking system project using Jira',
      year: '2024'
    }
  ];

  const stats = [
    { number: '10+', label: 'Testing Tools Learned' },
    { number: '5+', label: 'Projects Practiced' },
    { number: '100%', label: 'Dedication to Learning' },
    { number: '1+', label: 'Year of Study' }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milestones that reflect my commitment to software quality excellence
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Ensure Your Software Quality?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's work together to deliver exceptional software that meets the highest quality standards
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