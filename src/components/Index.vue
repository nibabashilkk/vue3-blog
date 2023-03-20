<template>
  <div class="common-layout">
    <el-container class="main">
      <el-header>
        <NavBar/>
      </el-header>
      <Essay/>
      <el-main>
        <el-row>
          <el-col :span="6">
            <Aside></Aside>
          </el-col>
          <el-col :span="18">
            <Swiper/>
            <CategoryLine/>
            <RecentPost/>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </div>

</template>

<script setup lang="ts">
import Aside from './Aside.vue';
import CategoryLine from './CategoryLine.vue';
import Essay from './Essay.vue';
import NavBar from './NavBar.vue';
import RecentPost from './RecentPost.vue';
import Swiper from './Swiper.vue';
</script>

<style scoped>
.common-layout{
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: auto;
}
.main{
  width: 100%;
  height: 100%;
  margin: auto;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0px;
  padding-top: 20px;
  overflow: hidden;
}
</style>