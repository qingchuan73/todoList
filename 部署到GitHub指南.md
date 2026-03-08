# 部署到 GitHub Pages 指南

## 📋 前置准备

1. 确保已安装 Git
2. 已有 GitHub 账号
3. 项目代码已完成

---

## 🚀 步骤一：初始化 Git 仓库

```bash
# 在项目根目录执行
git init
```

---

## 🚀 步骤二：提交代码

```bash
# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: TodoList multi-framework project"
```

---

## 🚀 步骤三：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称填写：`todoList`（或你喜欢的名字）
3. 选择 Public 或 Private
4. **不要**勾选 "Initialize this repository with a README"
5. 点击 "Create repository"

---

## 🚀 步骤四：推送到 GitHub

```bash
# 关联远程仓库（替换为你的用户名）
git remote add origin https://github.com/qingchuan73/todoList.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

---

## 🚀 步骤五：构建所有框架版本

先构建所有框架，生成 dist 文件：

```bash
# 安装所有依赖
npm run install:all

# 构建所有版本
npm run build:all
```

或者手动分别构建：

```bash
# 构建 React
cd examples/React
npm install
npm run build
cd ../..

# 构建 Vue
cd examples/Vue
npm install
npm run build
cd ../..

# 构建 Angular
cd examples/Angular
npm install
npm run build
cd ../..

# 构建 Vanilla JS
cd examples/Vanilla
npm install
npm run build
cd ../..
```

---

## 🚀 步骤六：配置 GitHub Pages 部署

### 方法一：使用 gh-pages 工具（推荐）

创建部署脚本：

```bash
# 安装 gh-pages 工具
npm install -D gh-pages
```

在根目录 `package.json` 添加脚本：

```json
{
  "scripts": {
    "deploy": "gh-pages -d . -t true"
  }
}
```

然后运行：

```bash
npm run deploy
```

---

### 方法二：使用 GitHub Actions 自动部署（最佳实践）

创建 GitHub Actions 配置文件：<file_path>.github/workflows/deploy.yml</file_path>

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install React dependencies and build
        run: |
          cd examples/React
          npm install
          npm run build
          cd ../..

      - name: Install Vue dependencies and build
        run: |
          cd examples/Vue
          npm install
          npm run build
          cd ../..

      - name: Install Angular dependencies and build
        run: |
          cd examples/Angular
          npm install
          npm run build -- --base-href /todoList/
          cd ../..

      - name: Install Vanilla dependencies and build
        run: |
          cd examples/Vanilla
          npm install
          npm run build
          cd ../..

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "."

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🚀 步骤七：启用 GitHub Pages

1. 进入 GitHub 仓库
2. 点击 "Settings"
3. 左侧菜单选择 "Pages"
4. 在 "Build and deployment" 部分：
   - Source: 选择 "Deploy from a branch" 或 "GitHub Actions"
   - 如果使用 Actions，选择 "GitHub Actions"
5. 保存

---

## 📝 注意事项

### Angular 部署特别注意

Angular 需要配置 base-href：

```bash
# 在 Angular 项目中构建时添加
cd examples/Angular
npm run build -- --base-href "/todoList/"
```

或者修改 `angular.json`：

```json
{
  "projects": {
    "angular": {
      "architect": {
        "build": {
          "options": {
            "baseHref": "/todoList/"
          }
        }
      }
    }
  }
}
```

---

## 🎯 访问你的网站

部署成功后，访问：

```
https://qingchuan73.github.io/todoList/
```

---

## 🔧 常见问题

### Q: 页面显示 404？
A: 检查 base-href 配置是否正确

### Q: 样式或图片加载失败？
A: 确保使用相对路径，而不是绝对路径

### Q: 部署后页面空白？
A: 检查框架构建输出目录是否正确

---

## 📊 快速命令总结

```bash
# 1. 初始化 Git
git init
git add .
git commit -m "Initial commit"

# 2. 推送到 GitHub
git remote add origin https://github.com/qingchuan73/todoList.git
git branch -M main
git push -u origin main

# 3. 构建所有版本
npm run install:all
npm run build:all

# 4. 部署（使用 gh-pages）
npm install -D gh-pages
npm run deploy