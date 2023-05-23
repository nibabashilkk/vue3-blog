<template>
    <div class="common-layout">
    <el-container>
        <el-header>
            <NavBar/>
        </el-header>
        <el-main>
            <div class="main">
            <div id="article" v-if="articleDate!=null">
                <el-row>
                    <el-col :lg="6" style="padding-right: 15px;" class="hidden-md-and-down">
                        <Aside></Aside>
                    </el-col>
                    <el-col :lg="18" :md="24">
                        <div class="article-main">
                            <el-row>
                                <div class="article-cover" :style="cover">
                                    <div class="article-info">
                                        <el-row>
                                            <div class="category">
                                                <span class="icon iconfont icon-fenlei"></span>
                                                <span>{{ articleDate.categoryName }}</span>
                                            </div>
                                            <el-row>
                                                <div class="tag" v-for="tag in articleDate.tagNames">
                                                    <span>#{{ tag }}</span>
                                                </div>
                                            </el-row>
                                        </el-row>
                                        <el-row>
                                            <div class="title">
                                                <h1>{{ articleDate.title }}</h1>
                                            </div>
                                        </el-row>
                                        <el-row>
                                            <div class="date">
                                                <span class="icon iconfont icon-rili"></span>
                                                <span>发表于{{ articleDate.createTime }}</span>
                                            </div>
                                            <div class="date">
                                                <span class="icon iconfont icon-gengxinshijian"></span>
                                                <span>更新于{{ articleDate.updateTime }}</span>
                                            </div>
                                        </el-row>
                                        <el-row>
                                            <div class="other">
                                                <span>{{ articleDate.articleVisits }}</span>
                                            </div>
                                        </el-row>
                                    </div>
                                </div>
                            </el-row>
                            <el-row>
                                <div class="article-content">
                                    <!-- <MdEditor v-model="articleDate.content" :previewOnly="true"></MdEditor> -->
                                    <!-- <div v-html="content"></div> -->
                                    <MdEditor v-model="content" previewOnly />
                                </div>
                            </el-row>
                            <CopyRight :articleId=articleDate.articleId></CopyRight>
                            <PreAndNextArticle :id=articleDate.id></PreAndNextArticle>
                            <Comment :blogId = articleDate.articleId />
                        </div>
                    </el-col>
                </el-row>
            </div>
            </div>
        </el-main>
        <Footer></Footer>
    </el-container>
    </div>
</template>

<script setup lang="ts">
import {ref,inject} from 'vue'
import {useRoute} from 'vue-router'
import Aside from '../aside/Aside.vue'
import NavBar from '../head/NavBar.vue'
import Footer from '../foot/Footer.vue'
import 'element-plus/theme-chalk/display.css'
import  Comment  from '../comment/Comment.vue'
import CopyRight from './CopyRight.vue'
import PreAndNextArticle from './PreAndNextArticle.vue'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const url = inject("url");
const route = useRoute();
const articleId = route.params.articleId;
let localStorageValue = localStorage.getItem(articleId.toString());
let value = localStorageValue!=null ? JSON.parse(localStorageValue) : null;
let articleDate = ref(value);
let cover = ref();
let content = ref();
if (articleDate.value){
    content.value = articleDate.value.content;
}
if(articleDate.value!=null){
    cover.value = "background-image: url("+articleDate.value.cover+");";
}
getArticle();


function getArticle(){
    fetch(url+'/article/getArticle',{
        method:'post',
        headers:{
            'Content-Type':'text/plain'
        },
        body: JSON.parse(JSON.stringify(articleId))
    }).then(data=>data.json()).then(data=>{
        articleDate.value = data.data;
        content.value = data.data.content;
        cover.value = "background-image: url("+articleDate.value.cover+");";
        localStorage.setItem(articleId.toString(),JSON.stringify(data.data));
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
#article .article-main .article-cover{
    margin-bottom: 2rem;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

}
#article .article-main .article-info{
    text-align: left;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 5rem 3rem;
    box-sizing: border-box;
    font-size: 15px;
}
#article .article-main .title h1{
    font-size: 40px;
    font-weight: 400;
    margin:10px auto;
}
#article .article-main .category,#article .article-main .tag,#article .article-main .date,#article .article-main .other{
    padding: 0 10px;
    display: inline-block;
    font-size: 15px;
    background: rgba(255, 255, 255, .2);
    border-radius: 6px;
    margin: 3px 10px 3px 0;
    color: #fff;
}
#article .article-main .category:hover,#article .article-main .tag:hover,#article .article-main .date:hover,#article .article-main .other:hover{
    background-color: var(--lkk-light);
    color: var(--font-color);
}
#article .article-main .article-content{
    width: calc(100% - 100px);
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    align-items:center; 
}
@media screen and (max-width: 768px) {
    #article .article-main .article-content{
        width: calc(100% - 30px);
    }
}
@media screen and (max-width: 768px) {
  #article .article-main .title h1{
    font-size: 1.8rem;
  }
  #article .article-main .article-info{
    padding: 2rem 1rem;
    text-align: center;
  }
}
</style>
<style scoped>
:deep(.article-content a){
    border-bottom: 2px var(--lkk-purple) solid;
    font-weight: 700;
    color: var(--font-color);
    word-break: break-all;
    padding: 0 3px;
    transition: all 0.3s;
}
:deep(.article-content a:hover){
    background-color: var(--lkk-purple);
    color: var(--lkk-light);
    border-radius: 8px;
}
:deep(.article-content .default-theme img){
    border: none;
    border-radius: 12px;
}
:deep(.md-editor-content .md-editor-preview-wrapper){
    padding: 0px;
}
</style>
<style scoped>
.icon-rili,.icon-gengxinshijian,.icon-fenlei{
    font-size: 16px;
    margin-right: 4px;
}
</style>