<template>
<div class="common-layout">
    <el-container>
        <el-header>
            <NavBar/>
        </el-header>
        <el-main>
            <div class="main">
                <div id = "treeHoles">
                    
                </div>
            </div>
        </el-main>
        <Footer></Footer>
    </el-container>
</div>
</template>

<script setup lang="ts">
import NavBar from '../head/NavBar.vue';
import Footer from '../foot/Footer.vue';
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