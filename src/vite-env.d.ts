/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // 在这里添加更多你想在前端使用的环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}