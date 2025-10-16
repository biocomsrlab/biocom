import React from 'react'

const pubs = [
  {title: 'ClinicalEarlyCancerDF: A clinical early cancer detection framework', venue: 'Nature Medicine (preprint)', year: 2025},
  {title: 'MACSynDCR: Multi-modal AntiCancer Synergistic Drug Combination Response Prediction', venue: 'Bioinformatics', year: 2025}
]

export default function Publications(){
  return (
    <section id="publications" className="mt-16">
      <h3 className="text-2xl font-semibold">Selected Publications</h3>
      <ul className="mt-4 space-y-3">
        {pubs.map((p,i)=> (
          <li key={i} className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium">{p.title}</p>
                <p className="text-sm text-gray-600">{p.venue} • {p.year}</p>
              </div>
              <div className="text-sm text-gray-500">PDF</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
