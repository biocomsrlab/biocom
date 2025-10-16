import React from 'react'

const people = [
  { name: 'Dr. Saifur Rahman', role: 'Principal Investigator', img: '/src/assets/person1.svg' },
  { name: 'Alice Smith', role: 'Postdoc', img: '/src/assets/person2.svg' },
  { name: 'Bob Khan', role: 'PhD Student', img: '/src/assets/person3.svg' },
  { name: 'Carol Yang', role: 'Research Engineer', img: '/src/assets/person4.svg' }
]

export default function People(){
  return (
    <section id="people" className="mt-16">
      <h3 className="text-2xl font-semibold">People</h3>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {people.map(p=> (
          <div key={p.name} className="bg-white rounded-lg shadow p-4 text-center">
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-md" />
            <h4 className="mt-3 font-semibold">{p.name}</h4>
            <p className="text-sm text-gray-500">{p.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
