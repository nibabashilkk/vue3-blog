<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar/>
      </el-header>
      <el-main>
        <div class="main">
          <Essay/>
          <el-row>
            <el-col :lg="6" :md="6" class="hidden-sm-and-down" style="padding-right: 15px;">
              <Aside></Aside>
            </el-col>
            <el-col :lg="18" :md="18" :sm="24">
              <Swiper/>
              <CategoryLine/>
              <RecentPost/>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>

</template>

<script setup lang="ts">
import Aside from './aside/Aside.vue';
import CategoryLine from './index/CategoryLine.vue';
import Essay from './essay/Essay.vue';
import NavBar from './head/NavBar.vue';
import RecentPost from './index/RecentPost.vue';
import Swiper from './index/Swiper.vue';
import Footer from './foot/Footer.vue'
import 'element-plus/theme-chalk/display.css'


</script>

<style scoped>
.common-layout{
  width: 100%;
  height: 100%;
  margin: auto;
}
.main{
  max-width: 1250px;
  margin: auto;
  padding: 30px 15px;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0px;
  overflow: visible;
}
@media screen and (max-width: 768px){
  .main{
    padding: 10px 6px;
  }
}
</style>