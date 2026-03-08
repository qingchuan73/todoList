# TodoList - 多框架对比项目

[![GitHub stars](https://img.shields.io/github/stars/qingchuan73/todoList?style=social)](https://github.com/qingchuan73/todoList)
[![GitHub license](https://img.shields.io/github/license/qingchuan73/todoList)](https://github.com/qingchuan73/todoList/blob/main/LICENSE)
[![Vercel Status](https://img.shields.io/badge/deploy-vercel-success)](https://todo-list-qingchuan73.vercel.app/)
[![GitHub Pages](https://img.shields.io/badge/deploy-github--pages-blue)](https://qingchuan73.github.io/todoList/)

## 📖 项目简介

基于 [TodoMVC](https://github.com/tastejs/todomvc) 规范，使用 **React、Vue、Angular、Vanilla JS** 四种主流技术栈实现的待办事项应用对比展示项目。通过完全一致的功能需求，直观呈现不同框架的语法特点、开发模式和性能差异，帮助开发者快速选型。

> 🌐 **在线演示**：[Vercel 部署](https://todo-list-qingchuan73.vercel.app/) | [GitHub Pages](https://qingchuan73.github.io/todoList/)

## 🚀 技术栈

| 框架 | 版本 | 构建工具 | 语言 | 核心特性 |
|------|------|----------|------|----------|
| React | 19.1.1 | Vite 7 | TypeScript | Hooks、函数式组件、虚拟DOM |
| Vue | 3.5.21 | Vite 7 | JavaScript | Composition API、响应式系统、单文件组件 |
| Angular | 20.3.0 | Angular CLI | TypeScript | 依赖注入、RxJS、模块化架构、双向绑定 |
| Vanilla JS | ES6+ | Webpack | JavaScript | 原生DOM操作、无框架依赖、最小体积 |

## ✨ 功能特性

所有版本均实现完整的 TodoMVC 功能：

- ✅ 添加/删除任务
- ✅ 标记完成/未完成状态
- ✅ 任务筛选（全部/活跃/已完成）
- ✅ 一键清除已完成任务
- ✅ localStorage 数据持久化
- ✅ 移动端响应式布局
- ✅ 平滑的交互动画效果
- ✅ 统一的UI设计风格

## 📁 项目结构

```
todoList/
├── index.html              # 项目主页（框架选择入口）
├── assets/                 # 公共静态资源
│   ├── img/               # 框架Logo、图片资源
│   └── styles/            # 全局样式文件
├── examples/              # 各框架独立实现
│   ├── React/             # React + TypeScript 版本
│   ├── Vue/               # Vue 3 版本
│   ├── Angular/           # Angular + TypeScript 版本
│   └── Vanilla/           # 原生JavaScript版本
├── .github/workflows/     # GitHub Actions 自动部署配置
├── vercel.json            # Vercel 部署配置
└── dist/                  # 生产构建产物
```

## 🛠️ 本地开发

### 前置要求
- Node.js >= 18.x
- npm / yarn / pnpm

### 一键安装所有依赖
```bash
npm run install:all
```

### 运行单个框架版本
```bash
# React 版本 (http://localhost:5173)
npm run dev:react

# Vue 版本 (http://localhost:5173)
npm run dev:vue

# Angular 版本 (http://localhost:4200)
npm run dev:angular

# Vanilla JS 版本 (http://localhost:8080)
npm run dev:vanilla
```

### 生产构建
```bash
# 构建所有版本，产物输出到 dist 目录
npm run build:all
```

## 📊 框架对比分析

| 维度 | React | Vue | Angular | Vanilla JS |
|------|-------|-----|---------|------------|
| 学习曲线 | ⭐⭐⭐ 中等 | ⭐⭐ 平缓 | ⭐⭐⭐⭐⭐ 陡峭 | ⭐ 简单 |
| 生态系统 | ⭐⭐⭐⭐⭐ 极丰富 | ⭐⭐⭐⭐ 丰富 | ⭐⭐⭐⭐ 完善 | ⭐ 无依赖 |
| 类型安全 | ⭐⭐⭐⭐⭐ TypeScript | ⭐⭐⭐ 可选 | ⭐⭐⭐⭐⭐ TypeScript | ⭐ 无 |
| 运行性能 | ⭐⭐⭐⭐ 优秀 | ⭐⭐⭐⭐ 优秀 | ⭐⭐⭐ 良好 | ⭐⭐⭐⭐⭐ 最佳 |
| 包体积 | ~40KB | ~30KB | ~60KB | ~5KB |
| 适用场景 | 中大型应用、复杂交互 | 中小型应用、快速开发 | 企业级应用、团队协作 | 简单项目、性能极致需求 |

## 🎯 项目亮点（简历加分项）

### 技术广度
- 掌握4种主流前端技术栈的核心开发能力
- 理解不同框架的设计思想和适用场景
- 具备跨框架的问题排查和性能优化能力

### 工程化实践
- 多项目monorepo架构管理
- 完整的CI/CD自动化部署流程
- 支持双平台部署（GitHub Pages + Vercel）
- 统一的代码规范和构建配置

### 工程能力
- 严格遵循TodoMVC规范，功能完整性100%
- 所有版本功能对齐，UI/UX高度一致
- 性能优化实践：代码分割、Tree Shaking、懒加载
- 良好的代码组织和可维护性

## 🚀 部署指南

### 自动部署
项目已配置GitHub Actions，推送代码到main分支自动部署到GitHub Pages。

### Vercel 部署
1. Fork本仓库
2. 在Vercel控制台导入项目
3. 直接点击Deploy，无需额外配置（已配置vercel.json）

### 本地部署
```bash
npm run build:all
npx serve dist
```

## 🤝 贡献指南

欢迎提交Issue和PR！如果你想添加其他框架的实现（如Svelte、SolidJS等），请遵循以下规范：
1. 严格遵循TodoMVC功能规范
2. UI风格与现有版本保持一致
3. 添加对应的构建脚本到package.json

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👤 关于作者

**qingchuan73**
- GitHub: [@qingchuan73](https://github.com/qingchuan73)
- 前端开发者，专注于Web技术栈和工程化实践

---

**如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！**