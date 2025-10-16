import { useEffect } from 'react'

// Preload components for faster navigation
const preloadRoute = (routeComponent) => {
  return routeComponent()
}

export function useRoutePreloader() {
  useEffect(() => {
    // Preload routes after initial load
    const timer = setTimeout(() => {
      // Preload Services page
      import('../screens/Services').catch(console.error)
      
      // Preload About page  
      import('../screens/About').catch(console.error)
      
      // Preload Inquire page
      import('../screens/Inquire').catch(console.error)
    }, 2000) // Delay preloading by 2 seconds

    return () => clearTimeout(timer)
  }, [])
}

export default useRoutePreloader