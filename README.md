# 宠爱社区前端项目

这是宠爱社区（PetCare Community）的前端项目，一个社区化宠物托管服务平台。

## 技术栈

- Vue 3 (使用 Composition API, `<script setup>`)
- TypeScript
- Pinia (状态管理)
- Vue Router (路由)
- Element Plus (UI库)
- Axios (HTTP请求)
- Vite (构建工具)

## 开发环境设置

### 前提条件

- Node.js (v16+)
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 部署

该项目配置为可以直接部署到Netlify。只需将仓库连接到Netlify，它将自动检测并使用项目根目录下的`netlify.toml`配置。

### Netlify部署步骤

1. 在[Netlify](https://app.netlify.com/)注册账号并登录
2. 点击"New site from Git"
3. 选择你的Git提供商(GitHub, GitLab等)
4. 选择此项目的仓库
5. 构建设置将自动从`netlify.toml`中获取
6. 点击"Deploy site"

## 项目结构

```
petcare-frontend/
├── public/            # 静态资源
├── src/
│   ├── api/           # API请求
│   ├── assets/        # 项目资源文件
│   ├── components/    # 可复用组件
│   ├── hooks/         # 自定义hooks
│   ├── router/        # 路由配置
│   ├── store/         # Pinia状态管理
│   ├── utils/         # 工具函数
│   ├── views/         # 页面视图
│   ├── App.vue        # 根组件
│   └── main.ts        # 应用入口
├── index.html         # HTML模板
├── tsconfig.json      # TypeScript配置
├── vite.config.ts     # Vite配置
└── netlify.toml       # Netlify部署配置
```

## 功能

- 用户认证和授权
- 宠物托管服务浏览和预订
- 宠物信息管理
- 服务提供者管理
- 实时消息通知
- 评价和评分系统 