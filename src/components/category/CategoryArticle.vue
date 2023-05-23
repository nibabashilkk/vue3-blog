<template>
    <div class="common-layout">
        <el-container>
            <el-header>
            <NavBar/>
            </el-header>
                <el-main>
                    <div class="main">
                        <div id="category-article">
                            <div class="content">
                                <el-row>
                                <div class="head">
                                    <span>{{categoryName}}</span>
                                </div>
                                </el-row>
                                <el-row>
                                    <div class="articleList">
                                        <div class="article" v-for="categoryArticle in categoryArticleList">
                                            <a class="cover" :href="'/p/'+categoryArticle.articleId">
                                                <img :src="categoryArticle.cover" :alt="categoryArticle.title">
                                            </a>
                                            <div class="info">
                                                <time class="createTime">{{ categoryArticle.createTime }}</time>
                                                <a :href="'/p/'+categoryArticle.articleId" class="title">{{ categoryArticle.title }}</a>
                                                <div class="tagList">
                                                    <div v-for="tag in categoryArticle.tagNameList">
                                                        <div class="tag">#{{ tag }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </el-row>
                                <el-pagination 
                                background 
                                layout="prev,pager, next" 
                                :total="total"
                                :page-size="16"
                                v-model:current-page="currentPage"
                                @current-change = change />
                            </div>
                        </div>
                    </div>
                </el-main>
            <Footer/>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import NavBar from '../head/NavBar.vue';
import CategoryLine from '../index/CategoryLine.vue';

const route = useRoute();
const categoryName = route.params.categoryName;
const currentPage = Number(route.params.currentPage);
let localStorageValue = localStorage.getItem('category'+categoryName+currentPage);
let value = localStorageValue!=null ? JSON.parse(localStorageValue) : null;
let categoryArticleList = ref(value);
let total = ref(<Number>1);

getArticleByCategory();

function change(current:Number){
    window.location.href="/category/"+categoryName+'/'+current;
}
function getArticleByCategory(){
    let data = {
        current:currentPage,
        pageSize:16,
        categoryName: categoryName
    }
    fetch('/api/category/getArticle',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(data=>data.json()).then(data=>{
        categoryArticleList.value = data.data.data;
        total.value = data.data.total;
        categoryArticleList.value.forEach(data=>{
            data.createTime = dayjs(data.createTime).format('YYYY-MM-DD');
        })
        localStorage.setItem("category"+categoryName+currentPage,JSON.stringify(data.data.data));
    })
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
#category-article .content{
    padding: 50px 40px;
}
#category-article .head{
    width: 100%;
    text-align: left;
    font-size: 1.72rem;
    margin-bottom: 10px;
}
#category-article .articleList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
#category-article .article{
    width: 50%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    transition: all 0.3s;
}
#category-article .article .cover{
    border: 2px solid var(--lkk-purple);
    border-radius:12px;
    display: flex;
}
#category-article .article .cover img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    height: 100px;
    width: 175px;
}
#category-article .article .info{
    margin: auto 1rem;
    text-align: left;
    line-height: 1rem;
}
#category-article .article .info .createTime{
    font-size: 14px;
    line-height: 1;
    color: #555;
}
#category-article .article .info .title{
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    line-height: 1.3;
    color: var(--font-color);
    font-weight: 600;
    font-size: 1.2rem;
    margin: 2px 0;
}
#category-article .article .info .tagList{
    display: flex;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
#category-article .article .info .tag{
    line-height: 1;
    display: flex;
    margin-right: 8px;
    font-size: 15px;
}
@media screen and (max-width: 768px){
  #category-article .article{
    width: 100%;
  }
}
</style>
<style scoped>
:deep(.el-pagination.is-background) {
  margin-top: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
}
:deep(.el-pagination.is-background .btn-next){
  background: var(--card-bg);
  border: var(--lkk-border);
  border-radius: 8px;
  width: 3.5rem;
  height: 2.5rem;
  transition: all 0.3s;
  position: absolute;
  right: 0;
}
:deep(.el-pagination.is-background .btn-prev){
  background: var(--card-bg);
  border: var(--lkk-border);
  border-radius: 8px;
  width: 3.5rem;
  height: 2.5rem;
  transition: all 0.3s;
  position: absolute;
  left: 0;
}
:deep(.el-pagination.is-background .el-pager li){
  background: var(--card-bg);
  border: var(--lkk-border);
  border-radius: 8px;
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s;
}
:deep(.el-pagination.is-background .el-pager li.is-active){
  background: var(--lkk-purple);
  color: #fff;
}
:deep(.el-pagination.is-background .btn-next i){
  font-size: 20px;
  font-weight: 900;
}
:deep(.el-pagination.is-background .btn-prev i){
  font-size: 20px;
  font-weight: 900;
} 
:deep(.el-pagination.is-background .el-pager li:hover){
  background: var(--lkk-purple);
  color: #fff;
}
:deep(.el-pagination.is-background .btn-next:hover){
  background: var(--lkk-purple);
  color: #fff;
}
:deep(.el-pagination.is-background .btn-prev:hover){
  background: var(--lkk-purple);
  color: #fff;
}
@media screen and (max-width: 768px){
:deep(.el-pagination.is-background .btn-next){
  width: 49%;
  margin-right: 1%;
}
:deep(.el-pagination.is-background .btn-prev){
  width: 49%;
  margin-right: 1%;
}
:deep(.el-pager){
  display: none;
}
}
</style>