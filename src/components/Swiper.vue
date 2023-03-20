<template>
  <div class="swiperbox">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{ clickable: true}"
      :autoplay="{ delay: 2500, disableOnInteraction: false}"
      :navigation="false"
      :modules="modules">
      <swiper-slide v-for="swiper in swiperList">
        <div :style="swiper.cover">
          <el-row>
            <div class="title">
              <span>
                {{ swiper.title }}
              </span>
            </div>
          </el-row>
          <el-row>
            <div class="createDate">
              <span>
                {{ swiper.createDate }}
              </span>
            </div>
          </el-row>
          <el-row>
            <div  class="description">
            <span>
              {{ swiper.description }}
            </span>
            </div>
          </el-row>
        </div>
      </swiper-slide>
      <!-- <swiper-slide><img  src="https://cdn.xiaoliu.life/tc/20221207a/cover.png" alt="" /></swiper-slide> -->
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'// 分页器
// import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination, Navigation, A11y]
const swiperList = [
  {
    "title":"上班摸鱼，这几个网站就够了",
    "createDate":"2023-02-08",
    "description":"分享几个摸鱼网站",
    "cover":"background: url(https://cdn.xiaoliu.life/tc/20230208a/cover.webp);"
  },
  {
    "title":"p站，一个神奇的网站",
    "createDate":"2022-12-07",
    "description":"国内政策原因不能访问到国外的pixiv，分享几个国内镜像站",
    "cover":"background: url(https://cdn.xiaoliu.life/tc/20221207a/cover.png);"
  }
]
</script>

<style scoped>
.swiperbox{
    border: var(--lkk-border);
    border-radius: 12px;
    height: 14rem;
}
img{
    width: auto;
    height: auto;
}

.swiper{
    width: 100%;
}
.title{
  width: 100%;
  font-size: 32px;
  margin-top: 3rem;
}
.createDate{
  width: 100%;
}
.description{
  width: 100%;
  font-size: 18px;
  margin-bottom: 3rem;
}
</style>