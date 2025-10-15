import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homes from './screens/Homes'
import Services from './screens/Services'
import About from './screens/About'
import Inquire from './screens/Inquire'
import './App.css'

function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
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
