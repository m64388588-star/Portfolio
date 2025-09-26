import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Software Quality Assurance Professional
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mohamed Elsayed
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Passionate Software Tester dedicated to ensuring quality and reliability in every application. 
              I specialize in comprehensive testing strategies, automation, and delivering exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-white" style={{ objectPosition: 'center 20%' }}>
                <img
                  src="/WhatsApp Image 2025-09-25 at 23.11.52_650fb76e.jpg"
                  alt="Mohamed Elsayed"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronDown size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}