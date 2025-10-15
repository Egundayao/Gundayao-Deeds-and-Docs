import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Homes from './screens/Homes'
import Services from './screens/Services'
import About from './screens/About'
import Inquire from './screens/Inquire'
import './App.css'

// Navigation Component
function Navigation() {
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

  return (
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
          <Link 
            to="/"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
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
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center 
                          space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 
                          text-gray-700">
            <Link 
              to="/services" 
              className={`text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                         font-medium transition-all duration-300 hover:scale-105 
                         relative group whitespace-nowrap ${
                           isActive('/services') 
                             ? 'text-gray-900' 
                             : 'text-gray-700 hover:text-gray-900'
                         }`}>
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-800 transition-all duration-300 
                               ${isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                         font-medium transition-all duration-300 hover:scale-105 
                         relative group whitespace-nowrap ${
                           isActive('/about') 
                             ? 'text-gray-900' 
                             : 'text-gray-700 hover:text-gray-900'
                         }`}>
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-800 transition-all duration-300 
                               ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link 
              to="/inquire" 
              className={`text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl
                         font-medium transition-all duration-300 hover:scale-105 
                         relative group whitespace-nowrap ${
                           isActive('/inquire') 
                             ? 'text-gray-900' 
                             : 'text-gray-700 hover:text-gray-900'
                         }`}>
              Inquire
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-800 transition-all duration-300 
                               ${isActive('/inquire') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
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
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg 
                           transition-all duration-200 ${
                             isActive('/services')
                               ? 'text-gray-900 bg-gray-100/50'
                               : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                           }`}>
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg 
                           transition-all duration-200 ${
                             isActive('/about')
                               ? 'text-gray-900 bg-gray-100/50'
                               : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                           }`}>
                About
              </Link>
              <Link 
                to="/inquire" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg 
                           transition-all duration-200 ${
                             isActive('/inquire')
                               ? 'text-gray-900 bg-gray-100/50'
                               : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
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

function App() {
  return (
    <Router>
      <div className="w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
