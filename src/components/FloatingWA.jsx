import React from 'react'

export default function FloatingWA(){
  const wa = 'https://wa.me/9550361953?text=Hi%20I%20need%20to%20enquire%20about%20Raaz%20Unani%20Dawakhana'
  return (
    <a className="fab-wa" href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
        <path d="M20.5 3.5L3.5 20.5" stroke="#0a0f0c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  )
}
