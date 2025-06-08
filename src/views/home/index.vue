<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

const router = useRouter()
const userStore = useUserStore()

// 轮播图数据
const carouselItems = ref([
  {
    id: 1,
    title: '专业宠物托管服务',
    description: '我们提供全方位的宠物照顾，让您的爱宠得到最好的关爱',
    image: 'https://img.freepik.com/free-photo/cute-dog-with-his-owner-studio_23-2149016018.jpg'
  },
  {
    id: 2,
    title: '安全可靠的社区环境',
    description: '严格审核托管家庭，确保您的宠物在安全的环境中得到照顾',
    image: 'https://img.freepik.com/free-photo/female-vet-with-cat-dog-standing-against-white-wall_23-2148028126.jpg'
  },
  {
    id: 3,
    title: '专业的医疗支持',
    description: '与当地知名宠物医院合作，提供紧急医疗响应服务',
    image: 'https://img.freepik.com/free-photo/vet-examining-puppy-table-veterinary-clinic_23-2148273041.jpg'
  }
])

// 服务项目
const services = ref([
  {
    id: 1,
    title: '日间托管',
    icon: 'el-icon-sunny',
    description: '适合主人白天外出工作的宠物，提供日间照料和活动'
  },
  {
    id: 2,
    title: '过夜托管',
    icon: 'el-icon-moon',
    description: '为需要过夜照顾的宠物提供温馨舒适的住宿环境'
  },
  {
    id: 3,
    title: '宠物健康',
    icon: 'el-icon-first-aid-kit',
    description: '提供基础健康检查，记录宠物健康状况和饮食情况'
  },
  {
    id: 4,
    title: '紧急医疗',
    icon: 'el-icon-warning',
    description: '与专业宠物医院合作，提供24小时紧急医疗响应'
  }
])

// 统计数据
const statistics = ref({
  petOwners: '5,000+',
  serviceProviders: '2,000+',
  successfulBookings: '10,000+',
  happyPets: '8,000+'
})

// 跳转到登录页
const goToLogin = () => {
  router.push('/login')
}

// 跳转到注册页
const goToRegister = () => {
  router.push('/register')
}

// 检查用户是否已登录，并根据角色跳转到对应页面
const goToDashboard = () => {
  if (!userStore.isLoggedIn) {
    router.push('/login')
    return
  }
  
  if (userStore.isPetOwner) {
    router.push('/pet-owner/dashboard')
  } else if (userStore.isServiceProvider) {
    router.push('/service-provider/dashboard')
  } else if (userStore.isAdmin) {
    router.push('/admin/dashboard')
  }
}

onMounted(() => {
  // 页面加载时可以执行一些初始化操作
})
</script>

<template>
  <div class="home-container">
    <!-- 头部导航 -->
    <header class="header">
      <div class="logo">
        <h1>宠爱社区</h1>
      </div>
      <nav class="nav">
        <el-button type="text">首页</el-button>
        <el-button type="text">服务介绍</el-button>
        <el-button type="text">关于我们</el-button>
        <el-button type="text">帮助中心</el-button>
      </nav>
      <div class="auth-buttons">
        <el-button v-if="!userStore.isLoggedIn" @click="goToLogin">登录</el-button>
        <el-button v-if="!userStore.isLoggedIn" type="primary" @click="goToRegister">注册</el-button>
        <el-button v-else type="primary" @click="goToDashboard">进入控制台</el-button>
      </div>
    </header>

    <!-- 轮播图 -->
    <section class="banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in carouselItems" :key="item.id">
          <div class="carousel-content" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="carousel-text">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <el-button type="primary" size="large" @click="goToRegister">立即加入</el-button>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>

    <!-- 服务介绍 -->
    <section class="services">
      <h2 class="section-title">我们的服务</h2>
      <div class="service-cards">
        <el-card v-for="service in services" :key="service.id" class="service-card">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </el-card>
      </div>
    </section>

    <!-- 统计数据 -->
    <section class="statistics">
      <div class="stat-item">
        <h3>{{ statistics.petOwners }}</h3>
        <p>宠物主人</p>
      </div>
      <div class="stat-item">
        <h3>{{ statistics.serviceProviders }}</h3>
        <p>服务提供者</p>
      </div>
      <div class="stat-item">
        <h3>{{ statistics.successfulBookings }}</h3>
        <p>成功预约</p>
      </div>
      <div class="stat-item">
        <h3>{{ statistics.happyPets }}</h3>
        <p>快乐宠物</p>
      </div>
    </section>

    <!-- 号召行动 -->
    <section class="cta">
      <div class="cta-content">
        <h2>加入宠爱社区，让爱宠得到更好的照顾</h2>
        <p>无论您是宠物主人还是希望提供托管服务，我们都欢迎您的加入</p>
        <div class="cta-buttons">
          <el-button type="primary" size="large" @click="goToRegister">注册账号</el-button>
          <el-button size="large" @click="goToLogin">立即登录</el-button>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>宠爱社区</h3>
          <p>连接宠物主人与托管服务提供者的平台</p>
        </div>
        <div class="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li><el-button type="text">首页</el-button></li>
            <li><el-button type="text">服务介绍</el-button></li>
            <li><el-button type="text">关于我们</el-button></li>
            <li><el-button type="text">帮助中心</el-button></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>联系我们</h3>
          <p>邮箱：contact@petcare.com</p>
          <p>电话：400-123-4567</p>
        </div>
      </div>
      <div class="copyright">
        <p>© 2025 宠爱社区 版权所有</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  .logo h1 {
    color: #409EFF;
    margin: 0;
    font-size: 24px;
  }

  .nav {
    display: flex;
    gap: 20px;
  }

  .auth-buttons {
    display: flex;
    gap: 10px;
  }
}

.banner {
  width: 100%;

  .carousel-content {
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .carousel-text {
      position: relative;
      z-index: 1;
      color: #fff;
      padding: 0 100px;
      max-width: 600px;

      h2 {
        font-size: 36px;
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
  }
}

.section-title {
  text-align: center;
  font-size: 32px;
  margin: 50px 0 30px;
  color: #333;
}

.services {
  padding: 50px 100px;
  background-color: #f8f9fa;

  .service-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;

    .service-card {
      flex: 1;
      min-width: 250px;
      text-align: center;
      padding: 30px 20px;
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-10px);
      }

      .service-icon {
        font-size: 40px;
        color: #409EFF;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #333;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }
  }
}

.statistics {
  display: flex;
  justify-content: space-around;
  padding: 80px 50px;
  background-color: #409EFF;
  color: #fff;

  .stat-item {
    text-align: center;

    h3 {
      font-size: 36px;
      margin-bottom: 10px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
    }
  }
}

.cta {
  padding: 80px 50px;
  background-color: #f8f9fa;
  text-align: center;

  .cta-content {
    max-width: 800px;
    margin: 0 auto;

    h2 {
      font-size: 32px;
      margin-bottom: 20px;
      color: #333;
    }

    p {
      font-size: 18px;
      margin-bottom: 30px;
      color: #666;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  }
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 50px 100px 20px;

  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .footer-section {
      flex: 1;
      min-width: 250px;
      margin-bottom: 30px;

      h3 {
        font-size: 20px;
        margin-bottom: 20px;
        position: relative;
        padding-bottom: 10px;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background-color: #409EFF;
        }
      }

      p {
        margin-bottom: 10px;
        color: #ccc;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 10px;
        }
      }
    }
  }

  .copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #444;
    color: #999;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  .banner .carousel-content .carousel-text {
    padding: 0 30px;
  }

  .services {
    padding: 30px;
  }

  .statistics {
    flex-direction: column;
    gap: 30px;
  }

  .cta {
    padding: 50px 30px;
  }

  .footer {
    padding: 30px;

    .footer-content {
      flex-direction: column;
    }
  }
}
</style> 