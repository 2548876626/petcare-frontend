<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('1')

// 是否显示登录/注册抽屉
const loginDrawer = ref(false)
const registerDrawer = ref(false)

// 导航菜单处理
const handleSelect = (key: string) => {
  switch(key) {
    case '1': // 首页
      router.push('/')
      break
    case '2': // 服务列表
      router.push('/services')
      break
    case '3': // 关于我们
      router.push('/about')
      break
    case '4': // 联系我们
      router.push('/contact')
      break
    default:
      break
  }
}

// 显示登录抽屉
const showLogin = () => {
  loginDrawer.value = true
}

// 显示注册抽屉
const showRegister = () => {
  registerDrawer.value = true
}
</script>

<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="app-header">
      <div class="header-container">
        <div class="logo">
          <router-link to="/">
            <img src="https://img.icons8.com/doodle/48/000000/pet--v1.png" alt="宠爱社区Logo" />
            <span>宠爱社区</span>
          </router-link>
        </div>
        
        <el-menu
          :default-active="activeIndex"
          class="main-menu"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          text-color="#333"
          active-text-color="#409EFF"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">服务列表</el-menu-item>
          <el-menu-item index="3">关于我们</el-menu-item>
          <el-menu-item index="4">联系我们</el-menu-item>
        </el-menu>
        
        <div class="auth-buttons">
          <el-button @click="router.push('/login')">登录</el-button>
          <el-button type="primary" @click="router.push('/register')">注册</el-button>
        </div>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="app-main">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>宠爱社区</h3>
            <p>连接宠物主人与托管服务提供者的平台</p>
          </div>
          <div class="footer-section">
            <h3>快速链接</h3>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/services">服务列表</router-link></li>
              <li><router-link to="/about">关于我们</router-link></li>
              <li><router-link to="/contact">联系我们</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>联系我们</h3>
            <p>邮箱：contact@petcare.com</p>
            <p>电话：400-123-4567</p>
          </div>
        </div>
        <div class="copyright">
          <p>© {{ new Date().getFullYear() }} 宠爱社区 版权所有</p>
        </div>
      </div>
    </footer>

    <!-- 登录抽屉 -->
    <el-drawer v-model="loginDrawer" title="登录" direction="rtl">
      <div class="drawer-content">
        <el-form>
          <el-form-item label="邮箱">
            <el-input placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="loginDrawer = false; router.push('/login')">登录</el-button>
          </el-form-item>
          <div class="form-footer">
            <p>还没有账号？ <a @click="loginDrawer = false; registerDrawer = true">立即注册</a></p>
          </div>
        </el-form>
      </div>
    </el-drawer>

    <!-- 注册抽屉 -->
    <el-drawer v-model="registerDrawer" title="注册" direction="rtl">
      <div class="drawer-content">
        <el-form>
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="用户类型">
            <el-radio-group>
              <el-radio label="pet-owner">宠物主人</el-radio>
              <el-radio label="service-provider">服务提供者</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="registerDrawer = false; router.push('/register')">注册</el-button>
          </el-form-item>
          <div class="form-footer">
            <p>已有账号？ <a @click="registerDrawer = false; loginDrawer = true">立即登录</a></p>
          </div>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<style lang="scss">
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

/* 应用容器 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 头部导航 */
.app-header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
}

.logo img {
  margin-right: 10px;
  height: 40px;
}

.main-menu {
  flex: 1;
  display: flex;
  justify-content: center;
  border-bottom: none;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

/* 主内容区 */
.app-main {
  flex: 1;
}

/* 页脚 */
.app-footer {
  background-color: #333;
  color: #fff;
  padding: 50px 0 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: #409EFF;
}

.footer-section p {
  margin-bottom: 10px;
  color: #ccc;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #ccc;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #fff;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
  color: #999;
}

/* 登录/注册抽屉 */
.drawer-content {
  padding: 20px;
}

.form-footer {
  text-align: center;
  margin-top: 20px;
}

.form-footer a {
  color: #409EFF;
  cursor: pointer;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }
  
  .logo {
    margin-bottom: 15px;
  }
  
  .main-menu {
    margin-bottom: 15px;
    width: 100%;
  }
  
  .auth-buttons {
    width: 100%;
    justify-content: center;
  }
  
  .footer-content {
    flex-direction: column;
  }
}
</style> 