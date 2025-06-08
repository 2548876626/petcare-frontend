<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import supabase from '@/lib/supabaseClient'

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
    const { confirmPassword, ...userData } = registerForm

    // 使用Supabase注册用户
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: {
          name: userData.name,
          phone: userData.phone,
          role: userData.role
        }
      }
    })

    if (error) {
      throw error
    }

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
    ElMessage({
      type: 'error',
      message: error.message || '注册失败，请稍后再试'
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