import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Research from './components/Research'
import People from './components/People'
import Publications from './components/Publications'
import News from './components/News'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Home />
        <Research />
        <People />
        <Publications />
        <News />
        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-gray-600">Laboratory for Bioinformatics and Computational Medicine (BioCoM) — Department — University — Dhaka, Bangladesh</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
