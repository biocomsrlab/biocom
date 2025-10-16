import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© BioCoM    2025</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
