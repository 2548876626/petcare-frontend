<template>
  <div class="not-found">
    <div class="content">
      <div class="image">
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="404 Not Found">
      </div>
      <h1>页面不存在</h1>
      <p>抱歉，您访问的页面不存在或已被移除。</p>
      <div class="actions">
        <el-button type="primary" @click="goHome">返回首页</el-button>
        <el-button @click="goBack">返回上一页</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 40px 20px;
}

.content {
  text-align: center;
  max-width: 600px;
}

.image {
  margin-bottom: 30px;
}

.image img {
  max-width: 100%;
  height: auto;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

@media (max-width: 768px) {
  .actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .actions button {
    width: 100%;
  }
}
</style> 