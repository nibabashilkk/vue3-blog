<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar/>
      </el-header>
      <el-main>
        <div class="main">
          <div id="page">
            <div id="article-container">
              <div class="page-top-card" style="background-image: url(https://cdn.xiaoliu.life/essay/essay.webp);">
                <div class="content-item-tips">动态</div>
                <span class="content-item-title">空间说说</span>
                <div class="content-bottom">
                  <div class="tips">我的生活、吐槽、闲话...</div>
                </div>
              </div>
              <div class="essay-item">
                <div v-masonry transition-duration="0.3s" item-selector=".item">
                  <div v-masonry-tile class="item" v-for="(essay, index) in essayList">
                    <div class="talk_item">
                      <div class="talk_meta">
                        <img class="no-lightbox avatar" src="https://cdn.xiaoliu.life/about/head.jpg">
                        <div class="info">
                          <span class="talk_nick">xiaoliu
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="is-badge icon"><path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path></svg>
                          </span>
                          <span class="talk_date" v-if="essay.createTime">{{ essay.createTime }}</span>
                        </div>
                      </div>
                      <el-row>
                        <div class="talk_content">{{ essay.content }}</div>
                      </el-row>
                      <el-row v-if="essay.img">
                        <img :src="essay.img" alt="图片">
                      </el-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Comment :blogId='essay'/>
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
import Comment from '../comment/Comment.vue';
import dayjs from 'dayjs'
import {ref,inject} from 'vue'

let essay = "essay";
let localStorageValue = localStorage.getItem('essay');
let value = localStorageValue!=null ? JSON.parse(localStorageValue) : null;
let essayList = ref<[essay]>(value);
type essay = {
  id:Number,
  createTime:Date,
  img:any,
  content: String
}
const url = inject("url");

getEssay();

function getEssay(){
    fetch(url+'/essay/get',{
        method:'get'
    }).then(data=>data.json()).then((date: any)=>{
      date.forEach((element: { createTime: string | number | Date | dayjs.Dayjs | null | undefined; }) => {
        element.createTime = dayjs(element.createTime).format("MM月DD日 HH时mm分")
        console.log(element.createTime)
      });
        essayList.value=date;
        localStorage.setItem('essay',JSON.stringify(date));
    })
}
</script>

<style scoped>

/* 页面初始化 */
div#page {
    background: none;
    border: 0;
    padding: 0;
}
[data-theme=dark] #twikoo .tk-content,
#twikoo .tk-content {
    padding: 0;
    background: transparent;
}

.talk_item,
.tk-expand,
.tk-comments-container>.tk-comment,
.tk-submit:nth-child(1){
    background: var(--card-bg);
    border: 1px solid #e0e3ed;
    box-shadow: 0 5px 10px rgb(189 189 189 / 10%);
    transition: all .3s ease-in-out;
    border-radius: 12px;
}
.talk_item:hover,
.tk-comments-container>.tk-comment:hover,
.tk-submit:nth-child(1):hover {
    border-color: #49b1f5;
}

.tk-submit {
    padding: 20px 10px 0;
}

.tk-comments-container>.tk-comment {
    padding: 15px;
}

/* 页面初始化结束 */

#talk{
    margin-top: 1rem;
}

#talk .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#talk .loading img {
    width: 200px;
}

.talk_item {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 15px;
}

.avatar {
    margin: 0 !important;
    width: 60px;
    height: 60px;
    border-radius: 10px;
}


.talk_bottom,
.talk_meta {
    display: flex;
    align-items: center;
    width: 100%;
    line-height: 1.5;
}
.talk_bottom{
    justify-content: space-between;
}
.info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
span.talk_nick {
    color: #6dbdc3;
    font-size: 1.2rem;
}
svg.is-badge.icon {
    width: 15px;
    margin-left: 5px;
    padding-top: 3px;
}
span.talk_date {
    opacity: .6;
}

.talk_content {
    line-height: 1.5;
    margin-top: 10px;
}
.zone_imgbox {
    display: flex;
    flex-wrap: wrap;
    --w: calc(25% - 8px);
    gap: 10px;
    margin-top: 5px;
}
.zone_imgbox a {
    display: block;
    border-radius: 12px;
    width: var(--w);
    aspect-ratio: 1/1;
    position: relative;
}

.zone_imgbox img {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    object-fit: cover;
}
/* 底部 */

.talk_bottom {
    opacity: .9;
}
.talk_bottom .icon {
    color: var(--font-color);
    float: right;
    transition: all .3s;
}

.talk_bottom .icon:hover {
    color: #49b1f5;
}

span.talk_tag{
    font-size: 14px;
}
.talk_content>a {
    margin: 0 3px;
    color: #ff7d73 !important;
}
.talk_content>a:hover{
    text-decoration: none !important;
    color: #ff5143 !important
}

/* 提醒 */

.limit {
    transition: all .3s ease-in-out;
    color: rgba(76, 73, 72, 0.6);
}

[data-theme=dark] .limit {
    color: rgba(255, 255, 255, 0.5);
}

.limit {
    display: none;
    text-align: center;
    margin-top: 20px;
    color: var(--font-color);
}
@media screen and (max-width: 900px) {
    .zone_imgbox {
        --w: calc(33% - 5px);
    }
    #talk{
        margin: 10px 3px 0
    }
    #post-comment{
        margin: 0 3px
    }
}

@media screen and (max-width: 768px) {
    .zone_imgbox {
        gap: 6px;
    }
    .zone_imgbox {
        --w: calc(50% - 3px);
    }
    span.talk_date {
        font-size: 14px;
    }
    .talk_item{
    background-color: var(--lkk-body);
    border: none;
    box-shadow: none;
  }
}
</style>
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
.page-top-card {
    background-size: cover;
    background-position: center;
    height: 20rem;
    padding: 10px 2.7rem;
    border-radius: 20px;
    color: #fff;
    position: relative;
    text-align: left;
    margin-bottom: 12px;
}
span.content-item-title {
    font-size: 2.3em;
    font-weight: 700;
    line-height: 1.2;
}
.content-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: calc(100% - 5.4rem);
    bottom: 1rem;
}
</style>
<style scoped>
.item{
  text-align: left;
}
@media screen and (max-width: 768px){
.item{
  width: 100%;
}
}
@media screen and (max-width: 992px) and (min-width: 768px){
  .item{
    width: 49%;
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
}
@media screen and (min-width: 992px){
  .item{
    width: 32.3%;
    margin-right: 0.5%;
    margin-left: 0.5%;
  }
}
</style>