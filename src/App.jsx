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
          <p className="mt-2 text-gray-600">Laboratory for Bioinformatics and Computational Medicine (BioCoM)
            <br>Department of CSE — International Islamic University Chittagong— Kumira, Bangladesh
            <br>Mobile: +8801815646105, Email: biocomsrlab@gmail.com
              <br>PI email: saifurcubd@gmail.com; srahaman@iiuc.ac.bd; srahaman2-c@my.cityu.edu.hk</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
