<template>
  <div id="recent-post">
    <div v-for="(articleCard,index) in articleCardList">
      <div class="recent-post-item" v-if="index%2==0">
        <el-row>
            <el-col :lg=10 :md="10" :sm="24">
              <div class="recent-post-cover">
                <a :href='"/p/"+articleCard.articleId'>
                  <img :src="articleCard.cover" :alt="articleCard.title">
                </a>
              </div>
            </el-col>
            <el-col :lg=14 :md="14" :sm="24">
              <div class="recent-post-info">
                <el-row>
                  <a :href='"/p/"+articleCard.articleId'>
                    <div class="title">
                      <span>{{ articleCard.title }}</span>
                    </div>
                  </a>
                </el-row>
                <el-row>
                  <svg class="icon" t="1675514596705" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3483" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1BC1FA" p-id="3484"></path><path d="M501.9 164.2H280.2c-16 0-29 12.9-29 29s12.9 29 29 29h29v94.7c0 47.1 20.1 92.2 55.1 123.7l49 44.1c7.7 6.9 12 16.5 12 26.9 0 10.4-4.3 19.9-12 26.9l-49 44.1c-35 31.5-55.1 76.6-55.1 123.7V801h-29c-16 0-29 13-29 29s12.9 28.9 29 28.9h463c16 0 28.9-12.9 28.9-29s-12.9-28.9-29-28.9h-29v-94.7c0-47.1-20.1-92.2-55.1-123.7l-49-44.1c-7.7-7-12-16.5-12-26.9 0-10.4 4.3-19.9 12-26.9l49-44.1c35-31.5 55.1-76.6 55.1-123.7v-5c-21-4.4-42.6-11.1-64.2-20.1-72.7-30.5-127.1-79.5-148-127.6z m102.2 488.6c15 15 23.3 35 23.3 56.3v91.8H395.9v-91.8c0-21.3 8.3-41.2 23.3-56.3l77.1-77.1c8.5-8.5 22.2-8.5 30.7 0l77.1 77.1z" fill="#FFFFFF" p-id="3485"></path><path d="M743.2 222.1c16 0 29-12.9 29-28.9 0-16-12.9-29-29-29H501.9c20.9 48.1 75.2 97.1 148.1 127.4 21.6 9 43.2 15.7 64.2 20.1V222h29z" fill="#FFFFFF" opacity=".4" p-id="3486"></path></svg>
                  <div class="create-date">
                    <span>{{ articleCard.createTime }} |</span>
                  </div>
                  <svg class="icon" t="1675514804839" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13416" width="200" height="200"><path d="M771.8912 108.1344H255.1296c-47.2576 0-85.5552 38.2976-85.5552 85.5552v156.4672h687.872V193.6896c0-47.2576-38.2976-85.5552-85.5552-85.5552z" fill="#ffa115" p-id="13417"></path><path d="M233.0624 970.1888c-15.8208 0-31.6416-4.096-46.1824-12.2368-30.0544-16.896-48.0256-47.5648-48.0256-82.0736V197.4272c0-73.4208 59.6992-133.12 133.12-133.12h485.4272c73.4208 0 133.12 59.6992 133.12 133.12v672.768c0 34.7648-19.0464 66.6112-49.7152 82.9952a93.96736 93.96736 0 0 1-96.6656-4.6592l-197.1712-131.4816a32.75264 32.75264 0 0 0-35.1232-0.7168l-229.888 139.9296c-15.2064 9.2672-32.0512 13.9264-48.896 13.9264z m38.912-844.4416c-39.5264 0-71.68 32.1536-71.68 71.68v678.4c0 17.2544 11.6736 25.7024 16.6912 28.5184 5.0176 2.816 18.2784 8.3968 33.024-0.5632l229.888-139.9296c31.1296-18.944 70.8608-18.1248 101.1712 2.0992L778.24 897.4336c10.1888 6.8096 22.784 7.424 33.5872 1.6384 10.8032-5.7856 17.2544-16.5888 17.2544-28.8256V197.4272c0-39.5264-32.1536-71.68-71.68-71.68H271.9744z" fill="#474A54" p-id="13418"></path><path d="M678.5024 287.0272H350.9248c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h327.6288c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.7712 30.72z" fill="#474A54" p-id="13419"></path></svg>
                  <div v-for="(tag,index) in articleCard.tagNameList" class="tag">
                    <span v-if="index!=0">.</span>
                    <span>{{ tag }}</span>
                  </div>
                </el-row>
                <el-row>
                  <div class="description">
                    {{ articleCard.description }}
                  </div>
                </el-row>
              </div>
            </el-col>
        </el-row>
      </div>
      <div class="recent-post-item" v-if="index%2==1">
        <el-row>
          <el-col :lg=14 :md="14" class="hidden-sm-and-down">
            <div class="recent-post-info">
              <el-row>
                <a :href='"/p/"+articleCard.articleId'>
                  <div class="title">
                    <span>{{ articleCard.title }}</span>
                  </div>
                </a>
              </el-row>
              <el-row>
                <svg class="icon" t="1675514596705" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3483" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1BC1FA" p-id="3484"></path><path d="M501.9 164.2H280.2c-16 0-29 12.9-29 29s12.9 29 29 29h29v94.7c0 47.1 20.1 92.2 55.1 123.7l49 44.1c7.7 6.9 12 16.5 12 26.9 0 10.4-4.3 19.9-12 26.9l-49 44.1c-35 31.5-55.1 76.6-55.1 123.7V801h-29c-16 0-29 13-29 29s12.9 28.9 29 28.9h463c16 0 28.9-12.9 28.9-29s-12.9-28.9-29-28.9h-29v-94.7c0-47.1-20.1-92.2-55.1-123.7l-49-44.1c-7.7-7-12-16.5-12-26.9 0-10.4 4.3-19.9 12-26.9l49-44.1c35-31.5 55.1-76.6 55.1-123.7v-5c-21-4.4-42.6-11.1-64.2-20.1-72.7-30.5-127.1-79.5-148-127.6z m102.2 488.6c15 15 23.3 35 23.3 56.3v91.8H395.9v-91.8c0-21.3 8.3-41.2 23.3-56.3l77.1-77.1c8.5-8.5 22.2-8.5 30.7 0l77.1 77.1z" fill="#FFFFFF" p-id="3485"></path><path d="M743.2 222.1c16 0 29-12.9 29-28.9 0-16-12.9-29-29-29H501.9c20.9 48.1 75.2 97.1 148.1 127.4 21.6 9 43.2 15.7 64.2 20.1V222h29z" fill="#FFFFFF" opacity=".4" p-id="3486"></path></svg>
                <div class="create-date">
                  <span>{{ articleCard.createTime }} |</span>
                </div>
                <svg class="icon" t="1675514804839" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13416" width="200" height="200"><path d="M771.8912 108.1344H255.1296c-47.2576 0-85.5552 38.2976-85.5552 85.5552v156.4672h687.872V193.6896c0-47.2576-38.2976-85.5552-85.5552-85.5552z" fill="#ffa115" p-id="13417"></path><path d="M233.0624 970.1888c-15.8208 0-31.6416-4.096-46.1824-12.2368-30.0544-16.896-48.0256-47.5648-48.0256-82.0736V197.4272c0-73.4208 59.6992-133.12 133.12-133.12h485.4272c73.4208 0 133.12 59.6992 133.12 133.12v672.768c0 34.7648-19.0464 66.6112-49.7152 82.9952a93.96736 93.96736 0 0 1-96.6656-4.6592l-197.1712-131.4816a32.75264 32.75264 0 0 0-35.1232-0.7168l-229.888 139.9296c-15.2064 9.2672-32.0512 13.9264-48.896 13.9264z m38.912-844.4416c-39.5264 0-71.68 32.1536-71.68 71.68v678.4c0 17.2544 11.6736 25.7024 16.6912 28.5184 5.0176 2.816 18.2784 8.3968 33.024-0.5632l229.888-139.9296c31.1296-18.944 70.8608-18.1248 101.1712 2.0992L778.24 897.4336c10.1888 6.8096 22.784 7.424 33.5872 1.6384 10.8032-5.7856 17.2544-16.5888 17.2544-28.8256V197.4272c0-39.5264-32.1536-71.68-71.68-71.68H271.9744z" fill="#474A54" p-id="13418"></path><path d="M678.5024 287.0272H350.9248c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h327.6288c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.7712 30.72z" fill="#474A54" p-id="13419"></path></svg>
                <div v-for="(tag,index) in articleCard.tagNameList" class="tag">
                  <span v-if="index!=0">.</span>
                  <span>{{ tag }}</span>
                </div>
              </el-row>
              <el-row>
                <div class="description">
                  {{ articleCard.description }}
                </div>
              </el-row>
            </div>
          </el-col>
          <el-col :lg=10 :md="10" :sm="24">
            <div class="recent-post-cover">
              <a :href='"/p/"+articleCard.articleId'>
                <img :src="articleCard.cover" :alt="articleCard.title">
              </a>
            </div>
          </el-col>
          <el-col :sm="24" class="hidden-md-and-up">
            <div class="recent-post-info">
              <el-row>
                <a :href='"/p/"+articleCard.articleId'>
                  <div class="title">
                    <span>{{ articleCard.title }}</span>
                  </div>
                </a>
              </el-row>
              <el-row>
                <svg class="icon" t="1675514596705" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3483" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1BC1FA" p-id="3484"></path><path d="M501.9 164.2H280.2c-16 0-29 12.9-29 29s12.9 29 29 29h29v94.7c0 47.1 20.1 92.2 55.1 123.7l49 44.1c7.7 6.9 12 16.5 12 26.9 0 10.4-4.3 19.9-12 26.9l-49 44.1c-35 31.5-55.1 76.6-55.1 123.7V801h-29c-16 0-29 13-29 29s12.9 28.9 29 28.9h463c16 0 28.9-12.9 28.9-29s-12.9-28.9-29-28.9h-29v-94.7c0-47.1-20.1-92.2-55.1-123.7l-49-44.1c-7.7-7-12-16.5-12-26.9 0-10.4 4.3-19.9 12-26.9l49-44.1c35-31.5 55.1-76.6 55.1-123.7v-5c-21-4.4-42.6-11.1-64.2-20.1-72.7-30.5-127.1-79.5-148-127.6z m102.2 488.6c15 15 23.3 35 23.3 56.3v91.8H395.9v-91.8c0-21.3 8.3-41.2 23.3-56.3l77.1-77.1c8.5-8.5 22.2-8.5 30.7 0l77.1 77.1z" fill="#FFFFFF" p-id="3485"></path><path d="M743.2 222.1c16 0 29-12.9 29-28.9 0-16-12.9-29-29-29H501.9c20.9 48.1 75.2 97.1 148.1 127.4 21.6 9 43.2 15.7 64.2 20.1V222h29z" fill="#FFFFFF" opacity=".4" p-id="3486"></path></svg>
                <div class="create-date">
                  <span>{{ articleCard.createTime }} |</span>
                </div>
                <svg class="icon" t="1675514804839" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13416" width="200" height="200"><path d="M771.8912 108.1344H255.1296c-47.2576 0-85.5552 38.2976-85.5552 85.5552v156.4672h687.872V193.6896c0-47.2576-38.2976-85.5552-85.5552-85.5552z" fill="#ffa115" p-id="13417"></path><path d="M233.0624 970.1888c-15.8208 0-31.6416-4.096-46.1824-12.2368-30.0544-16.896-48.0256-47.5648-48.0256-82.0736V197.4272c0-73.4208 59.6992-133.12 133.12-133.12h485.4272c73.4208 0 133.12 59.6992 133.12 133.12v672.768c0 34.7648-19.0464 66.6112-49.7152 82.9952a93.96736 93.96736 0 0 1-96.6656-4.6592l-197.1712-131.4816a32.75264 32.75264 0 0 0-35.1232-0.7168l-229.888 139.9296c-15.2064 9.2672-32.0512 13.9264-48.896 13.9264z m38.912-844.4416c-39.5264 0-71.68 32.1536-71.68 71.68v678.4c0 17.2544 11.6736 25.7024 16.6912 28.5184 5.0176 2.816 18.2784 8.3968 33.024-0.5632l229.888-139.9296c31.1296-18.944 70.8608-18.1248 101.1712 2.0992L778.24 897.4336c10.1888 6.8096 22.784 7.424 33.5872 1.6384 10.8032-5.7856 17.2544-16.5888 17.2544-28.8256V197.4272c0-39.5264-32.1536-71.68-71.68-71.68H271.9744z" fill="#474A54" p-id="13418"></path><path d="M678.5024 287.0272H350.9248c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h327.6288c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.7712 30.72z" fill="#474A54" p-id="13419"></path></svg>
                <div v-for="(tag,index) in articleCard.tagNameList" class="tag">
                  <span v-if="index!=0">.</span>
                  <span>{{ tag }}</span>
                </div>
              </el-row>
              <el-row>
                <div class="description">
                  {{ articleCard.description }}
                </div>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-pagination 
      background 
      layout="prev,pager, next" 
      :total="total"
      :page-size="10"
      v-model:current-page="currentPage"
      @current-change = handleChange />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import 'element-plus/theme-chalk/display.css'
import dayjs from 'dayjs';
import {useRoute} from 'vue-router'

const route = useRoute();
const currentPage = Number(route.params.currentPage ? route.params.currentPage : 1);
console.log(currentPage)
let articleCardList = ref();
let total = ref();



getData(currentPage);
function getData(current:Number){
  let localStorageValue = localStorage.getItem('articleCardList'+current);
  articleCardList.value = localStorageValue!=null ? JSON.parse(localStorageValue) : null;
  let data = {
    "current":current,
    "pageSize":10
  }
  fetch('/api/article/getRecentPost',{
    method: 'post',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(data=>data.json())
  .then(data=>{
    data.data.data.forEach(element=>{
      element.createTime = dayjs(element.createTime).format("YYYY年MM月DD日")
    })
    articleCardList.value = data.data.data;
    total.value = data.data.total;
    localStorage.setItem('articleCardList'+current,JSON.stringify(data.data.data))
  })
}
function handleChange(current:Number){
  window.location.href="/page/"+current;
}
</script>

<style scoped>
#recent-post{
  width: 100%;
  height: 100%;
}
#recent-post .recent-post-item{
  height: 14em;
  margin-top: 15px;
}
#recent-post .recent-post-cover{
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  height: 100%;
}
#recent-post .recent-post-item img{
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  object-fit: cover;
}

#recent-post .recent-post-item .recent-post-info{
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 2rem;
  text-align: left;
}
#recent-post .recent-post-item .recent-post-info .title{
  font-size: 1.72rem;
  color: #1f2d3d;
  transition: all 0.3s ease-in-out;
  line-height: 1.4;
}
#recent-post .recent-post-item .recent-post-info .title:hover{
  color: var(--lkk-purple);
}
#recent-post .recent-post-item .recent-post-info .create-date,#recent-post .recent-post-item .recent-post-info .tag{
  text-align: left;
  font-size: 0.9rem;
  color: #858585;
}
#recent-post .recent-post-item .recent-post-info .icon{
  height: 16px;
  width: 16px;
  padding: 5px;
  box-sizing:unset;
}
#recent-post .recent-post-item .recent-post-info .description,#recent-post .recent-post-item .recent-post-info .title{
  color: #4c4948;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
#recent-post .recent-post-item:hover img{
  transform: scale(1.1);
}
.el-col,.el-row{
  height: 100%;
  width: 100%;
}

#recent-post .recent-post-cover::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.5);;
    content: '';
    -webkit-transition: -webkit-transform .3s;
    -moz-transition: -moz-transform .3s;
    -o-transition: -o-transform .3s;
    -ms-transition: -ms-transform .3s;
    transition: transform .3s;
    -webkit-transform: scale3d(2,1,1) rotate(60deg) translate3d(15%,-150%,0);
    -moz-transform: scale3d(2,1,1) rotate(60deg) translate3d(15%,-150%,0);
    -o-transform: scale3d(2,1,1) rotate(60deg) translate3d(15%,-150%,0);
    -ms-transform: scale3d(2,1,1) rotate(60deg) translate3d(15%,-150%,0);
    transform: scale3d(2,1,1) rotate(60deg) translate3d(15%,-150%,0)
}

#recent-post .recent-post-cover:hover::after {
    -webkit-transform: scale3d(2,1,1) rotate(60deg) translate3d(0,130%,0);
    -moz-transform: scale3d(2,1,1) rotate(60deg) translate3d(0,130%,0);
    -o-transform: scale3d(2,1,1) rotate(60deg) translate3d(0,130%,0);
    -ms-transform: scale3d(2,1,1) rotate(60deg) translate3d(0,130%,0);
    transform: scale3d(2,1,1) rotate(60deg) translate3d(0,130%,0)
}
@media screen and (max-width: 768px) {
  #recent-post .recent-post-item{
    height: auto;
  }
  #recent-post .recent-post-item img{
    height: 180px;
    width: 100%;
  }
  #recent-post .recent-post-item .recent-post-info{
    padding: 10px 15px 20px;
    margin-top: 0px;
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