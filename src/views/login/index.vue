<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import supabase from '@/lib/supabaseClient'

const router = useRouter()
const route = useRoute()

// 表单数据
const loginForm = reactive({
  email: '',
  password: ''
})

// 表单校验规则
const rules = {
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

// 表单引用
const formRef = ref()

// 提交状态
const loading = ref(false)

// 提交表单
const submitForm = async () => {
  if (!formRef.value) return

  try {
    // 表单验证
    await formRef.value.validate()
    
    // 设置加载状态
    loading.value = true

    // 使用Supabase登录
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password
    })

    if (error) {
      throw error
    }

    // 登录成功
    ElMessage({
      type: 'success',
      message: '登录成功！'
    })
    
    // 重定向到之前想要访问的页面或首页
    const redirectPath = route.query.redirect ? route.query.redirect.toString() : '/'
    router.push(redirectPath)
  } catch (error: any) {
    // 登录失败
    ElMessage({
      type: 'error',
      message: error.message || '登录失败，请检查邮箱和密码'
    })
  } finally {
    // 无论成功失败，都取消加载状态
    loading.value = false
  }
}

// 重置表单
const resetForm = () => {
  if (formRef.value) {
    formRef.value.resetFields()
  }
}

// 前往注册页面
const goToRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h2>用户登录</h2>
        <p>欢迎回到宠爱社区</p>
      </div>

      <el-form
        ref="formRef"
        :model="loginForm"
        :rules="rules"
        label-position="top"
        class="login-form"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="loginForm.email" type="email" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>

        <div class="forgot-password">
          <a href="#">忘记密码？</a>
        </div>

        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            class="submit-btn"
            @click="submitForm"
          >
            登录
          </el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>

      <div class="register-link">
        还没有账号？ <a @click="goToRegister">立即注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f7fa;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.login-header p {
  color: #666;
  font-size: 14px;
}

.login-form {
  margin-bottom: 20px;
}

.forgot-password {
  text-align: right;
  margin-bottom: 20px;
}

.forgot-password a {
  color: #409EFF;
  font-size: 14px;
  text-decoration: none;
}

.submit-btn {
  width: 100%;
  margin-bottom: 10px;
}

.register-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.register-link a {
  color: #409EFF;
  cursor: pointer;
}

@media (max-width: 768px) {
  .login-card {
    padding: 20px;
  }
}
</style> 