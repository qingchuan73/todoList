

const headers = ['原生JavaScript', 'Vue.js', 'React.js', 'Angular.js']
const links = ['Vanilla JS', 'Vue JS', 'React JS', 'Angular JS']
const descriptions = [`JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如
            Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，JavaScript
            是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。`,
    `Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
           `, `React (也称为 React.js 或 ReactJS) 是一个用于构建用户界面的 JavaScript 库。它由 Facebook 维护，并且有一个由个人开发者和公司组成的庞大社区支持。React 可以用于开发单页应用程序（SPA）以及移动应用程序（通过 React Native）。`
    , `Angular 是一个由 Google 维护的开源前端框架，用于构建动态的单页应用程序（SPA）。它最初由 Misko Hevery 和 Adam Abrons 在 2009 年创建，最初版本称为 AngularJS。2016 年，Angular 团队发布了一个完全重写的版本，称为 Angular（通常称为 Angular 2+），并且从那时起，Angular 采用了基于组件的架构和 TypeScript 语言。`
           
]
const organizations = [{ name: 'Mozilla', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' }, { name: 'Vue', link: 'https://cn.vuejs.org/guide/introduction.html' }, { name: 'Meta', link: 'https://react.dev/' }, { name: 'Google', link: 'https://angular.io/' }]
const officials = [{ name: 'js', children: [{ name: 'MDN JavaScript教程', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' }, { name: 'W3Schools JavaScript 教程', link: 'https://www.w3schools.com/js/' }, { name: 'JavaScript.info', link: 'https://javascript.info/' }] },
{ name: 'vue', children: [{ name: 'Vue 官方文档', link: 'https://cn.vuejs.org/guide/introduction.html' }, { name: 'Vue Mastery', link: 'https://www.vuemastery.com/' }, { name: 'Vue School', link: 'https://vueschool.io/' }] },
{ name: 'react', children: [{ name: 'React 官方文档', link: 'https://react.dev/' }, { name: 'FreeCodeCamp React 教程', link: 'https://www.freecodecamp.org/news/tag/react/' }, { name: 'Fullstackopen React 课程', link: 'https://fullstackopen.com/zh/' }] },
{ name: 'angular', children: [{ name: 'Angular 官方文档', link: 'https://angular.io/' }, { name: 'Tour of Heroes 教程', link: 'https://angular.cn/tutorial' }, { name: 'Angular University', link: 'https://angular-university.io/' }] }
]
const communities = [{ name: 'js', children: [{ name: 'Stack Overflow JavaScript 标签', link: 'https://stackoverflow.com/questions/tagged/javascript' }, { name: 'Reddit JavaScript 社区', link: 'https://www.reddit.com/r/javascript/' }] },
{ name: 'vue', children: [{ name: 'Stack Overflow Vue.js 标签', link: 'https://stackoverflow.com/questions/tagged/vue.js' }, { name: 'Reddit Vue.js 社区', link: 'https://www.reddit.com/r/vuejs/' }] },
{ name: 'react', children: [{ name: 'Stack Overflow React 标签', link: 'https://stackoverflow.com/questions/tagged/reactjs' }, { name: 'Reddit React 社区', link: 'https://www.reddit.com/r/reactjs/' }] },
{ name: 'angular', children: [{ name: 'Stack Overflow Angular 标签', link: 'https://stackoverflow.com/questions/tagged/angular' }, { name: 'Reddit Angular 社区', link: 'https://www.reddit.com/r/Angular2/' }] }
]

const head = document.querySelector('#l_head span')
const head_d = document.querySelector('#source span')
const description = document.querySelector('blockquote p')
const organizationList = document.getElementById('organization')
const officialList = document.getElementById('official')
const communityList = document.getElementById('community')


organizationList.textContent = ''
officialList.textContent = ''
communityList.textContent = ''

console.log('DOMContentLoaded')
const sidebar = document.getElementById('left')
let index = 0
const framework = sidebar.dataset.framework;
console.log(framework)

if (framework === 'Vanilla') {
    index = 0
}

if (framework === 'Vue') {
    index = 1
}

if (framework === 'React') {
    index = 2
}
if (framework === 'Angular') {
    index = 3
}



head.textContent = headers[index]
head_d.textContent = links[index]
description.textContent = descriptions[index]
organizationList.textContent = organizations[index].name
organizationList.href = organizations[index].link
officials[index].children.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = item.link
    a.target = '_blank'
    a.textContent = item.name
    li.appendChild(a)
    officialList.appendChild(li)
})
communities[index].children.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = item.link
    a.target = '_blank'
    a.textContent = item.name
    li.appendChild(a)
    communityList.appendChild(li)
})
