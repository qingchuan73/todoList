# TodoList - 多框架对比项目

[![GitHub stars](https://img.shields.io/github/stars/qingchuan73/todoList?style=social)](https://github.com/qingchuan73/todoList)
[![GitHub license](https://img.shields.io/github/license/qingchuan73/todoList)](https://github.com/qingchuan73/todoList/blob/main/LICENSE)

## 📖 项目简介

基于 [TodoMVC](https://github.com/tastejs/todomvc) 规范，使用 React、Vue、Angular、Vanilla JS 四种主流技术栈实现的待办事项应用对比展示项目。旨在帮助开发者了解不同框架的特点、语法差异和适用场景。

## 🚀 技术栈

| 框架 | 版本 | 构建工具 | 语言 |
|------|------|----------|------|
| React | 19.1.1 | Vite 7 | TypeScript |
| Vue | 3.5.21 | Vite 7 | JavaScript |
| Angular | 20.3.0 | Angular CLI | TypeScript |
| Vanilla JS | ES6+ | Webpack | JavaScript |

## ✨ 功能特性

- ✅ 添加/删除任务
- ✅ 标记完成/未完成
- ✅ 任务筛选（全部/活跃/已完成）
- ✅ 清除已完成任务
- ✅ 本地存储持久化
- ✅ 响应式布局
- ✅ 优雅的交互动画

## 📁 项目结构

```
todoList/
├── index.html              # 项目主页（框架选择入口）
├── assets/                 # 静态资源
│   ├── img/               # 框架 Logo
│   └── styles/            # 样式文件
├── examples/              # 各框架实现
│   ├── React/             # React 版本
│   ├── Vue/               # Vue 版本
│   ├── Angular/           # Angular 版本
│   └── Vanilla JS/        # 原生 JavaScript 版本
└── dist/                  # 构建产物
```

## 🛠️ 快速开始

### 前置要求

- Node.js >= 18
- npm 或 yarn 或 pnpm

### 运行项目

#### 1. React 版本

```bash
cd examples/React
npm install
npm run dev
```

访问 http://localhost:5173

#### 2. Vue 版本

```bash
cd examples/Vue
npm install
npm run dev
```

访问 http://localhost:5173

#### 3. Angular 版本

```bash
cd examples/Angular
npm install
npm start
```

访问 http://localhost:4200

#### 4. Vanilla JS 版本

```bash
cd examples/Vanilla JS
npm install
npm run dev
```

## 📊 框架对比

| 特性 | React | Vue | Angular | Vanilla JS |
|------|-------|-----|---------|------------|
| 学习曲线 | 中等 | 平缓 | 陡峭 | 简单 |
| 生态系统 | 丰富 | 丰富 | 完善 | 无依赖 |
| 类型安全 | TypeScript | 可选 | TypeScript | 无 |
| 性能 | 优秀 | 优秀 | 良好 | 最佳 |
| 适用场景 | 中大型应用 | 中小型应用 | 企业级应用 | 简单项目 |

## 🎯 核心实现

### React 版本特点

- 使用 React 19 最新特性
- 函数组件 + Hooks
- TypeScript 类型安全
- 组件化设计

### Vue 版本特点

- Vue 3 Composition API
- 响应式数据绑定
- 单文件组件 (SFC)
- 简洁的模板语法

### Angular 版本特点

- 完整的 MVC 框架
- 依赖注入
- RxJS 响应式编程
- 模块化架构

### Vanilla JS 版本特点

- 无框架依赖
- ES6+ 现代语法
- 直接操作 DOM
- 最小化包体积

## 📈 性能优化

- 使用 Vite 构建工具实现快速冷启动
- 生产构建代码压缩和 Tree Shaking
- 组件懒加载
- 本地存储优化

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👤 作者

[qingchuan73](https://github.com/qingchuan73)

---

**如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！**