import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Treatments = lazy(() => import('./pages/Treatments'))
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'))
const Gallery = lazy(() => import('./pages/Gallery'))

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/treatments" element={<Treatments/>} />
            <Route path="/treatments/:id" element={<TreatmentDetail/>} />
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
