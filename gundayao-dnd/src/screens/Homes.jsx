import { useState, useEffect, useRef } from 'react'
import guLogo from '../assets/GU.svg'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import Footer from '../components/footer'
import OptimizedImage from '../components/OptimizedImage'

// Responsive Image Component
function ResponsiveHeroImage() {
  return (
    <img 
      src={guLogo} 
      alt="Gundayao Deeds and Documents" 
      className="w-full h-auto block
                 drop-shadow-2xl"
    />
  )
}

function Homes() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optional: disconnect observer after first trigger
          observer.disconnect()
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '-50px 0px' // Trigger slightly before the section is fully in view
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full bg-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden h-auto">
        <ResponsiveHeroImage />

      </section>

      {/* Second Section - We're Dedicated */}
      <section ref={sectionRef} className="bg-white flex items-center justify-center 
                          px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12
                          py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-[95%] xl:max-w-[98%] 2xl:max-w-[96%]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left lg:col-span-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                             font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
                We're Dedicated
              </h2>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                             font-light text-gray-700 italic mb-3 sm:mb-4 md:mb-6">
                to Deliver Convenience
              </h3>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                             font-light text-gray-700 italic mb-8 sm:mb-10 md:mb-12">
                and Security
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 
                            text-gray-600 mb-8 sm:mb-10 md:mb-12
                            max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                with fast, accurate, and hassle-free document processing.
              </p>
              
              <a href="#inquire" 
                 className="inline-flex items-center gap-3 sm:gap-4
                            bg-gray-900 text-white 
                            px-6 sm:px-8 md:px-10 lg:px-8 xl:px-10 
                            py-3 sm:py-4 md:py-5 lg:py-4 xl:py-5
                            rounded-full text-sm sm:text-base md:text-lg lg:text-base xl:text-lg
                            font-medium hover:bg-gray-800 
                            transition-all duration-300 hover:scale-105 
                            shadow-lg hover:shadow-xl
                            group">
                Inquire Services
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 
                               transition-transform duration-300 group-hover:translate-x-1" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right Side - Service Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-2 xl:gap-3 group">
              {/* Process Assets Card */}
              <div className={`cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2
                              transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                              transition-all duration-700 delay-100`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]
                              transition-all duration-700">
                <img 
                  src={pic1} 
                  alt="Process Assets" 
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[28rem] xl:h-[32rem] object-cover
                             transition-transform duration-700 hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                hover:from-black/80 hover:via-black/30 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-8 xl:p-10 text-center
                                transform translate-y-2 hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3
                                 transform scale-95 hover:scale-110 transition-transform duration-700">
                    Process
                  </h3>
                </div>
              </div>
            </div>

            {/* Transfer Titles Card */}
            <div className={`cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2
                            transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                            transition-all duration-700 delay-300`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]
                              transition-all duration-700">
                <img 
                  src={pic2} 
                  alt="Transfer Titles" 
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[28rem] xl:h-[32rem] object-cover
                             transition-transform duration-700 hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                hover:from-black/80 hover:via-black/30 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-8 xl:p-10 text-center
                                transform translate-y-2 hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3
                                 transform scale-95 hover:scale-110 transition-transform duration-700">
                    Transfer
                  </h3>
                </div>
              </div>
            </div>

            {/* Take Ownership Card */}
            <div className={`cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2
                            transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                            transition-all duration-700 delay-500`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]
                              transition-all duration-700">
                <img 
                  src={pic3} 
                  alt="Take Ownership" 
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[28rem] xl:h-[32rem] object-cover
                             transition-transform duration-700 hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                hover:from-black/80 hover:via-black/30 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-8 xl:p-10 text-center
                                transform translate-y-2 hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3
                                 transform scale-95 hover:scale-110 transition-transform duration-700">
                    Own
                  </h3>
                </div>
              </div>
            </div>

            {/* Legal Services Card */}
            <div className={`cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2
                            transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                            transition-all duration-700 delay-700`}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]
                              transition-all duration-700">
                <img 
                  src={pic4} 
                  alt="Legal Services" 
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[28rem] xl:h-[32rem] object-cover
                             transition-transform duration-700 hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                hover:from-black/80 hover:via-black/30 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-8 xl:p-10 text-center
                                transform translate-y-2 hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3
                                 transform scale-95 hover:scale-110 transition-transform duration-700">
                    Legal
                  </h3>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-none mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-12">
          {/* Testimonials Container with Much Darker Gradient Background and White Margins */}
          <div className="rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20" 
               style={{
                 background: 'linear-gradient(to bottom, #0f0f0f 19%, #2a2a2a 100%)'
               }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Side - Header Text */}
              <div className="text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
                  Our clients will tell you
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold mb-8 lg:mb-12">
                  that we have a good ear for detail
                </h3>
                
                <p className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-300 leading-relaxed mb-12 lg:mb-16 max-w-lg">
                  Gundayao Deeds & Docs is your trusted partner for legal 
                  document processing and ownership transfers. We specialize in 
                  real estate, vehicle, and asset documentation to save you time. 
                  Prevent costly mistakes, and give you peace of mind. With our 
                  expertise and attention to detail, you can rest assured and 
                  leave the paperwork to us.
                </p>

                <div className="space-y-4">
                  <a href="#legality" className="block text-2xl sm:text-3xl text-white 
                                               hover:text-gray-200 transition-colors duration-300 
                                               cursor-pointer decoration-1 underline-offset-4 underline">
                    Legality
                  </a>
                  <a href="#people" className="block text-2xl sm:text-3xl text-white 
                                             hover:text-gray-200 transition-colors duration-300 
                                             cursor-pointer decoration-1 underline-offset-4 underline">
                    People
                  </a>
                </div>
              </div>

              {/* Right Side - Testimonial Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      OJ
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Dr. Odette A. Johnson</h4>
                      <p className="text-xs lg:text-sm text-gray-600">Property Owner</p>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-800 leading-relaxed">
                    We're detail-oriented and hassle-free.
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      MS
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Maria S. Saht</h4>
                      <p className="text-xs lg:text-sm text-gray-600">Car Owner</p>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-800 leading-relaxed">
                    Reliable. Secure. Convenient.
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      PS
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Patrick B. Star</h4>
                      <p className="text-xs lg:text-sm text-gray-600">Business Owner</p>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-800 leading-relaxed">
                    Reliable and affordable. Saved me weeks of paperwork.
                  </p>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      MK
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Marin C. Kitagawa</h4>
                      <p className="text-xs lg:text-sm text-gray-600">Property Owner</p>
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-800 leading-relaxed">
                    "Handled my documents perfectly even while I was abroad"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Line */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              ©TDM. Unit 804, Westpoint Tower, Makati Avenue, Brgy. Bel-Air, Makati City, Metro Manila, 1209, Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Homes
