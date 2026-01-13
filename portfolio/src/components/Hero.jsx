const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Egan</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A sophomore at the University of Colorado Boulder studying Integrated Design Engineering
              with a Mechanical Engineering emphasis.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in mechanical prototyping, optical systems research, hardware development,
              and interdisciplinary engineering projects.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"></div>
              <div className="relative w-80 h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
