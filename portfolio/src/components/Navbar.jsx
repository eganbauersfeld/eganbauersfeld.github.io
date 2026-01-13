import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Egan Bauersfeld
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/egan-bauersfeld"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/egan-bauersfeld"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
