import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import '../../../assets/styles/base/base.css'
import App from './App.tsx'


fetch('./sidebar/sidebar.html')
  .then(res => res.text())
  .then(data => {
    (document.querySelector('#left') as HTMLElement).innerHTML = data
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = './sidebar/sidebar.css'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = './sidebar/sidebar.js'
    document.body.appendChild(script)
  }).catch(err => {
    console.log(err);
  })


createRoot(document.getElementById('container')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

