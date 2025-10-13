import { useState } from 'react'
import guLogo from './assets/GU.svg'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import './App.css'

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

function App() {
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
              {/* Logo - Responsive sizing */}
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 
                              font-bold text-gray-800 tracking-wide
                              transition-all duration-300">
                GD&D
              </div>
              
              {/* Desktop Navigation Links */}
              <div className="hidden sm:flex items-center 
                              space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 
                              text-gray-700">
                <a href="#services" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                                             font-medium hover:text-gray-900 
                                             transition-all duration-300 hover:scale-105 
                                             relative group whitespace-nowrap">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                                           font-medium hover:text-gray-900 
                                           transition-all duration-300 hover:scale-105 
                                           relative group whitespace-nowrap">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#inquire" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                                             font-medium hover:text-gray-900 
                                             transition-all duration-300 hover:scale-105 
                                             relative group whitespace-nowrap">
                  Inquire
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
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
                  <a href="#services" 
                     onClick={() => setIsMenuOpen(false)}
                     className="text-sm font-medium text-gray-700 hover:text-gray-900 
                                py-2 px-3 rounded-lg hover:bg-gray-100/50
                                transition-all duration-200">
                    Services
                  </a>
                  <a href="#about" 
                     onClick={() => setIsMenuOpen(false)}
                     className="text-sm font-medium text-gray-700 hover:text-gray-900 
                                py-2 px-3 rounded-lg hover:bg-gray-100/50
                                transition-all duration-200">
                    About
                  </a>
                  <a href="#inquire" 
                     onClick={() => setIsMenuOpen(false)}
                     className="text-sm font-medium text-gray-700 hover:text-gray-900 
                                py-2 px-3 rounded-lg hover:bg-gray-100/50
                                transition-all duration-200">
                    Inquire
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>
      </section>

      {/* Second Section - We're Dedicated */}
      <section className="min-h-screen bg-white flex items-center justify-center 
                          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                          py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-2 lg:gap-3 xl:gap-4">
              {/* Process Assets Card */}
              <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl 
                              transition-all duration-500 hover:scale-105">
                <img 
                  src={pic1} 
                  alt="Process Assets" 
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[28rem] xl:h-[32rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-8 xl:p-10 text-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">
                    Process
                  </h3>
                  <h4 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white">
                    Assets
                  </h4>
                </div>
              </div>
            </div>

            {/* Transfer Titles Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl 
                              transition-all duration-500 hover:scale-105">
                <img 
                  src={pic2} 
                  alt="Transfer Titles" 
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[28rem] xl:h-[32rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-8 xl:p-10 text-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">
                    Transfer
                  </h3>
                  <h4 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white">
                    Titles
                  </h4>
                </div>
              </div>
            </div>

            {/* Take Ownership Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl 
                              transition-all duration-500 hover:scale-105">
                <img 
                  src={pic3} 
                  alt="Take Ownership" 
                  className="w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[28rem] xl:h-[32rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-8 xl:p-10 text-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">
                    Take
                  </h3>
                  <h4 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-white">
                    Ownership
                  </h4>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
