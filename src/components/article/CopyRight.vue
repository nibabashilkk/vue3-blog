<template>
<div id="post-copyright">
    <div class="post-copyright__author">
        <span class="post-copyright-meta">文章作者: </span>
        <span class="post-copyright-info"><a href="https://xiaoliu.life">xiaoliu</a></span>
    </div>
    <div class="post-copyright__type">
        <span class="post-copyright-meta">文章链接: </span>
        <span class="post-copyright-info"><a :href=url>{{ url }}</a></span></div>
    <div class="post-copyright__notice">
        <span class="post-copyright-meta">版权声明: </span>
        <span class="post-copyright-info">本博客所有文章除特别声明外，均采用 
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 许可协议。转载请注明来自 
            <a href="https://xiaoliu.life" target="_blank">爱加班的小刘</a>！
        </span>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps({
    articleId:String
})
let url = ref("https://xiaoliu.life/p/"+props.articleId);
</script>

<style scoped>
#post-copyright{
    width: calc(100% - 100px);
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin: 40px auto 10px;
    padding: 10px 16px;
    text-align: left;
}
#post-copyright .post-copyright-meta{
    color: #4976f5;
    font-weight: 700;
}
#post-copyright .post-copyright-info{
    padding-left: 6px;
}
#post-copyright .post-copyright-info a{
    text-decoration: underline;
    color: #99a9bf;
}
@media screen and (max-width: 768px){
    #post-copyright{
        width: calc(100% - 30px);
    }
}
</style>