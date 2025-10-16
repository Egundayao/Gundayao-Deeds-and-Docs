import aboutLogo from '../assets/About.svg'
import visionImage from '../assets/Vision.png'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'

// Responsive Hero Image Component
function ResponsiveHeroImage() {
  return (
    <img 
      src={aboutLogo} 
      alt="About Gundayao Deeds and Documents" 
      className="w-full h-auto block
                 drop-shadow-2xl"
    />
  )
}

// Partners Carousel Component
function PartnersCarousel() {
  const partners = [
    {
      id: 1,
      name: "Ferrari",
      image: "https://images.unsplash.com/photo-1597687168547-2640e6a1b6ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      color: "bg-red-500"
    },
    {
      id: 2,
      name: "Rebeje",
      image: "https://images.unsplash.com/photo-1620860421940-11d849067893?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=784",
      color: "bg-blue-400"
    },
    {
      id: 3,
      name: "RD Firm",
      image: "https://images.unsplash.com/photo-1590099543482-3b3d3083a474?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=704",
      color: "bg-gray-400"
    },
    {
      id: 4,
      name: "Law Firm",
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      color: "bg-gray-800"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [partners.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 transform ${
              index === currentIndex
                ? 'scale-105 ring-4 ring-gray-900 ring-opacity-50'
                : 'scale-100'
            }`}
          >
            {/* Partner Card */}
            <div className={`${partner.color} relative h-80`}>
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-full object-cover mix-blend-overlay"
              />
              {/* Partner Name Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold transform -rotate-12 drop-shadow-lg">
                  {partner.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 z-10"
      >
        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 z-10"
      >
        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="w-full bg-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden h-auto">
        <ResponsiveHeroImage />
      </section>

      {/* Founding Members Section */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our Founding Members
              </h2>
              <p className="text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                Meet the dedicated team behind Gundayao Deeds & 
                Docs. With expertise in real estate, law, and asset 
                management, our founders built this company to 
                simplify the lives of Filipinos navigating complex legal 
                processes.
              </p>
              
              {/* Member List */}
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-semibold text-gray-900 text-lg">Elijah Gundayao</span>
                  <span className="text-gray-600 text-base">Chief Executive Officer</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-semibold text-gray-900 text-lg">Christian Dior</span>
                  <span className="text-gray-600 text-base">Chief Operating Officer</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-semibold text-gray-900 text-lg">Louis Vuitton</span>
                  <span className="text-gray-600 text-base">Chief Financial Officer</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-semibold text-gray-900 text-lg">Donatella Versace</span>
                  <span className="text-gray-600 text-base">Chief Marketing Officer</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-semibold text-gray-900 text-lg">Yves Saint Laurent</span>
                  <span className="text-gray-600 text-base">Chief Legal Officer</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1674919768570-076927525118?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
                  alt="Our Founding Members" 
                  className="w-full h-96 lg:h-[32rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-300" />
        </div>
      </div>

      {/* Mission and Vision Section */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Core Values Box */}
            <div className="flex justify-center">
              {/* Black Box with Core Values - Diamond Shape with Lines */}
              <div className="bg-black rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative 
                              h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]
                              w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                <div className="text-white relative h-full flex items-center justify-center">
                  {/* Core Values positioned like a diamond with connecting lines */}
                  <div className="relative w-full h-full">
                    {/* Top - Legal */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">Legal</h3>
                    </div>
                    
                    {/* Left - Convenience */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap text-center">Convenience</h4>
                    </div>
                    
                    {/* Right - Commitment */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap text-center">Commitment</h4>
                    </div>
                    
                    {/* Bottom - Secure */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">Secure</h4>
                    </div>

                    {/* Diagonal Lines connecting all corners */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Top-left to bottom-right */}
                      <line x1="15" y1="15" x2="85" y2="85" stroke="white" strokeWidth="0.3" className="sm:stroke-[0.4] md:stroke-[0.5]"/>
                      {/* Top-right to bottom-left */}
                      <line x1="85" y1="15" x2="15" y2="85" stroke="white" strokeWidth="0.3" className="sm:stroke-[0.4] md:stroke-[0.5]"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Mission and Vision */}
            <div className="space-y-8 lg:space-y-12">
              {/* Mission - Text aligned to right/end */}
              <div className="text-right">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To deliver fast, accurate, and stress-free legal 
                  document processing services, helping Filipinos save 
                  time, avoid mistakes, and feel confident about their 
                  property, vehicle, and asset transactions.
                </p>
              </div>

              {/* Vision - Text aligned to left/start */}
              <div className="text-left">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the Philippines' most trusted name in legal 
                  document processing, setting a standard for efficiency, 
                  reliability, and client care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-300" />
        </div>
      </div>

      {/* History Section */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
                Our History
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Gundayao Deeds & Docs was founded with 
                a simple vision: to make legal processes less 
                intimidating and more accessible. Inspired 
                by real experiences in the real estate and 
                business industry, we saw a gap in 
                affordable, client-friendly documentation 
                services. Over time, we've built a reputation 
                for professionalism, accuracy, and 
                trustworthiness, serving property owners, 
                entrepreneurs, OFWs, and families across 
                the country.
              </p>
            </div>

            {/* Right Side - Image */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1529339017023-c2f2ce633d0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
                  alt="Our History - Legal Documentation" 
                  className="w-full h-96 lg:h-[32rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-300" />
        </div>
      </div>

      {/* How we do Work Section */}
      <section className="relative py-8 lg:py-12 overflow-hidden">
        {/* Top to Bottom Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 30%, #fff9f9ff 70%, #ffffffff 100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              How we do Work
            </h2>
          </div>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/occycDAXmAA"
                  title="How We Do Work - Gundayao Deeds & Docs"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Partners & Sponsors
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>

          {/* Carousel Container */}
          <PartnersCarousel />

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Interested? Inquire now
            </h3>
            <button className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Inquire Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Address */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              @TDM, Unit 804, Westpoint Tower, Makati Avenue, Brgy. Bel-Air, Makati City, Metro Manila, 1209 Philippines
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About