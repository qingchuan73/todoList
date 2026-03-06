import { createApp } from 'vue'
import '../../../assets/styles/base/base.css'
import App from './App.vue'

const app=createApp(App)


fetch('./sidebar/sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('#left').innerHTML = data
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



console.log(app)
app.mount('#app')
