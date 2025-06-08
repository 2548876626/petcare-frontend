<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import api from '@/api'

const router = useRouter()

// 表单数据
const registerForm = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  role: 'PET_OWNER' // 默认为宠物主人
})

// 表单校验规则
const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 20, message: '用户名长度在2到20个字符之间', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度至少为6个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule: any, value: string, callback: Function) => {
        if (value !== registerForm.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  phone: [
    { required: false, message: '请输入手机号码', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
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

    // 准备提交的数据（不包含确认密码字段）
    const { confirmPassword, ...submitData } = registerForm

    // 发送注册请求
    const response = await api.post('/api/auth/register', submitData)

    // 注册成功
    ElMessage({
      type: 'success',
      message: '注册成功！即将跳转到登录页面'
    })

    // 延时跳转到登录页
    setTimeout(() => {
      router.push('/login')
    }, 1500)
  } catch (error: any) {
    // 注册失败
    if (error.response) {
      // 服务器返回错误
      ElMessage({
        type: 'error',
        message: error.response.data.message || '注册失败，请稍后再试'
      })
    } else if (error.message) {
      // 表单验证错误
      ElMessage({
        type: 'warning',
        message: error.message
      })
    } else {
      // 其他错误
      ElMessage({
        type: 'error',
        message: '注册失败，请检查网络连接'
      })
    }
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

// 返回登录页
const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="register-container">
    <div class="register-card">
      <div class="register-header">
        <h2>用户注册</h2>
        <p>加入宠爱社区，享受优质的宠物托管服务</p>
      </div>

      <el-form
        ref="formRef"
        :model="registerForm"
        :rules="rules"
        label-position="top"
        class="register-form"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email" type="email" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="registerForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            v-model="registerForm.confirmPassword"
            type="password"
            placeholder="请再次输入密码"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input v-model="registerForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item label="用户类型" prop="role">
          <el-radio-group v-model="registerForm.role">
            <el-radio label="PET_OWNER">宠物主人</el-radio>
            <el-radio label="SERVICE_PROVIDER">服务提供者</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            class="submit-btn"
            @click="submitForm"
          >
            注册
          </el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>

      <div class="login-link">
        已有账号？ <a @click="goToLogin">立即登录</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f7fa;
}

.register-card {
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.register-header {
  text-align: center;
  margin-bottom: 30px;
}

.register-header h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.register-header p {
  color: #666;
  font-size: 14px;
}

.register-form {
  margin-bottom: 20px;
}

.submit-btn {
  width: 100%;
  margin-bottom: 10px;
}

.login-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #409EFF;
  cursor: pointer;
}

@media (max-width: 768px) {
  .register-card {
    padding: 20px;
  }
}
</style> 