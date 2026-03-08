# Vercel 部署指南

## 方式一：自动部署（推荐）

### 步骤 1：关联 GitHub 仓库
1. 访问 [Vercel 官网](https://vercel.com/)，使用 GitHub 账号登录
2. 点击 "Add New..." → "Project"
3. 选择你的 `todoList` 仓库
4. 点击 "Import"

### 步骤 2：配置项目设置
在项目配置页面，填写以下信息：

- **Project Name**: 自定义项目名称（如 `todolist-demo`）
- **Root Directory**: 保持默认（不需要填写）
- **Framework Preset**: 选择 `Other`
- **Build Command**: 
```bash
npm run build:all
```
- **Output Directory**: 
```bash
dist
```
- **Install Command**: 
```bash
npm install
```

### 步骤 3：配置环境变量（可选）
如果需要，可以添加环境变量：
- `NODE_VERSION`: 20.x

### 步骤 4：开始部署
点击 "Deploy" 按钮，等待部署完成。

部署成功后，Vercel 会给你分配一个域名，如 `https://todolist-demo.vercel.app`

---

## 方式二：使用 Vercel CLI 部署

### 步骤 1：安装 Vercel CLI
```bash
npm install -g vercel
```

### 步骤 2：登录 Vercel 账号
```bash
vercel login
```
按照提示完成登录。

### 步骤 3：部署项目
在项目根目录执行：
```bash
vercel
```
按照提示回答问题：
- Which scope do you want to deploy to? 选择你的账号
- Link to existing project? `n`
- What's your project's name? 输入项目名称
- In which directory is your code located? `./`
- Want to modify these settings? `y`
  - Build Command: `npm run build:all`
  - Output Directory: `dist`
  - Development Command: 留空

### 步骤 4：生产环境部署
```bash
vercel --prod
```

---

## 配置重写规则（可选）
如果需要解决路由刷新问题，可以在项目根目录创建 `vercel.json` 文件：
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

---

## 部署后验证
部署完成后，访问你的 Vercel 域名：
- 首页：`https://your-domain.vercel.app/`
- Vue 版本：`https://your-domain.vercel.app/vue/`
- React 版本：`https://your-domain.vercel.app/react/`
- Angular 版本：`https://your-domain.vercel.app/angular/browser/`
- Vanilla 版本：`https://your-domain.vercel.app/vanilla/`

---

## 自动部署
配置完成后，每次推送到 GitHub 的 main 分支，Vercel 都会自动触发部署，非常方便。

## 优势
- ✅ 全球 CDN 加速，访问速度快
- ✅ 自动 SSL 证书，支持 HTTPS
- ✅ 自动部署，推送代码即更新
- ✅ 免费版足够个人使用
- ✅ 支持自定义域名