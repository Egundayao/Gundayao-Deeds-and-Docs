import { useState } from 'react'
import { Link } from 'react-router-dom'
import guLogo from '../assets/GU.svg'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import Footer from '../components/footer'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full bg-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden h-auto">
        <ResponsiveHeroImage />
        
        {/* Fixed Header - Follows Scroll */}
        <header className="fixed top-2 sm:top-3 md:top-4 lg:top-6 xl:top-8 
                           left-1/2 transform -translate-x-1/2 z-50 
                           w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%]
                           max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl 
                           px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-full 
                          px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16
                          py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6
                          shadow-lg sm:shadow-xl md:shadow-2xl 
                          border border-gray-100/50
                          transition-all duration-300 ease-in-out
                          relative">
            <nav className="flex items-center justify-between w-full">
                            {/* Logo - Elegant Text */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                              font-bold text-gray-900 tracking-wider
                              transition-all duration-300 hover:text-gray-700
                              font-serif relative group cursor-pointer">
                <span className="relative z-10">G</span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                              font-bold text-gray-900 tracking-wider
                              transition-all duration-300 hover:text-gray-700
                              font-serif relative group cursor-pointer">D&D</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent 
                                opacity-0 group-hover:opacity-20 transition-opacity duration-300 
                                rounded-md"></div>
              </div>
              
              {/* Desktop Navigation Links */}
              <div className="hidden sm:flex items-center 
                              space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 
                              text-gray-700">
                <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                                        font-medium hover:text-gray-900 
                                        transition-all duration-300 hover:scale-105 
                                        relative group whitespace-nowrap">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/services" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                                               font-medium hover:text-gray-900 
                                               transition-all duration-300 hover:scale-105 
                                               relative group whitespace-nowrap">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/about" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                                             font-medium hover:text-gray-900 
                                             transition-all duration-300 hover:scale-105 
                                             relative group whitespace-nowrap">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/inquire" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                                               font-medium hover:text-gray-900 
                                               transition-all duration-300 hover:scale-105 
                                               relative group whitespace-nowrap">
                  Inquire
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="sm:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
                aria-label="Toggle menu">
                <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="sm:hidden absolute top-full left-0 right-0 mt-2 
                              bg-white/95 backdrop-blur-md rounded-2xl 
                              shadow-xl border border-gray-100/50
                              py-4 px-4
                              transition-all duration-300 ease-in-out">
                <div className="flex flex-col space-y-3">
                  <Link to="/" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 
                                   py-2 px-3 rounded-lg hover:bg-gray-100/50
                                   transition-all duration-200">
                    Home
                  </Link>
                  <Link to="/services" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 
                                   py-2 px-3 rounded-lg hover:bg-gray-100/50
                                   transition-all duration-200">
                    Services
                  </Link>
                  <Link to="/about" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 
                                   py-2 px-3 rounded-lg hover:bg-gray-100/50
                                   transition-all duration-200">
                    About
                  </Link>
                  <Link to="/inquire" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 
                                   py-2 px-3 rounded-lg hover:bg-gray-100/50
                                   transition-all duration-200">
                    Inquire
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      </section>

      {/* Second Section - We're Dedicated */}
      <section className="bg-white flex items-center justify-center 
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
              <div className="cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2">
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
            <div className="cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2">
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
            <div className="cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2">
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
            <div className="cursor-pointer transition-all duration-700 group-hover:blur-sm hover:!blur-none hover:!scale-110 hover:!-translate-y-2">
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
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
