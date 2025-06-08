<script setup lang="ts">
import { ref } from 'vue'

// 模拟服务列表数据
const services = ref([
  {
    id: 1,
    title: '日间宠物看护',
    provider: '王小明',
    price: 150,
    rating: 4.8,
    reviewCount: 128,
    location: '北京市朝阳区',
    image: 'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-with-daylight_23-2148199626.jpg',
    tags: ['日间看护', '遛狗', '喂食']
  },
  {
    id: 2,
    title: '专业宠物美容',
    provider: '李丽华',
    price: 220,
    rating: 4.9,
    reviewCount: 96,
    location: '上海市静安区',
    image: 'https://img.freepik.com/free-photo/cute-groomed-puppy-dog-posing-with-hairbrush_23-2149319552.jpg',
    tags: ['美容', '洗澡', '剪毛']
  },
  {
    id: 3,
    title: '宠物寄养服务',
    provider: '张建国',
    price: 180,
    rating: 4.7,
    reviewCount: 156,
    location: '广州市天河区',
    image: 'https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64793.jpg',
    tags: ['过夜寄养', '长期托管', '遛狗']
  },
  {
    id: 4,
    title: '宠物行为训练',
    provider: '赵明',
    price: 280,
    rating: 4.6,
    reviewCount: 89,
    location: '深圳市南山区',
    image: 'https://img.freepik.com/free-photo/owner-teaching-his-dog-give-high-five_23-2148523872.jpg',
    tags: ['行为训练', '社交训练', '服从训练']
  },
  {
    id: 5,
    title: '上门喂养服务',
    provider: '刘芳',
    price: 120,
    rating: 4.5,
    reviewCount: 78,
    location: '成都市武侯区',
    image: 'https://img.freepik.com/free-photo/close-up-hand-dog-treats_23-2149126441.jpg',
    tags: ['上门服务', '喂食', '清理']
  },
  {
    id: 6,
    title: '宠物摄影服务',
    provider: '陈晓',
    price: 350,
    rating: 4.9,
    reviewCount: 67,
    location: '杭州市西湖区',
    image: 'https://img.freepik.com/free-photo/sweet-cat-with-owner-home_23-2149281231.jpg',
    tags: ['专业摄影', '宠物写真', '户外拍摄']
  }
])

// 筛选条件
const filters = ref({
  serviceType: '',
  priceRange: '',
  location: '',
  rating: null
})

// 价格范围选项
const priceRanges = [
  { label: '全部价格', value: '' },
  { label: '¥100以下', value: '0-100' },
  { label: '¥100-200', value: '100-200' },
  { label: '¥200-300', value: '200-300' },
  { label: '¥300以上', value: '300-up' }
]

// 服务类型选项
const serviceTypes = [
  { label: '全部服务', value: '' },
  { label: '日间看护', value: 'daycare' },
  { label: '寄养服务', value: 'boarding' },
  { label: '宠物美容', value: 'grooming' },
  { label: '行为训练', value: 'training' },
  { label: '上门服务', value: 'home-visit' },
  { label: '宠物摄影', value: 'photography' }
]

// 位置选项
const locations = [
  { label: '全部地区', value: '' },
  { label: '北京市', value: '北京' },
  { label: '上海市', value: '上海' },
  { label: '广州市', value: '广州' },
  { label: '深圳市', value: '深圳' },
  { label: '成都市', value: '成都' },
  { label: '杭州市', value: '杭州' }
]
</script>

<template>
  <div class="services-container">
    <!-- 页面标题 -->
    <div class="services-header">
      <h1>服务列表</h1>
      <p>浏览所有可用的宠物托管服务</p>
    </div>
    
    <!-- 筛选区域 -->
    <div class="filter-section">
      <el-card>
        <el-form :model="filters" label-width="80px">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6">
              <el-form-item label="服务类型">
                <el-select v-model="filters.serviceType" placeholder="选择服务类型" style="width: 100%">
                  <el-option
                    v-for="item in serviceTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <el-form-item label="价格范围">
                <el-select v-model="filters.priceRange" placeholder="选择价格范围" style="width: 100%">
                  <el-option
                    v-for="item in priceRanges"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <el-form-item label="地区">
                <el-select v-model="filters.location" placeholder="选择地区" style="width: 100%">
                  <el-option
                    v-for="item in locations"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <el-form-item label="评分">
                <el-rate v-model="filters.rating" allow-half></el-rate>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary">筛选</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    
    <!-- 服务列表 -->
    <div class="services-list">
      <el-row :gutter="30">
        <el-col v-for="service in services" :key="service.id" :xs="24" :sm="12" :md="8" :lg="8">
          <el-card class="service-card" shadow="hover">
            <div class="service-image" :style="{ backgroundImage: `url(${service.image})` }">
              <div class="service-price">¥{{ service.price }}/天</div>
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <div class="service-provider">
                <span>提供者: {{ service.provider }}</span>
              </div>
              <div class="service-rating">
                <el-rate v-model="service.rating" disabled show-score text-color="#ff9900"></el-rate>
                <span>({{ service.reviewCount }}条评价)</span>
              </div>
              <div class="service-location">
                <el-icon><Location /></el-icon>
                <span>{{ service.location }}</span>
              </div>
              <div class="service-tags">
                <el-tag v-for="(tag, index) in service.tags" :key="index" size="small" effect="plain" class="service-tag">
                  {{ tag }}
                </el-tag>
              </div>
              <div class="service-actions">
                <el-button type="primary" plain>查看详情</el-button>
                <el-button type="success">立即预约</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :page-size="10"
      ></el-pagination>
    </div>
  </div>
</template>

<style scoped>
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.services-header {
  text-align: center;
  margin-bottom: 40px;
}

.services-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.services-header p {
  font-size: 1.2rem;
  color: #666;
}

.filter-section {
  margin-bottom: 40px;
}

.services-list {
  margin-bottom: 40px;
}

.service-card {
  height: 100%;
  margin-bottom: 30px;
  overflow: hidden;
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.service-price {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
}

.service-content {
  padding: 20px;
}

.service-content h3 {
  font-size: 1.3rem;
  margin: 0 0 10px 0;
  color: #333;
}

.service-provider {
  margin-bottom: 10px;
  color: #666;
}

.service-rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.service-rating span {
  margin-left: 10px;
  color: #999;
  font-size: 0.9rem;
}

.service-location {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #666;
}

.service-location .el-icon {
  margin-right: 5px;
  color: #409EFF;
}

.service-tags {
  margin-bottom: 15px;
}

.service-tag {
  margin-right: 5px;
  margin-bottom: 5px;
}

.service-actions {
  display: flex;
  justify-content: space-between;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .service-actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .service-actions button {
    width: 100%;
  }
}
</style> 