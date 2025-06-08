import { createClient } from '@supabase/supabase-js'

// 要获取这些值，请登录到Supabase仪表板：
// 1. 访问 https://app.supabase.io/ 并登录您的账户
// 2. 选择您的项目
// 3. 在项目仪表板中，点击左侧菜单的"设置"图标
// 4. 在"API"部分，您将找到您的"Project URL"和"anon"/"public" API密钥

// Supabase URL: 从Supabase项目设置 > API > Project URL复制
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''

// Supabase匿名密钥: 从Supabase项目设置 > API > anon/public密钥复制
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// 创建Supabase客户端实例
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase 