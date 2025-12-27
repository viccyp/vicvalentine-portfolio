'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: 'session-gigs',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend or email service
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '', service: 'session-gigs' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-transparent text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 uppercase tracking-normal">Get In Touch</h2>
        <p className="text-xl text-gray-400 text-center mb-12 uppercase tracking-normal">
          Interested in working together? Send me a message!
        </p>

        <div className="bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-normal">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#2D5A7A] focus:border-transparent outline-none transition placeholder-gray-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-normal">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#2D5A7A] focus:border-transparent outline-none transition placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-normal">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#2D5A7A] focus:border-transparent outline-none transition uppercase"
              >
                <option value="session-gigs">Session Gigs</option>
                <option value="recordings">Recordings</option>
                <option value="drum-lessons">Drum Lessons</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-normal">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#2D5A7A] focus:border-transparent outline-none transition resize-none placeholder-gray-500"
                placeholder="Tell me about your project or enquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2D5A7A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3F709E] transition-colors shadow-lg hover:shadow-xl uppercase tracking-normal"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4 uppercase tracking-normal">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@vicvalentine.com"
              className="text-[#2D5A7A] hover:text-[#3F709E] font-medium"
            >
              contact@vicvalentine.com
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="tel:+44XXXXXXXXXX"
              className="text-[#2D5A7A] hover:text-[#3F709E] font-medium"
            >
              +44 XXXX XXXXXX
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

