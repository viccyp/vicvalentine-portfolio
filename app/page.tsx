import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image - Fixed for entire page */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 blur-xl md:blur-none"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}

