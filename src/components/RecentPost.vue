<template>
  <div id="recent-post">
    <div v-for="(articleCard,index) in articleCardList">
        <div class="recent-post-item">
          <el-row>
              <el-col :span=10>
                <img :src="articleCard.cover" :alt="articleCard.title">
              </el-col>
              <el-col :span=14>
                <div class="recent-post-info">
                  <el-row>
                    <div class="title">
                      <span>{{ articleCard.title }}</span>
                    </div>
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
                      <span>{{ articleCard.description }}</span>
                    </div>
                  </el-row>
                </div>
              </el-col>
          </el-row>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from 'axios'

let articleCardList = ref();



getData();
function getData(){
  axios.get('api/article/getArticleByPage').then(data=>{
    articleCardList.value = data.data.data;
  })
}
</script>

<style scoped>
#recent-post{
  width: 100%;
  height: 100%;
}
.recent-post-item{
  background-color: var(--card-bg);
}
#recent-post .recent-post-item{
  height: 14em;
  margin-top: 15px;
  border: var(--lkk-border);
  border-radius: 12px;
}
#recent-post .recent-post-item img{
  width: 100%;
  height: 100%;
  max-height: 14rem;
  border-radius: 12px;
}
#recent-post .recent-post-item .el-row,#recent-post .recent-post-item{
  width: 100%;
  height: 100%;
}
#recent-post .recent-post-item .recent-post-info{
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 2rem;
}
#recent-post .recent-post-item .recent-post-info .title{
  font-size: 1.72rem;
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
}
</style>