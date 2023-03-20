<template>
  <div id="card-author">
    <el-row id="author">
      <el-row class="avatar">
        <img src="https://cdn.xiaoliu.life/about/head.jpg" alt="avatar">
      </el-row>
      <el-row class="info"></el-row>
      <el-row class="github"></el-row>
    </el-row>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#card-author{
  height: 50%;
}
#author > .avatar >img{
    width: 110px;
    height: 110px;
    text-align: center;
    left: 50px;
    position: relative;
    transform: scale(0.5);
}
</style>