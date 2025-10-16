import React from 'react'

export default function Home(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl font-extrabold leading-tight">Computational methods for early cancer detection and precision drug therapy</h2>
        <p className="mt-4 text-gray-600">We develop machine-learning and multi-omics approaches to detect cancer early from liquid biopsies and predict synergistic drug combinations using public datasets and clinical collaborations.</p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md shadow">Join the Lab</a>
          <a href="#publications" className="inline-block border border-gray-200 px-5 py-3 rounded-md">Publications</a>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <img src="/src/assets/lab-placeholder.svg" alt="lab" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
