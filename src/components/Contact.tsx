import React from 'react';
import { Mail, Phone, MapPin, Linkedin} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project? Let's connect and explore how I can help ensure your software quality
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">m64388588@gmail.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">01030461709</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Fayoum, Egypt</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                >
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}