<template>
  <div class="nav-main">
  <el-row>
    <el-col :span="6" class="left">
      <a id="site-name">
        <span class="font">xiaoliu</span>
      </a>
    </el-col>
    <el-col :span="12">
      <el-row class="middle">
      <el-col :span="12">
        <span>文库</span>
      </el-col>
      <el-col :span="12">
        <span>我的</span>
      </el-col>
      </el-row>
    </el-col>
    <el-col :span="6" class="right">
      <span>测试</span>
    </el-col>
  </el-row>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav-main{
    width: 100%;
    height: 100%;
    font-weight: 700;
    margin: auto;
}
.el-row{
  width: 100%;
  height: 100%;
}
#site-name{
  color: var(--font-color);
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
}
.el-col{
  color: var(--font-color);
  font-weight: 700;
}
.middle{
  width: 50%;
  height: 100%;
  margin: auto;
  font-size: 1.3rem;
}
.left{
  text-align: left;
}
.right{
  text-align: right;
  font-size: 1.3rem;
}
/* .border{
  border-radius: 12px;
  border: 1px solid #e0e3ed;
  box-shadow: 0 5px 10px rgb(189 189 189 / 10%);
  transition: all .3s ease-in-out;
} */

</style>