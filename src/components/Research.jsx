import React from 'react'

function Card({title,desc}){
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-3 text-gray-600">{desc}</p>
    </div>
  )
}

export default function Research(){
  return (
    <section id="research" className="mt-16">
      <h3 className="text-2xl font-semibold">Research Areas</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <Card title="Early Cancer Detection" desc="cfDNA & cfRNA fragmentomics, tissue-of-origin prediction, and sensitive classifiers." />
        <Card title="Multi-omics Integration" desc="Cross-modal integration of genomics, transcriptomics, and fragmentome features." />
        <Card title="Drug Synergy Prediction" desc="Predicting synergistic drug combinations using multi-modal deep learning." />
      </div>
    </section>
  )
}
