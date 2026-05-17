import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onFinish }) {
  const [loadingState, setLoadingState] = useState('entering') // entering, opening, done

  useEffect(() => {
    // Stage 1: Show the glowing doors for a bit
    const openTimer = setTimeout(() => {
      setLoadingState('opening')
    }, 1500) // The doors stay closed for 1.5 seconds

    // Stage 2: Doors open and component unmounts
    const finishTimer = setTimeout(() => {
      setLoadingState('done')
      if (onFinish) onFinish()
    }, 3500) // 1.5s waiting + 2s animation time

    return () => {
      clearTimeout(openTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  if (loadingState === 'done') return null

  return (
    <div className={`loader-overlay ${loadingState === 'opening' ? 'loader-overlay--fade' : ''}`}>
      {/* Left Door */}
      <div className={`loader-door loader-door--left ${loadingState === 'opening' ? 'loader-door--open-left' : ''}`}>
        <div className="loader-door__texture"></div>
        <div className="loader-door__edge loader-door__edge--right">
           <div className="loader-rune">✧</div>
           <div className="loader-rune">✦</div>
           <div className="loader-rune">✧</div>
        </div>
      </div>

      {/* Right Door */}
      <div className={`loader-door loader-door--right ${loadingState === 'opening' ? 'loader-door--open-right' : ''}`}>
        <div className="loader-door__texture"></div>
        <div className="loader-door__edge loader-door__edge--left">
           <div className="loader-rune">✧</div>
           <div className="loader-rune">✦</div>
           <div className="loader-rune">✧</div>
        </div>
      </div>

      {/* Center Seal / Logo */}
      <div className={`loader-seal ${loadingState === 'opening' ? 'loader-seal--break' : ''}`}>
        <div className="loader-seal__glow"></div>
        <img src="/images/logo-mascot-transparent.png" alt="Wizard's Seal" className="loader-seal__img" />
      </div>
    </div>
  )
}
