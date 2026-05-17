import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import Rates from './pages/Rates'

import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import CarDetails from './pages/CarDetails'
import BookingConfirmed from './pages/BookingConfirmed'
import Profile from './pages/Profile'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Loader from './components/Loader'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const createBurst = (e) => {
      const burst = document.createElement('div')
      burst.className = 'magic-click-effect'
      burst.style.left = `${e.clientX}px`
      burst.style.top = `${e.clientY}px`
      document.body.appendChild(burst)
      setTimeout(() => burst.remove(), 800)
    }
    window.addEventListener('mousedown', createBurst)
    return () => window.removeEventListener('mousedown', createBurst)
  }, [])

  return (
    <>
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      <ScrollToTop />
      <Navbar />
      <main className="page-enter" style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/rates" element={<Rates />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/fleet/:id" element={<CarDetails />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
