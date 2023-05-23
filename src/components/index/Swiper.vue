<template>
  <div id="swiperbox">
    <div class="block text-center">
      <el-carousel height="14rem">
        <el-carousel-item v-for="item in swiperList" :key="item">
          <div class="swiper-cover">
            <img :src="item.cover" :alt="item.title">
          </div>
          <div class="swiper-info">
            <a :href="item.src">
              <div class="title">
                <span>{{ item.title }}</span>
              </div>
              <div class="createTime">
                <span>发布时间：{{ item.createDate }}</span>
              </div>
            </a>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'
let swiperHeight = ref();
let height = ref();
window.addEventListener('resize', handleResize);

function handleResize(){
  height.value = window.innerHeight;
}
watch(()=>height,(newValue:any,oldValue)=>{
  swiperHeight.value = newValue > 768 ? "14rem":"12rem";
})
const swiperList = [
  {
    "src":"/p/20230208a",
    "title":"上班摸鱼，这几个网站就够了",
    "createDate":"2023-02-08",
    "description":"分享几个摸鱼网站",
    "cover":"https://cdn.xiaoliu.life/tc/20230208a/cover.webp"
  },
  {
    "src":"/p/20221207a",
    "title":"p站，一个神奇的网站",
    "createDate":"2022-12-07",
    "description":"国内政策原因不能访问到国外的pixiv，分享几个国内镜像站",
    "cover":"https://cdn.xiaoliu.life/tc/20221207a/cover.png"
  }
]
</script>

<style scoped>
#swiperbox{
  height: 14rem;
}
.el-col{
  display: relative;
}

div#swiperbox::before {
    content: "推荐";
    position: absolute;
    z-index: 2;
    color: rgb(255, 255, 255);
    top: 0px;
    margin-left: 10px;
    letter-spacing: 3px;
    font-size: 15px;
    width: 65px;
    display: flex;
    justify-content: center;
    background: linear-gradient(90deg, rgb(255, 184, 99), rgb(255, 117, 0));
    border-radius: 0px 0px 12px 12px;
}
#swiperbox .swiper-cover{
  width: 100%;
  object-fit: cover;
}
#swiperbox .swiper-info{
  position: absolute;
  top: 30%;
  width: 100%;
  line-height: 1.5;
}
#swiperbox .swiper-info .title{
  font-size: 1.3rem;
  color: var(--lkk-light);
  margin: 2px 0;
}
#swiperbox .swiper-info .createTime{
  color: var(--lkk-light);
  margin: 2px 0;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
@media screen and (max-width: 768px){
#swiperbox{
  height: 12rem;
} 
}
</style>