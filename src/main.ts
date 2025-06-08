import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 导入Element Plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建Pinia状态管理实例
const pinia = createPinia()

// 创建Vue应用实例
const app = createApp(App)

// 全局注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 使用插件
app.use(ElementPlus)
app.use(pinia)
app.use(router)

// 挂载应用
app.mount('#app') 