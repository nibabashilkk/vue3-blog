<template>
    <nav class="pagination-post" id="pagination" v-if="preAndNextArticle">
        <el-row>
        <el-col :lg="leftWidth" :md="leftWidth" :sm="24"  v-if="preAndNextArticle.preArticle">
        <div class="prev-post pull-left">
            <a :href='"/p/"+preAndNextArticle.preArticle.articleId' :title='preAndNextArticle.preArticle.title'>
                <img class="cover" :src=preAndNextArticle.preArticle.cover onerror="onerror=null;src='/img/404.jpg'" alt="cover of previous post">
                    <div class="pagination-info">
                        <div class="label">上一篇</div>
                        <div class="prev_info">{{ preAndNextArticle.preArticle.title }}</div>
                    </div>
            </a>
        </div>
        </el-col>
        <el-col :lg="rightWidth" :md="rightWidth" :sm="24" v-if="preAndNextArticle.nextArticle">
        <div class="next-post pull-right">
            <a :href='"/p/"+preAndNextArticle.nextArticle.articleId' :title="preAndNextArticle.nextArticle.title">
                <img class="cover" :src='preAndNextArticle.nextArticle.cover' onerror="onerror=null;src='/img/404.jpg'" alt="cover of next post">
                    <div class="pagination-info">
                        <div class="label">下一篇</div>
                        <div class="next_info">{{ preAndNextArticle.nextArticle.title }}</div>
                    </div>
            </a>
        </div>
        </el-col>
        </el-row>
    </nav>
</template>

<script setup lang="ts">
import {ref,inject} from 'vue'
const props = defineProps({
    id:Number
})

const url = inject("url");
let preAndNextArticle = ref();
let leftWidth = ref(12);
let rightWidth = ref(12);

getPreAndNextArticle(props.id)

function getPreAndNextArticle(id:any){
    fetch(url+'/article/getPreAndNextArticle',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: id
    }).then(data=>data.json())
    .then(data=>{
        preAndNextArticle.value = data.data
        if(data.data.preArticle==null){
            leftWidth.value = 0;
            rightWidth.value = 24;
        }else if(data.data.nextArticle==null){
            leftWidth.value = 24;
            rightWidth.value = 0;
        }
    })
}
</script>

<style scoped>
#pagination{
    width: calc(100% - 100px);
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}
#pagination .prev-post,#pagination .next-post{
    width: 100%;
    height: 100%;
    transition: .3s;
}
#pagination .pull-left{
    float: left;
    border-radius: 12px;
}
#pagination .pull-right{
    float: right;
    border-radius: 12px;
}
#pagination .prev-post a,#pagination .next-post a{
    position: relative;
    height: 180px;
    display: block;
    overflow: hidden;
}
#pagination .prev-post img,#pagination .next-post img{
    width: 100%;
    height: 100%;
    opacity: .5;
    transition: .3s;
    object-fit: cover;
}
#pagination .pagination-info{
    position: absolute;
    top: 50%;
    padding: 20px 40px;
    width: 100%;
    transform: translate(0, -50%);
}
#pagination .prev-post .label,#pagination .next-post .label{
    color: var(--font-color);
    text-transform: uppercase;
    font-size: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#pagination .prev_info,#pagination .next_info{
    color: var(--font-color);
    font-weight: 500;
}
#pagination .next-post .pagination-info {
    text-align: right;
}
#pagination .prev-post .pagination-info{
    text-align: left;
}
#pagination .next-post:hover,#pagination .prev-post:hover{
    background-color: var(--lkk-relatedPosts) !important;
    border-color: var(--lkk-relatedPosts);
}
#pagination .next-post:hover *,#pagination .prev-post:hover *{
    color: #fff !important
}
#pagination .next-post:hover img,
#pagination .prev-post:hover img{
    opacity: 0;
}

@media screen and (max-width: 768px){
    #pagination{
        width: calc(100% - 30px);
    }
}
</style>