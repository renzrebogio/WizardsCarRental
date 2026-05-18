import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Route-based code splitting for ultra-fast initial bundle loading
const Home = lazy(() => import('./pages/Home'))
const Fleet = lazy(() => import('./pages/Fleet'))
const Rates = lazy(() => import('./pages/Rates'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const CarDetails = lazy(() => import('./pages/CarDetails'))
const BookingConfirmed = lazy(() => import('./pages/BookingConfirmed'))
const Profile = lazy(() => import('./pages/Profile'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

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
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
