import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

fetch('/sidebar/sidebar.html')
  .then(res => res.text())
  .then(data => {
    (document.querySelector('#left') as HTMLElement).innerHTML = data
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/sidebar/sidebar.css'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = '/sidebar/sidebar.js'
    document.body.appendChild(script)
  }).catch(err => {
    console.log(err);
  })

