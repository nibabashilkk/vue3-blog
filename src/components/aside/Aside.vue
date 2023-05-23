<template>
  <div id="card-aside">
    <div class="card-widget card-info">
      <div class="is-center">
          <div class="avatar-img"><img src="https://cdn.xiaoliu.life/about/head.jpg"
                  onerror="this.onerror=null;this.src='/img/friend_404.gif'" alt="avatar"></div>
          <div class="author-info__name">xiaoliu</div>
          <div class="author-info__description"></div>
      </div>
      <div class="card-info-data site-data is-center">
        <el-row>
          <el-col :span="8">
            <a href="/archives/">
              <div class="headline">文章</div>
              <div class="length-num">{{articleCount}}</div>
            </a>
          </el-col>
          <el-col :span="8">
            <a href="/tags/">
              <div class="headline">标签</div>
              <div class="length-num">{{ tagCount }}</div>
            </a>
          </el-col>
          <el-col :span="8">
            <a href="/categories/">
              <div class="headline">分类</div>
              <div class="length-num">{{ categoryCount }}</div>
            </a>
          </el-col>
        </el-row>
      </div>
      <a id="card-info-btn" target="_blank" rel="noopener" href="https://github.com/nibabashilkk">
        <i class="fab fa-github"></i>
        <span>Follow Me</span>
      </a>
    </div>
    <div class="card-widget right-widget" id="card-wechat">
      <div id="flip-wrapper">
        <div id="flip-content">
          <div class="face"></div>
          <div class="back face"></div>
        </div>
      </div>
    </div>
    <div class="sticky_layout">
      <!-- <AsideDirectory/> -->
      <div id="card-recent">
        <div class="head">
          <span>最新文章</span>
        </div>
        <div v-for="recentArticle in recentArticleList">
          <div class="article-info">
            <el-row :gutter="10">
              <el-col :span="10">
                <a :href='"/p/"+recentArticle.articleId' class="article-cover">
                  <img :src="recentArticle.cover" :alt="recentArticle.title">
                </a>
              </el-col>
              <el-col :span="14" style="margin: auto;">
                <el-row>
                  <a :href='"/p/"+recentArticle.articleId'>
                    <div class="title">
                      {{ recentArticle.title }}
                    </div>
                  </a>
                </el-row>
                <el-row>
                  <div class="create-time">
                    {{ recentArticle.createTime }}
                  </div>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,inject} from 'vue';
// import AsideDirectory from './AsideDirectory.vue'

const url = inject("url");
let localStorageValue = localStorage.getItem('asideRecentArticle');
let value = localStorageValue!=null ? JSON.parse(localStorageValue):null;
let recentArticleList = ref(value);
let articleCount = ref();
let tagCount = ref();
let categoryCount = ref();
getRecentArticle();
getArticleCount();
getTagCount();
getCategoryCount();

function getCategoryCount(){
  fetch(url+'/category/getCategoryCount',{
    method:'get'
  }).then(data=>data.json()).then(data=>{
    categoryCount.value = data.data;
  })
}
function getTagCount(){
  fetch(url+'/tag/getTagCount',{
    method:'get'
  }).then(data=>data.json()).then(data=>{
    tagCount.value = data.data;
  })
}
function getArticleCount(){
  fetch(url+'/article/getArticleCount',{
    method:'get'
  }).then(data=>data.json()).then(data=>{
    articleCount.value = data.data;
  })
}
function getRecentArticle(){
  fetch(url+'/article/getRecentArticle',{
    method:'get'
  }).then(data=>data.json()).then(data=>{
    recentArticleList.value = data.data;
    localStorage.setItem('asideRecentArticle',JSON.stringify(data.data));
  })
}
</script>

<style scoped>
#card-aside{
  width: 100%;
  height: 100%;
}
#card-aside .card-info{
  padding-bottom: 20px;
}
.avatar-img {
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    background: url(/src/assets/img/bg2.webp);
    background-size: cover;
    height: 162px;
    width: 100%;
    border-radius: 0;
}
.avatar-img::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    -webkit-transform: translate(65%);
    -moz-transform: translate(65%);
    -o-transform: translate(65%);
    -ms-transform: translate(65%);
    transform: translate(65%);
    width: 20px;
    height: 20px;
    background: #6bdf8f;
    border: 5px solid #fff;
    border-radius: 50%;
    -webkit-transition: filter 375ms ease-in .2s, -webkit-transform .3s;
    -moz-transition: filter 375ms ease-in .2s, -moz-transform .3s;
    -o-transition: filter 375ms ease-in .2s, -o-transform .3s;
    -ms-transition: filter 375ms ease-in .2s, -ms-transform .3s;
    transition: filter 375ms ease-in .2s, transform .3s;
    z-index: 2;
}
.avatar-img img {
    -webkit-transition: filter 375ms ease-in .2s, -webkit-transform .3s;
    -moz-transition: filter 375ms ease-in .2s, -moz-transform .3s;
    -o-transition: filter 375ms ease-in .2s, -o-transform .3s;
    -ms-transition: filter 375ms ease-in .2s, -ms-transform .3s;
    transition: filter 375ms ease-in .2s, transform .3s;
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    bottom: 0;
    object-fit: cover;
    z-index: 1;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 5px #fff solid;
}
#card-aside .card-info .author-info__name {
    font-weight: 500;
    font-size: 1.57em;
}
#card-aside .card-info .author-info__description {
    margin-top: -.42em;
}
#card-aside .card-info>div:not(:first-child) {
    padding: 0 20px;
}
#card-aside .card-info .card-info-data{
  text-align: center;
}
#card-aside .card-info .card-info-data a {
  display: table-cell;
  position: relative;
  color: var(--font-color);
  width: 33%;
}
#card-aside .card-info .card-info-data .headline{
  font-size: 14px;
}
#card-aside .card-info .card-info-data .length-num{
  margin-top: -.32em;
  color: #1f2d3d;
  font-size: 1.4em;
  line-height: 1.5;
}
#card-aside .card-info #card-info-btn {
    display: block;
    margin-top: 14px;
    background-color: var(--btn-bg);
    color: var(--lkk-light);
    text-align: center;
    line-height: 2.4;
}
#card-wechat{
  background: #57bd6a;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  cursor: pointer;
  border: none;
  height: 110px;
  margin-top: 15px;
  border-radius: 12px;
  border: var(--lkk-border);
}
#flip-wrapper {
    position: relative;
    width: 235px;
    height: 110px;
    z-index: 1
}

#flip-content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: cubic-bezier(0,0,0,1.29) .3s
}

#flip-wrapper:hover #flip-content {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg)
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: url(https://cdn.xiaoliu.life/wangzhan/wechatface.png) center center no-repeat;
    background-size: 100%
}

.back.face {
    display: block;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    box-sizing: border-box;
    background: url(https://cdn.xiaoliu.life/wangzhan/wechatbackface.png) center center no-repeat;
    background-size: 100%
}
#aside-content .card-widget#card-wechat img {
    max-height: 110px;
    object-fit: cover
}
.sticky_layout{
  position: sticky;
  top: 65px;
}
#card-recent{
  margin-top: 15px;
  padding: 24px 20px;
}
#card-recent .head{
  font-size: 1.2rem;
  text-align: left;
}
#card-recent img{
  width: 100%;
  height: 100%;
}
#card-recent .article-info{
  margin-top: 10px;
  text-align: left;
  line-height: 1.5;
}
#card-recent .title{
  font-size: 0.95rem;
  color: #4c4948;
}
#card-recent .create-time{
  font-size: 0.85rem;
  color: #858585;
}
#card-recent .title,#card-recent .create-time{
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
#card-recent .article-info .article-cover{
  display: flex;
  width: 100%;
  height: 4.2rem;
}

</style>