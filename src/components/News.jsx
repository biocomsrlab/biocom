import React from 'react'

const news = [
  {title: 'Lab opens at University — Fall 2025', date: '2025-10-01', excerpt: 'BioCoM lab officially launched with a small ceremony and first cohort.'},
  {title: 'Grant awarded for early cancer detection', date: '2025-07-12', excerpt: 'We received funding to develop sensitive cfRNA and fragmentomics classifiers.'}
]

export default function News(){
  return (
    <section id="news" className="mt-16">
      <h3 className="text-2xl font-semibold">News</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {news.map((n,i)=> (
          <div key={i} className="bg-white p-4 rounded-md shadow">
            <h4 className="font-semibold">{n.title}</h4>
            <p className="text-sm text-gray-500">{n.date}</p>
            <p className="mt-2 text-gray-600">{n.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
