<script setup lang="ts">
import { ref } from 'vue'

// 轮播图数据
const carouselItems = ref([
  {
    id: 1,
    title: '专业宠物托管服务',
    subtitle: '您最贴心的社区宠物管家',
    description: '我们提供全方位的宠物照顾，让您的爱宠得到最好的关爱',
    image: 'https://img.freepik.com/free-photo/cute-dog-with-his-owner-studio_23-2149016018.jpg',
    buttonText: '立即体验'
  },
  {
    id: 2,
    title: '安全可靠的社区环境',
    subtitle: '严格审核每一位托管家庭',
    description: '确保您的宠物在安全的环境中得到照顾',
    image: 'https://img.freepik.com/free-photo/female-vet-with-cat-dog-standing-against-white-wall_23-2148028126.jpg',
    buttonText: '了解更多'
  },
  {
    id: 3,
    title: '专业的医疗支持',
    subtitle: '24小时在线兽医服务',
    description: '与当地知名宠物医院合作，提供紧急医疗响应服务',
    image: 'https://img.freepik.com/free-photo/vet-examining-puppy-table-veterinary-clinic_23-2148273041.jpg',
    buttonText: '查看详情'
  }
])

// 服务特色数据
const serviceHighlights = ref([
  {
    id: 1,
    title: '家庭式寄养',
    icon: 'House',
    description: '在真实家庭环境中寄养宠物，让它们感受家的温暖，避免笼养带来的压力',
    image: 'https://img.freepik.com/free-photo/woman-playing-with-her-dog-living-room_23-2148273124.jpg'
  },
  {
    id: 2,
    title: '专业宠物美容',
    icon: 'Brush',
    description: '由专业美容师提供洗澡、修剪、造型等服务，让您的爱宠时刻保持最佳状态',
    image: 'https://img.freepik.com/free-photo/side-view-man-grooming-dog_23-2149132312.jpg'
  },
  {
    id: 3,
    title: '行为训练课程',
    icon: 'Guide',
    description: '由专业训犬师提供的个性化训练课程，解决宠物行为问题，培养良好习惯',
    image: 'https://img.freepik.com/free-photo/owner-teaching-his-dog-give-high-five_23-2148523872.jpg'
  },
  {
    id: 4,
    title: '日间照料服务',
    icon: 'Clock',
    description: '工作日白天为宠物提供照料、游戏和社交的服务，解决主人工作忙碌的烦恼',
    image: 'https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64793.jpg'
  }
])

// 平台优势/数据统计
const platformStats = ref([
  {
    id: 1,
    value: '100+',
    label: '认证托管家庭',
    icon: 'HomeFilled'
  },
  {
    id: 2,
    value: '24h',
    label: '在线兽医支持',
    icon: 'FirstAidKit'
  },
  {
    id: 3,
    value: '98%',
    label: '用户好评率',
    icon: 'Star'
  },
  {
    id: 4,
    value: '5000+',
    label: '成功托管案例',
    icon: 'Checked'
  }
])

// 推荐服务提供者
const recommendedProviders = ref([
  {
    id: 1,
    name: '王小明',
    title: '专业宠物美容师',
    avatar: 'https://img.freepik.com/free-photo/portrait-young-happy-male-adult_23-2148026409.jpg',
    rating: 4.9,
    services: ['宠物美容', '宠物洗澡'],
    reviews: 128
  },
  {
    id: 2,
    name: '李丽华',
    title: '专业犬类行为训练师',
    avatar: 'https://img.freepik.com/free-photo/happy-young-woman-smiling-camera_23-2147893540.jpg',
    rating: 4.8,
    services: ['行为训练', '社交训练'],
    reviews: 96
  },
  {
    id: 3,
    name: '张建国',
    title: '资深宠物托管员',
    avatar: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19293.jpg',
    rating: 4.7,
    services: ['寄养服务', '日间照料'],
    reviews: 156
  }
])

// 用户评价
const testimonials = ref([
  {
    id: 1,
    name: '陈女士',
    avatar: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
    comment: '我的金毛在这里得到了很好的照顾，回来后明显更开心了！托管家定期发送照片和视频，让我完全放心。',
    rating: 5,
    date: '2023-05-15'
  },
  {
    id: 2,
    name: '刘先生',
    avatar: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
    comment: '服务很专业，训练师给了我很多实用的建议来改善我家泰迪的行为问题。一个月后，情况有了明显改善。',
    rating: 5,
    date: '2023-06-02'
  },
  {
    id: 3,
    name: '赵女士',
    avatar: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
    comment: '美容服务非常棒，我家猫咪被修剪得很漂亮，而且整个过程她看起来很放松。价格也很合理。',
    rating: 4,
    date: '2023-04-28'
  }
])

// 常见问题
const faqItems = ref([
  {
    id: 1,
    question: '如何选择合适的宠物托管服务？',
    answer: '您可以根据宠物的品种、年龄、性格和特殊需求来选择合适的托管服务。平台上的每位服务提供者都有详细的介绍和评价，您还可以与他们直接沟通，了解更多细节。'
  },
  {
    id: 2,
    question: '如何保证宠物在托管期间的安全？',
    answer: '所有服务提供者都经过严格的审核和培训。同时，平台提供24小时在线兽医支持和紧急响应服务。您还可以通过平台与托管人保持联系，随时了解宠物的状态。'
  },
  {
    id: 3,
    question: '预订流程是怎样的？',
    answer: '注册账号后，您可以浏览服务提供者的资料，选择合适的服务，并发送预订请求。服务提供者确认后，您需要完成支付以确认预订。服务结束后，您可以对服务进行评价。'
  },
  {
    id: 4,
    question: '如果遇到紧急情况怎么办？',
    answer: '托管期间如遇紧急情况，服务提供者会立即联系您，并在必要时联系平台提供的兽医服务。平台有专门的紧急响应团队，确保您的宠物得到及时的帮助。'
  }
])

// 搜索表单数据
const serviceType = ref('')
const serviceDate = ref('')
</script>

<template>
  <div class="home-page">
    <!-- 英雄区域/轮播图 -->
    <section class="hero-section">
      <el-carousel :interval="5000" type="card" height="500px">
        <el-carousel-item v-for="item in carouselItems" :key="item.id">
          <div class="carousel-content" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="carousel-overlay"></div>
            <div class="carousel-text">
              <h1>{{ item.title }}</h1>
              <h2>{{ item.subtitle }}</h2>
              <p>{{ item.description }}</p>
              <el-button type="primary" size="large" class="hero-button">{{ item.buttonText }}</el-button>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

      <!-- 搜索框 -->
      <div class="search-container">
        <el-card class="search-card">
          <h3>立即寻找宠物托管服务</h3>
          <el-form>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item>
                  <el-select v-model="serviceType" placeholder="选择服务类型" class="search-select">
                    <el-option label="家庭寄养" value="boarding"></el-option>
                    <el-option label="日间照料" value="daycare"></el-option>
                    <el-option label="宠物美容" value="grooming"></el-option>
                    <el-option label="行为训练" value="training"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-date-picker
                    v-model="serviceDate"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    class="search-date"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-button type="primary" class="search-button">搜索服务</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </div>
    </section>

    <!-- 平台优势/数据统计 -->
    <section class="stats-section">
      <div class="section-container">
        <div class="section-header">
          <h2>为什么选择我们</h2>
          <p>宠爱社区致力于为每一位宠物主人提供最优质的服务</p>
        </div>
        <el-row :gutter="20">
          <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="stat in platformStats" :key="stat.id">
            <el-card class="stat-card">
              <div class="stat-icon">
                <el-icon :size="40" class="stat-icon-inner">
                  <component :is="stat.icon"></component>
                </el-icon>
              </div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 服务特色展示 -->
    <section class="services-section">
      <div class="section-container">
        <div class="section-header">
          <h2>我们的服务</h2>
          <p>专业、贴心的宠物托管服务，让您和爱宠都安心</p>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="service in serviceHighlights" :key="service.id">
            <el-card class="service-card" shadow="hover">
              <div class="service-image" :style="{ backgroundImage: `url(${service.image})` }"></div>
              <div class="service-content">
                <div class="service-icon">
                  <el-icon :size="24">
                    <component :is="service.icon"></component>
                  </el-icon>
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <el-button type="text" class="service-button">了解更多</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 推荐服务提供者 -->
    <section class="providers-section">
      <div class="section-container">
        <div class="section-header">
          <h2>推荐服务提供者</h2>
          <p>精挑细选的专业人士，为您的爱宠提供最贴心的服务</p>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" v-for="provider in recommendedProviders" :key="provider.id">
            <el-card class="provider-card" shadow="hover">
              <div class="provider-header">
                <el-avatar :size="80" :src="provider.avatar"></el-avatar>
                <div class="provider-info">
                  <h3>{{ provider.name }}</h3>
                  <p>{{ provider.title }}</p>
                  <div class="provider-rating">
                    <el-rate v-model="provider.rating" disabled show-score text-color="#ff9900"></el-rate>
                    <span>({{ provider.reviews }}条评价)</span>
                  </div>
                </div>
              </div>
              <div class="provider-services">
                <h4>提供服务</h4>
                <div class="service-tags">
                  <el-tag v-for="(service, index) in provider.services" :key="index" type="info" effect="plain" class="service-tag">
                    {{ service }}
                  </el-tag>
                </div>
              </div>
              <el-button type="primary" plain class="provider-button">联系TA</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="testimonials-section">
      <div class="section-container">
        <div class="section-header">
          <h2>用户评价</h2>
          <p>听听他们怎么说</p>
        </div>
        <el-row :gutter="30">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" v-for="testimonial in testimonials" :key="testimonial.id">
            <el-card class="testimonial-card" shadow="hover">
              <div class="testimonial-content">
                <div class="quote-mark">"</div>
                <p>{{ testimonial.comment }}</p>
              </div>
              <div class="testimonial-footer">
                <el-avatar :size="50" :src="testimonial.avatar"></el-avatar>
                <div class="testimonial-info">
                  <h4>{{ testimonial.name }}</h4>
                  <el-rate v-model="testimonial.rating" disabled></el-rate>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="faq-section">
      <div class="section-container">
        <div class="section-header">
          <h2>常见问题</h2>
          <p>解答您可能关心的问题</p>
        </div>
        <el-collapse accordion>
          <el-collapse-item v-for="faq in faqItems" :key="faq.id" :title="faq.question">
            <div class="faq-answer">{{ faq.answer }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>

    <!-- 行动号召 -->
    <section class="cta-section">
      <div class="cta-container">
        <h2>开始您的宠爱之旅</h2>
        <p>立即注册，为您的爱宠寻找最合适的服务</p>
        <div class="cta-buttons">
          <el-button type="primary" size="large">立即注册</el-button>
          <el-button size="large">了解更多</el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
}

/* 英雄区域/轮播图 */
.hero-section {
  position: relative;
  margin-bottom: 80px;
}

.carousel-content {
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
}

.carousel-text {
  position: relative;
  z-index: 10;
  color: white;
  padding: 0 60px;
  max-width: 600px;
}

.carousel-text h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.carousel-text h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 400;
}

.carousel-text p {
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.hero-button {
  padding: 12px 25px;
  font-size: 1.1rem;
}

/* 搜索框 */
.search-container {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 1000px;
  z-index: 20;
}

.search-card {
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.search-card h3 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  font-size: 1.3rem;
}

.search-select,
.search-date {
  width: 100%;
}

.search-button {
  width: 100%;
  padding: 12px 0;
}

/* 通用部分 */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* 平台优势/数据统计 */
.stats-section {
  background-color: #f8f9fa;
}

.stat-card {
  height: 100%;
  text-align: center;
  padding: 30px 20px;
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  margin-bottom: 15px;
  color: #409EFF;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #333;
}

.stat-label {
  color: #666;
  font-size: 1.1rem;
}

/* 服务特色展示 */
.service-card {
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-image {
  height: 180px;
  background-size: cover;
  background-position: center;
}

.service-content {
  padding: 20px;
  text-align: center;
}

.service-icon {
  margin-bottom: 15px;
  color: #409EFF;
}

.service-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.service-content p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.service-button {
  font-weight: 600;
}

/* 推荐服务提供者 */
.providers-section {
  background-color: #f8f9fa;
}

.provider-card {
  height: 100%;
  padding: 20px;
}

.provider-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.provider-info {
  margin-left: 20px;
}

.provider-info h3 {
  font-size: 1.3rem;
  margin: 0 0 5px 0;
  color: #333;
}

.provider-info p {
  color: #666;
  margin: 0 0 10px 0;
}

.provider-rating {
  display: flex;
  align-items: center;
}

.provider-rating span {
  margin-left: 10px;
  color: #999;
  font-size: 0.9rem;
}

.provider-services {
  margin-bottom: 20px;
}

.provider-services h4 {
  margin: 0 0 10px 0;
  color: #333;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.service-tag {
  margin-right: 5px;
}

.provider-button {
  width: 100%;
}

/* 用户评价 */
.testimonial-card {
  height: 100%;
  padding: 20px;
}

.testimonial-content {
  position: relative;
  padding: 0 10px 20px 10px;
}

.quote-mark {
  position: absolute;
  top: -20px;
  left: -10px;
  font-size: 4rem;
  color: #f0f0f0;
  font-family: serif;
  z-index: 0;
}

.testimonial-content p {
  position: relative;
  z-index: 1;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.testimonial-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.testimonial-info {
  margin-left: 15px;
}

.testimonial-info h4 {
  margin: 0 0 5px 0;
  color: #333;
}

/* 常见问题 */
.faq-section {
  background-color: white;
}

.faq-answer {
  color: #666;
  line-height: 1.6;
}

/* 行动号召 */
.cta-section {
  background-color: #409EFF;
  color: white;
  text-align: center;
  padding: 60px 20px;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-section h2 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .carousel-text h1 {
    font-size: 1.8rem;
  }
  
  .carousel-text h2 {
    font-size: 1.4rem;
  }
  
  .search-container {
    width: 95%;
    bottom: -80px;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 10px;
  }
  
  .section-container {
    padding: 40px 15px;
  }
  
  .stats-section .el-col,
  .services-section .el-col,
  .providers-section .el-col,
  .testimonials-section .el-col {
    margin-bottom: 20px;
  }
}
</style> 