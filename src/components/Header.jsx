import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-gradient-to-tr from-green-600 to-blue-500 flex items-center justify-center text-white font-bold">BC</div>
          <div>
            <h1 className="text-xl font-semibold">BioCoM-SRLab</h1>
            <p className="text-sm text-gray-500"><bold>Engr. Saifur Rahman</bold> — Principal Investigator</p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:block">
          <a href="#research" className="text-gray-700 hover:text-blue-600">Research</a>
          <a href="#people" className="text-gray-700 hover:text-blue-600">People</a>
          <a href="#publications" className="text-gray-700 hover:text-blue-600">Publications</a>
          <a href="#news" className="text-gray-700 hover:text-blue-600">News</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
