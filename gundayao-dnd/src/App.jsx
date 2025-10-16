import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import { useRoutePreloader } from './hooks/useRoutePreloader'
import './App.css'

// Lazy load components for better performance
const Homes = lazy(() => import('./screens/Homes'))
const Services = lazy(() => import('./screens/Services'))
const About = lazy(() => import('./screens/About'))
const Inquire = lazy(() => import('./screens/Inquire'))

// Loading component
function LoadingSpinner() {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p 
          className="text-gray-600 text-lg font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  )
}

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Page wrapper for animations
function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()
  useRoutePreloader() // Preload routes for faster navigation

  return (
    <div className="w-full">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Homes /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/inquire" element={<AnimatedPage><Inquire /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
