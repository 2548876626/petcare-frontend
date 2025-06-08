#!/bin/bash

# 安装依赖
echo "安装依赖..."
npm install

# 创建.env文件
echo "创建环境变量文件..."
echo "VITE_SUPABASE_URL=$VITE_SUPABASE_URL" > .env
echo "VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY" >> .env

# 构建项目
echo "构建项目..."
npm run build

echo "构建完成！" 