'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: 'session-gigs',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '', service: 'session-gigs' })
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
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
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition placeholder-gray-500"
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
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition placeholder-gray-500"
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
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition uppercase"
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
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#D4A574] focus:border-transparent outline-none transition resize-none placeholder-gray-500"
                placeholder="Tell me about your project or enquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D4A574] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E0B88A] transition-colors shadow-lg hover:shadow-xl uppercase tracking-normal disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="mt-4 text-center text-green-400 text-sm">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-center text-red-400 text-sm">
                Something went wrong. Please try again or email me directly at drums@vicvalentine.com
              </p>
            )}
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4 uppercase tracking-normal">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:drums@vicvalentine.com"
              className="text-[#D4A574] hover:text-[#E0B88A] font-medium"
            >
              drums@vicvalentine.com
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a
              href="tel:+44XXXXXXXXXX"
              className="text-[#D4A574] hover:text-[#E0B88A] font-medium"
            >
              +44 XXXX XXXXXX
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

