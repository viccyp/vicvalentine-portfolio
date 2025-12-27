export default function Services() {
  const services = [
    {
      title: 'Session Gigs',
      description: 'Professional live performance services for events, concerts, and shows. Reliable, versatile, and ready to bring the rhythm to your stage.',
      icon: '🥁',
    },
    {
      title: 'Recordings',
      description: 'High-quality studio drumming for your tracks. Professional recording services with attention to detail and musicality.',
      icon: '🎙️',
    },
    {
      title: 'Drum Lessons',
      description: 'Personalized drum lessons for all skill levels. Learn technique, rhythm, and musicality in a supportive and engaging environment.',
      icon: '🎓',
    },
  ]

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Services</h2>
        <p className="text-xl text-gray-400 text-center mb-16">What I Offer</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[rgb(53,0,14)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgb(53,0,14)]/20"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[rgb(53,0,14)]">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

