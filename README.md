# 宠爱社区前端 (PetCare Frontend)

宠爱社区（PetCare Community）前端应用，提供宠物托管平台的Web界面。

## 技术栈

- Vue 3
- TypeScript
- Vue Router
- Pinia
- Element Plus
- Vite

## 本地开发

### 前提条件

- Node.js (v16+)
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 配置环境变量

1. 复制环境变量示例文件
```bash
cp .env.example .env.development
```

2. 编辑 `.env.development` 文件，配置API地址：
```
VITE_API_BASE_URL=http://localhost:8080
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

## 生产部署 (Netlify)

### 部署步骤

1. 在 [Netlify](https://www.netlify.com/) 上创建一个账户（如果你还没有）
2. 使用GitHub账户登录Netlify
3. 点击"New site from Git"按钮
4. 选择GitHub作为Git提供商
5. 授权Netlify访问你的GitHub仓库
6. 选择你的宠爱社区前端仓库
7. 配置以下设置:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Advanced build settings**: 添加环境变量 `VITE_API_BASE_URL` 并设置为你的Render后端URL

### 环境变量配置

在Netlify的站点设置 > Build & deploy > Environment > Environment variables 中，添加以下环境变量:

- `VITE_API_BASE_URL`: 你的Render后端URL，例如`https://petcare-api.onrender.com`

### 自动部署

配置好后，每当你推送新代码到GitHub仓库的主分支时，Netlify将自动构建和部署你的应用。

### 配置自定义域名 (可选)

1. 在Netlify控制面板中，进入你的站点设置
2. 点击"Domain settings"
3. 点击"Add custom domain"
4. 按照指引配置你的自定义域名

## 功能特性

- 响应式设计，适配各种屏幕尺寸
- 用户注册和登录
- 宠物信息管理
- 托管服务浏览和预约
- 服务提供者管理面板
- 评价和反馈系统

## 项目结构

```
src/
├── api/          # API请求封装
├── assets/       # 静态资源
├── components/   # 通用组件
├── composables/  # 组合式函数
├── layouts/      # 页面布局
├── router/       # 路由配置
├── stores/       # 状态管理
├── styles/       # 全局样式
├── types/        # TypeScript类型定义
├── utils/        # 工具函数
└── views/        # 页面组件
```

## 浏览器兼容性

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新) 