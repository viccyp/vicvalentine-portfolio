export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Victor Valentine
        </h1>
        <p className="text-2xl md:text-3xl text-[rgb(53,0,14)] mb-4 font-light">
          Professional Drummer
        </p>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          North London
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-[rgb(53,0,14)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[rgb(70,0,20)] transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            className="border-2 border-[rgb(53,0,14)] text-[rgb(53,0,14)] px-8 py-3 rounded-full font-semibold hover:bg-[rgb(53,0,14)] hover:text-white transition-colors"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[rgb(53,0,14)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

