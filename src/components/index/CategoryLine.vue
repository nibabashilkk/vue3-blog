<template>
  <div id="category-line">
    <ul class="categoryBar-list">
      <li class="categoryBar-list-item" v-for="category in categoryList">
        <span>{{ category.categoryName }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let localStorageValue = localStorage.getItem('allCategory');
let value = localStorageValue!=null ? JSON.parse(localStorageValue) : null;
let categoryList = ref(value);
getCategory();

function getCategory(){
  fetch('api/category/getAllCategory',{
    method: 'get'
  }).then(data=>data.json()).then((data:any)=>{
    categoryList.value = data.data;
    localStorage.setItem('allCategory',JSON.stringify(data.data));
  })
}
</script>

<style scoped>
#category-line{
  margin-top: 15px;
  overflow: hidden;
}
.categoryBar-list {
    padding: 10px 0;
    margin: 0 5px;
    white-space: nowrap;
    display: flex;
}
.categoryBar-list-item {
    cursor: pointer;
    font-weight: 700;
    line-height: 1;
    border-radius: 8px;
    padding: 8px 18px !important;
    margin: 0 5px;
    white-space: nowrap;
    display: flex;
}
@media screen and (max-width: 768px){
.categoryBar-list {
    padding: 8px 0;
    max-height: 44px;
}
li.categoryBar-list-item {
    border-radius: 6px;
    padding: 6px 12px !important;
}
}
</style>