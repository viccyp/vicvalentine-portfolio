export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in uppercase tracking-normal">
          Vic Valentine
        </h1>
        <p className="text-2xl md:text-3xl text-[#D4A574] mb-4 font-light uppercase tracking-normal">
          Professional Drummer
        </p>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 uppercase tracking-normal">
          Based in London
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-[#D4A574] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E0B88A] transition-colors shadow-lg hover:shadow-xl uppercase tracking-normal"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            className="border-2 border-[#D4A574] text-[#D4A574] px-8 py-3 rounded-full font-semibold hover:bg-[#D4A574] hover:text-white transition-colors uppercase tracking-normal"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

