# BioCoM Lab Website — GitHub Pages Ready (React + Vite + Tailwind)

This repo scaffold replicates the **structure and visual style** of the Hwang Lab website, using **dummy content**. It's configured to deploy to GitHub Pages at `https://biocomsrlab.github.io/biocom` (replace with your URL when ready).

---

## What is included

- A Vite + React single-page site using Tailwind CSS
- Sections: Home, Research, People, Publications, News, Contact
- Dummy realistic academic content and placeholder images (drop in your images easily)
- `package.json` scripts ready to deploy using `gh-pages`
- Clear instructions to customize and publish

---

## Files (shown below)

- `package.json`
- `vite.config.js`
- `tailwind.config.cjs`
- `postcss.config.cjs`
- `index.html`
- `src/main.jsx`
- `src/App.jsx` (main react file, componentized)
- `src/components/*` (Header, Footer, Cards, Team, Publications)
- `src/assets/` (placeholder images)
- `README.md` (this file)

---

## Key commands

1. Install dependencies:

```
npm install
```

2. Local dev server:

```
npm run dev
```

3. Build (production):

```
npm run build
```

4. Deploy to GitHub Pages (single command):

```
npm run deploy
```

(That `deploy` script uses `gh-pages` to publish the `dist` folder.)

---

## package.json

```json
{
  "name": "biocom",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://biocomsrlab.github.io/biocom",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "gh-pages": "5.0.0",
    "postcss": "8.4.24",
    "tailwindcss": "3.4.8",
    "vite": "5.1.2"
  }
}
```

---

## vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/biocom/'
})
```

---

## tailwind.config.cjs

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## postcss.config.cjs

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## index.html

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BioCoM Lab</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## src/main.jsx

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

## src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root { height: 100%; }
```

---

## src/App.jsx

```jsx
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
          <p className="mt-2 text-gray-600">BioCoM Lab — Department — University — Dhaka, Bangladesh</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
```

---

## src/components/Header.jsx

```jsx
import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-gradient-to-tr from-green-600 to-blue-500 flex items-center justify-center text-white font-bold">BC</div>
          <div>
            <h1 className="text-xl font-semibold">Laboratory for Bioinformatics & Computational Medicine (BioCoM)</h1>
            <p className="text-sm text-gray-500">Computational oncology · multi-omics · drug synergy</p>
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
```

---

## src/components/Home.jsx

```jsx
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
        <img src="/src/assets/lab-placeholder.jpg" alt="lab" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
```

---

## src/components/Research.jsx

```jsx
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
```

---

## src/components/People.jsx

```jsx
import React from 'react'

const people = [
  { name: 'Dr. Saifur Rah', role: 'Principal Investigator', img: '/src/assets/person1.jpg' },
  { name: 'Alice Smith', role: 'Postdoc', img: '/src/assets/person2.jpg' },
  { name: 'Bob Khan', role: 'PhD Student', img: '/src/assets/person3.jpg' },
  { name: 'Carol Yang', role: 'Research Engineer', img: '/src/assets/person4.jpg' }
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
```

---

## src/components/Publications.jsx

```jsx
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
```

---

## src/components/News.jsx

```jsx
import React from 'react'

const news = [
  {title: 'Lab opens at University — Fall 2025', date: '2025-10-01', excerpt: 'BioCoM lab officially launched...'},
  {title: 'Grant awarded for early cancer detection', date: '2025-07-12', excerpt: 'We received funding...'}
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
```

---

## src/components/Footer.jsx

```jsx
import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} BioCoM Lab. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
```

---

## src/assets

Add placeholder images to `src/assets/` (I referenced `lab-placeholder.jpg` and `person*.jpg`). You can replace with your own headshots and lab images. Example images (place in assets):

- `lab-placeholder.jpg` (1200×800)
- `person1.jpg`, `person2.jpg`, `person3.jpg`, `person4.jpg` (500×500)

---

## How to publish (step-by-step)

1. Create a new GitHub repository named `biocom` under the `biocomsrlab` account. Do NOT initialize with README/license.

2. On your machine, from the project folder run:

```bash
git init
git add .
git commit -m "Initial commit: BioCoM lab site"
git branch -M main
git remote add origin https://github.com/biocomsrlab/biocom.git
git push -u origin main
```

3. On GitHub, go to `Settings -> Pages` and ensure branch is `gh-pages` (after first deploy). Or simply run `npm run deploy` locally — `gh-pages` will create the branch for you and push.

4. Run:

```
npm install
npm run deploy
```

5. Visit `https://biocomsrlab.github.io/biocom` (it may take a minute for GitHub Pages to publish).

---

## Customization notes

- Replace dummy text in components (`src/components/*`) with your real lab content.
- Replace images in `src/assets` with your headshots and lab photos. Keep filenames consistent.
- To add publications or news, update the arrays inside `Publications.jsx` / `News.jsx`.

---

If you want, I can now:

- Generate the actual files in a zip you can download, or
- Create the GitHub repo and push the scaffold (I will provide the exact `git` commands; I cannot push from here). 

Tell me which you prefer and I will proceed.
