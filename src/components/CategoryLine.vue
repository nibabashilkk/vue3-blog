<template>
  <div id="category-line">
    <el-row>
      <el-col :span="2" v-for="category in categoryList">
        <span>{{category.categoryName}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import {ref} from 'vue'

let categoryList = ref();
getCategory();

function getCategory(){
  axios.get('api/category/get').then((data:any)=>{
    categoryList.value = data.data.data;
  })
}
</script>

<style scoped>
#category-line{
  background-color: var(--card-bg);
  border: var(--lkk-border);
  border-radius: 12px;
  padding: 10px;
  margin-top: 1rem;
}
</style>