import React from 'react';
import { Menu, X, User, Briefcase, Mail, Award, Settings } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ME</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Mohamed Elsayed</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User size={18} />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Briefcase size={18} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Award size={18} />
              <span>Achievements</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User size={18} />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Briefcase size={18} />
                <span>Experience</span>
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Award size={18} />
                <span>Achievements</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}