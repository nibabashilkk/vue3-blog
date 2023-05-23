<template>
<nav class="show" id="nav">
  <div id="nav_group">
    <div class="nav_left">
      <div id="list-button"><i class="icon iconfont icon-grip-vertical"></i>
        <div id="list-content">
          <div class="tips">网站</div>
          <div class="list-box"><a class="list-item" target="_blank" rel="noopener" href="/"><img
                src="https://cdn.xiaoliu.life/about/head.jpg" alt=""><span>主页</span></a></div>
        </div>
      </div><a id="site-name" href="/" title="博客首页" data-pjax-state=""><span>xiaoliu</span>
        <i class="icon iconfont icon-home"></i></a>
    </div>
    <div id="page_title"><a href="javascript:;" rel="noopener external nofollow" onclick="btf.scrollToDest(0, 500)"
        title="返回顶部" data-pjax-state="">爱加班的小刘</a></div>
    <div class="menus_items">
      <div class="menus_item"><a class="site-page group hide" href="javascript:void(0);"
          rel="noopener external nofollow" data-pjax-state=""><i class="fa-fw"></i><span> 文库</span><i
            class="fas fa-chevron-down"></i></a>
        <ul class="menus_item_child">
          <li><a class="site-page child" href="/category/" data-pjax-state=""><i
                class="fa-fw fa-solid fa-table-list"></i><span>分类</span></a></li>
          <li><a class="site-page child" href="/essay/" data-pjax-state=""><i class="fa-fw fa-solid fa-box"></i><span>
                即刻短文</span></a></li>
        </ul>
      </div>
      <div class="menus_item"><a class="site-page group hide" href="javascript:void(0);"
          rel="noopener external nofollow" data-pjax-state=""><i class="fa-fw"></i><span> 我的</span><i
            class="fas fa-chevron-down"></i></a>
        <ul class="menus_item_child">
          <li><a class="site-page child" target="_blank" rel="noopener" href="https://vip.xiaoliu.life/"><i
                class="fa-fw fa-solid fa-images"></i><span> 电影解析</span></a></li>
          <li><a class="site-page child" href="/about/" data-pjax-state=""><i
                class="fa-fw fa-solid fa-graduation-cap"></i><span> 我的空间</span></a></li>
        </ul>
      </div>
    </div>
    <div id="buttons">
      <div><a class="site-page social-icon search" href="javascript:;" rel="noopener external nofollow"
          :onclick="getRandomArticle" title="随便看看 - 随机访问一篇本站文章" data-pjax-state="">
          <i class="icon iconfont icon-suiji"></i>
        </a></div>
      <div id="switch-bg"><a class="site-page social-icon" onclick="lkk.switchDarkMode()" title="切换模式 - 日夜交替，黑白互换。"
          data-pjax-state="">
          <i class="icon iconfont icon-yejianmoshi"></i>
        </a></div>
      <div id="search-button">
        <a class="site-page social-icon search" title="搜索内容 - 搜一搜，省时又省力。">
        <span class="icon iconfont icon-sousuo"></span>
        </a>
      </div>
      <div id="toggle-menu"><a class="site-page" title="打开菜单"><i class="fas fa-bars fa-fw"></i></a>
      </div>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const url = inject("url");
function getRandomArticle(){
    fetch(url+'/article/getRandomArticle',{
        method:'get'
    }).then(data=>data.json()).then(data=>{
        console.log("/p/"+data.data.articleId);
        window.location.href="/p/"+data.data.articleId;
    })
}
</script>

<style scoped>
.icon-home{
    font-size: 32px;
}
#nav.show {
    -webkit-animation: headerNoOpacity 1s;
    -moz-animation: headerNoOpacity 1s;
    -o-animation: headerNoOpacity 1s;
    -ms-animation: headerNoOpacity 1s;
    animation: headerNoOpacity 1s
}
#nav {
    z-index: 90;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    font-size: 1.3rem;
    opacity: 0;
    backdrop-filter: blur(20px) saturate(1.5);
    position: fixed;
}

#nav a {
    color: var(--font-color);
    text-shadow: none
}
@media screen and (max-width:768px) {
    #nav {
        font-size: 20px
    }
}

#nav.show {
    opacity: 1;
    -ms-filter: none;
    filter: none
}

#nav #nav_group {
    width: 100%;
    height: 100%;
    max-width: 1220px;
    margin: 0 16px;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -o-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

@media screen and (max-width:768px) {
    #nav #nav_group {
        margin: 0 6px
    }
}

@media screen and (min-width:2000px) {
    #nav #nav_group {
        max-width: 1480px
    }
}

#nav .nav_left {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    height: 45px;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

#nav .nav_left>div {
    height: 45px;
    width: 45px;
    line-height: 1;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center
}

#nav .nav_left>div:not(#toggle-menu) {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex
}

@media screen and (max-width:768px) {
    #nav .nav_left>div {
        height: 40px;
        width: 40px
    }
}

#nav #buttons {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
}

#nav #buttons a {
    height: 45px;
    width: 45px;
    line-height: 1;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center
}

#nav #buttons a:not(#toggle-menu) {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex
}

@media screen and (max-width:768px) {
    #nav #buttons a {
        height: 40px;
        width: 40px
    }
}

#nav #toggle-menu {
    display: none
}

#nav #list-button {
    margin-right: 3px;
    position: relative
}

@media screen and (max-width:768px) {
    #nav #list-button {
        display: none !important
    }
}

#nav #list-button #list-content {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-transition: all 0s ease 0s;
    -moz-transition: all 0s ease 0s;
    -o-transition: all 0s ease 0s;
    -ms-transition: all 0s ease 0s;
    transition: all 0s ease 0s;
    opacity: 0;
    pointer-events: none;
    background: var(--lkk-light);
    border: 1px solid rgba(207, 207, 207, .8);
    border-radius: 12px;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -o-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 60px;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    -ms-transition: .3s;
    transition: .3s
}

#nav #list-button #list-content::before {
    content: '';
    height: 20px;
    position: absolute;
    top: -20px;
    width: 100%;
    left: 0;
    opacity: 0
}

#nav #list-button #list-content:hover {
    border-color: var(--lkk-purple)
}

#nav #list-button #list-content * {
    color: var(--font-color)
}

#nav #list-button #list-content .tips {
    font-size: 14px;
    margin: 10px 0 0 10px
}

#nav #list-button #list-content .list-item {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    padding: 10px 5px;
    margin: 7px 5px;
    border-radius: 10px;
    width: 170px;
    font-size: 17px;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    white-space: nowrap
}

#nav #list-button #list-content .list-item:hover {
    background: var(--lkk-purple)
}

#nav #list-button #list-content .list-item:hover span {
    color: #fff
}

#nav #list-button #list-content .list-item img,
#nav #list-button #list-content .list-item svg {
    width: 25px;
    font-size: 25px;
    margin-right: 6px;
    border-radius: 100px
}

#nav #list-button:hover #list-content {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    opacity: 1;
    -ms-filter: none;
    filter: none;
    -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    -ms-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    top: 55px;
    pointer-events: auto
}

#nav #site-name {
    height: 45px;
    padding: 0 5px;
    position: relative;
    font-weight: 700;
    cursor: pointer;
    display: inline-block
}

@media screen and (max-width:768px) {
    #nav #site-name {
        height: 40px;
    }
}

#nav #site-name span {
    line-height: 1;
    font-size: 1.5rem
}

@media screen and (max-width:768px) {
    #nav #site-name span {
        font-size: 20px;
    }
}

#nav #site-name i {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0
}

#nav #site-name:hover i {
    opacity: 1;
    -ms-filter: none;
    filter: none
}

#nav #site-name:hover span {
    opacity: 0
}

#nav #page_title {
    position: absolute;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    left: 50%;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    white-space: nowrap
}

@media screen and (max-width:900px) {
    #nav #page_title {
        display: none
    }
}

#nav #page_title a {
    position: absolute;
    height: 100%;
    left: 50%;
    top: 60px;
    letter-spacing: 1px;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 60px;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0)
}

#nav #page_title a:hover {
    color: var(--lkk-purple)
}

#nav .menus_items {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    -ms-transition: .3s;
    transition: .3s;
    position: absolute;
    left: 50%;
    height: 100%;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
    white-space: nowrap
}
@media screen and (max-width: 768px){
#nav .menus_items{
    display: none;
}
}

#nav .menus_items .menus_item {
    position: relative;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    height: 45px;
    padding: 0 15px;
    letter-spacing: 5px;
    margin: 0 2px
}

#nav .menus_items .menus_item .menus_item_child {
    left: -130px
}

#nav .menus_items .menus_item:hover .menus_item_child {
    display: block
}

#nav .menus_items .menus_item>a>span {
    padding-left: 5px;
    font-weight: 700;
}

#nav .menus_items .menus_item>a>i {
    display: none
}

#nav .menus_items .menus_item .menus_item_child {
    position: absolute;
    font-weight: 400;
    letter-spacing: 0;
    display: none;
    margin-top: 12px;
    padding: 0;
    width: max-content;
    background-color: var(--lkk-light);
    border: 1px solid #ccc;
    animation: sub_menus .3s .1s ease both;
    border-radius: 10px
}

#nav .menus_items .menus_item .menus_item_child:before {
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 20px;
    content: '';
    z-index: 100;
}

#nav .menus_items .menus_item .menus_item_child li {
    list-style: none;
    display: inline-block;
    margin: 5px;
    
}

#nav .menus_items .menus_item .menus_item_child li a {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 10px
}

#nav .menus_items .menus_item .menus_item_child li a:hover {
    background: var(--lkk-purple);
    color: #fff !important;
}

#nav.hide-menu #toggle-menu {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: box;
    display: flex
}

#nav.hide-menu #toggle-menu .site-page {
    font-size: inherit
}

#nav.hide-menu .menus_items {
    display: none
}

#nav .site-page {
    position: relative;
    cursor: pointer
}

#nav .site-page:not(.child) {
    background: 0
}

#nav #buttons div,
#nav #list-button,
#nav #site-name,
#nav .menus_items .menus_item {
    border-radius: 10px
}

@media screen and (max-width:768px) {

    #nav #buttons div,
    #nav #list-button,
    #nav #site-name,
    #nav .menus_items .menus_item {
        border-radius: 8px
    }
}

#nav #buttons div:hover,
#nav #list-button:hover,
#nav #site-name:hover,
#nav .menus_items .menus_item:hover {
    background: var(--lkk-purple)
}

#nav #list-button:hover a,
#nav #list-button:hover i,
#nav #site-name:hover a,
#nav #site-name:hover i {
    color: #fff
}

#nav #buttons div:hover>a i,
#nav #buttons div:hover>a span,
#nav .menus_items .menus_item:hover>a i,
#nav .menus_items .menus_item:hover>a span {
    color: #fff
}

#nav #buttons,
#nav .nav_left {
    z-index: 2
}
</style>