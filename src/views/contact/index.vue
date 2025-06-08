<template>
  <div class="contact-container">
    <div class="contact-header">
      <h1>联系我们</h1>
      <p>我们随时为您提供帮助和支持</p>
    </div>
    
    <div class="contact-content">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="24" :md="12">
          <div class="contact-info">
            <h2>联系方式</h2>
            <ul class="contact-list">
              <li>
                <el-icon><Location /></el-icon>
                <span>北京市朝阳区建国路88号</span>
              </li>
              <li>
                <el-icon><Phone /></el-icon>
                <span>400-123-4567</span>
              </li>
              <li>
                <el-icon><Message /></el-icon>
                <span>contact@petcare.com</span>
              </li>
              <li>
                <el-icon><Clock /></el-icon>
                <span>周一至周日 9:00-18:00</span>
              </li>
            </ul>
            
            <div class="social-media">
              <h3>关注我们</h3>
              <div class="social-icons">
                <a href="#" class="social-icon"><el-icon><IconWeibo /></el-icon></a>
                <a href="#" class="social-icon"><el-icon><IconWechat /></el-icon></a>
                <a href="#" class="social-icon"><el-icon><IconDouYin /></el-icon></a>
              </div>
            </div>
          </div>
        </el-col>
        
        <el-col :xs="24" :sm="24" :md="12">
          <div class="contact-form">
            <h2>在线留言</h2>
            <el-form>
              <el-form-item>
                <el-input placeholder="您的姓名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="您的邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input placeholder="您的手机号码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-select placeholder="请选择咨询类型" style="width: 100%">
                  <el-option label="服务咨询" value="service"></el-option>
                  <el-option label="投诉建议" value="complaint"></el-option>
                  <el-option label="合作洽谈" value="cooperation"></el-option>
                  <el-option label="其他问题" value="other"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-input type="textarea" rows="5" placeholder="请输入您的留言内容"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100%">提交留言</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    
    <div class="map-section">
      <h2>我们的位置</h2>
      <div class="map-container">
        <!-- 实际项目中这里应该是地图组件 -->
        <div class="map-placeholder">
          <el-icon><Location /></el-icon>
          <p>地图加载中...</p>
        </div>
      </div>
    </div>
    
    <div class="faq-section">
      <h2>常见问题</h2>
      <el-collapse accordion>
        <el-collapse-item title="如何成为服务提供者？" name="1">
          <div>您需要注册一个账号，选择"服务提供者"角色，填写相关信息并提交审核。我们的团队会在1-3个工作日内完成审核。</div>
        </el-collapse-item>
        <el-collapse-item title="如何预约服务？" name="2">
          <div>您可以浏览服务列表，选择合适的服务后点击"立即预约"，选择日期和时间，确认后完成支付即可。</div>
        </el-collapse-item>
        <el-collapse-item title="如何取消预约？" name="3">
          <div>您可以在"我的预约"中找到相应订单，点击"取消预约"按钮。请注意，不同服务有不同的取消政策。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.contact-header {
  text-align: center;
  margin-bottom: 50px;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.contact-header p {
  font-size: 1.2rem;
  color: #666;
}

.contact-content {
  margin-bottom: 60px;
}

.contact-info {
  height: 100%;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.contact-info h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.contact-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.contact-list li .el-icon {
  color: #409EFF;
  margin-right: 10px;
  font-size: 1.2rem;
}

.social-media h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #409EFF;
  color: white;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: #337ecc;
}

.contact-form {
  height: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.map-section {
  margin-bottom: 60px;
}

.map-section h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.map-container {
  height: 400px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.map-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
}

.map-placeholder .el-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.faq-section h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .contact-info {
    margin-bottom: 30px;
  }
}
</style> 