<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar/>
      </el-header>
      <el-main>
        <div class="main">
          <div id="category">
            <div class="content">
              <el-row>
                <div class="head">
                  <span>文章分类</span>
                </div>
              </el-row>
              <div id="categoryItems">
                <div class="item" v-for="category in categoryList" :style="randomColor()">
                  <div class="content">
                    <a :href="'/category/'+category.categoryName+'/1'">
                      <div class="name">
                        <span>| {{ category.categoryName}}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <Footer/>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {ref,inject} from 'vue'
import NavBar from '../head/NavBar.vue';
import Footer from '../foot/Footer.vue';
import { randomColor } from '../../utils/randomColor';

const url = inject('url')
let categoryList = ref();
getCategoryList();
console.log(getCategoryArticleCount("日常推荐"))

function getCategoryList(){
  fetch('/api/category/getAllCategory',{
    method:'get',
  }).then(data=>data.json()).then(data=>{
    categoryList.value = data.data;
    console.log(data)
  })
}
function getCategoryArticleCount(categoryName:String){
  let data = {
        current:1,
        pageSize:16,
        categoryName: categoryName
    }
    let value = fetch('/api/category/getArticle',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(data=>data.json()).then(data=>{
        return data.data.total;
    })
    value.then(res=>{
      return res;
    });
}
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
#category .content .head{
  width: 100%;
}
#category .content{
  padding: 50px 40px;
}
#category .content .head{
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  margin: 8px 0.2px;
}
#categoryItems{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
#categoryItems .item{
  width: calc((100% - 24px)/3);
  display: flex;
  border: var(--lkk-border);
  border-radius: 12px;
  text-align: center;
  font-size: 1.5rem;
}
#categoryItems .item .content{
  padding: 16px 32px;
  text-align: left;
  font-weight: 600;
}
#categoryItems .item .name{
  color: aliceblue;
}
@media screen and (max-width: 768px){
  #categoryItems .item{
    width: 100%;
  }
}
</style>