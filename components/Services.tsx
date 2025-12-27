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
      description: 'Personalised drum lessons for all skill levels. Learn technique, rhythm, and musicality in a supportive and engaging environment either online or in-person. Lessons can be conducted at my home in North London, or at a location convenient for you, logistics dependent.',
      icon: '🎓',
    },
  ]

  return (
    <section id="services" className="py-20 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-normal">Services</h2>
        <p className="text-xl text-gray-400 text-center mb-16 uppercase tracking-normal">What I Offer</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#D4A574] transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A574]/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#D4A574] uppercase tracking-normal">{service.title}</h3>
              {service.title === 'Session Gigs' ? (
                <p className="text-gray-300 leading-relaxed">
                  Professional live performance services for events, concerts, and shows. Reliable, versatile, and ready to bring the rhythm to your stage.
                  <br />
                  <br />
                  Whether you need simple and solid 4-to-the-floor all night, intricate jazz comping, or big heavy drums, I will fit your requirements.
                </p>
              ) : service.title === 'Drum Lessons' ? (
                <p className="text-gray-300 leading-relaxed">
                  Personalised drum lessons for all skill levels. Learn technique, rhythm, and musicality in a supportive and engaging environment either online or in-person.
                  <br />
                  <br />
                  In-person lessons can be conducted at my home in North London, or at a location convenient for you, logistics dependent.
                </p>
              ) : (
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

