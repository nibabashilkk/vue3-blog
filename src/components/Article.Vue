<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import axios from 'axios'

const route = useRoute();
const articleId = route.params.articleId;
let articleDate = ref();
console.log(articleId)
getArticle();

function getArticle(){
    axios.post('/api/article/getArticle',articleId,{
        headers: {
    'Content-Type': 'text/plain'
    }
    }).then(data=>{
        console.log(data.data.data)
        articleDate.value=data.data.data
    })
    
}


</script>

<style scoped>

</style>