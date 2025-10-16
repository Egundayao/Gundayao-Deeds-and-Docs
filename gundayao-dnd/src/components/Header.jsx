import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

// Preload route on hover
const preloadRoute = (routeName) => {
  switch (routeName) {
    case 'services':
      import('../screens/Services')
      break
    case 'about':
      import('../screens/About')
      break
    case 'inquire':
      import('../screens/Inquire')
      break
    case 'home':
      import('../screens/Homes')
      break
  }
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const isServicesPage = location.pathname === '/services'

  return (
    <header className="fixed top-1 sm:top-2 md:top-2 lg:top-3 xl:top-4 
                       left-1/2 transform -translate-x-1/2 z-50 
                       w-[98%] sm:w-[95%] md:w-[92%] lg:w-[88%] xl:w-[85%] 2xl:w-[82%]
                       max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl 
                       px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
      <div className={`${isServicesPage ? 'bg-black/90 border-gray-700/30' : 'bg-white/90 border-gray-200/30'} backdrop-blur-lg rounded-full 
                      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                      py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5
                      shadow-md sm:shadow-lg md:shadow-xl 
                      border
                      transition-all duration-500 ease-out hover:shadow-2xl
                      relative`}>
        <nav className="flex items-center justify-between w-full">
          {/* Logo - Elegant Text */}
          <Link 
            to="/"
            onMouseEnter={() => preloadRoute('home')}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                       font-bold ${isServicesPage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'} tracking-wider
                       transition-all duration-300
                       font-serif relative group cursor-pointer`}>
            <span className="relative z-10">G</span>
            <span className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                           font-bold ${isServicesPage ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'} tracking-wider
                           transition-all duration-300
                           font-serif relative group cursor-pointer`}>D&D</span>
            <div className={`absolute inset-0 bg-gradient-to-r ${isServicesPage ? 'from-gray-700' : 'from-gray-100'} to-transparent 
                            opacity-0 group-hover:opacity-20 transition-opacity duration-300 
                            rounded-md`}></div>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className={`hidden sm:flex items-center 
                          space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 
                          ${isServicesPage ? 'text-gray-300' : 'text-gray-700'}`}>
            <Link 
              to="/services" 
              onMouseEnter={() => preloadRoute('services')}
              className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                         font-medium transition-all duration-300 hover:scale-105 
                         relative group whitespace-nowrap ${
                           isActive('/services') 
                             ? (isServicesPage ? 'text-white' : 'text-gray-900')
                             : (isServicesPage ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
                         }`}>
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 ${isServicesPage ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 
                               ${isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              to="/about" 
              onMouseEnter={() => preloadRoute('about')}
              className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                         font-medium transition-all duration-300 hover:scale-105 
                         relative group whitespace-nowrap ${
                           isActive('/about') 
                             ? (isServicesPage ? 'text-white' : 'text-gray-900')
                             : (isServicesPage ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
                         }`}>
              About
              <span className={`absolute bottom-0 left-0 h-0.5 ${isServicesPage ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 
                               ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              to="/inquire" 
              onMouseEnter={() => preloadRoute('inquire')}
              className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                         font-medium transition-all duration-300 hover:scale-105 
                         relative group whitespace-nowrap ${
                           isActive('/inquire') 
                             ? (isServicesPage ? 'text-white' : 'text-gray-900')
                             : (isServicesPage ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')
                         }`}>
              Inquire
              <span className={`absolute bottom-0 left-0 h-0.5 ${isServicesPage ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 
                               ${isActive('/inquire') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="sm:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle menu">
            <span className={`w-5 h-0.5 ${isServicesPage ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 ${isServicesPage ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 ${isServicesPage ? 'bg-white' : 'bg-gray-800'} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className={`sm:hidden absolute top-full left-0 right-0 mt-2 
                          ${isServicesPage ? 'bg-black/95 border-gray-800/50' : 'bg-white/95 border-gray-100/50'} backdrop-blur-md rounded-2xl 
                          shadow-xl border
                          py-4 px-4
                          transition-all duration-300 ease-in-out`}>
            <div className="flex flex-col space-y-3">
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg 
                           transition-all duration-200 ${
                             isActive('/services')
                               ? (isServicesPage ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100/50')
                               : (isServicesPage ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50')
                           }`}>
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg 
                           transition-all duration-200 ${
                             isActive('/about')
                               ? (isServicesPage ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100/50')
                               : (isServicesPage ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50')
                           }`}>
                About
              </Link>
              <Link 
                to="/inquire" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg 
                           transition-all duration-200 ${
                             isActive('/inquire')
                               ? (isServicesPage ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100/50')
                               : (isServicesPage ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50')
                           }`}>
                Inquire
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
