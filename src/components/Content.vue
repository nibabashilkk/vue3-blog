<template>
  <div class="common-layout">
    <el-container>
        <el-aside width="60px">
          <Avatar mail="1449584369@qq.com"/>
        </el-aside>
        <el-main>
          <ul v-for="comment in commentList">
            <li>{{comment.content}}</li>
            <child :childComment = comment.child :parentComment = comment v-if="comment.child!=null"></child>
          </ul>
        </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Avatar from './Avatar.vue'
import axios from 'axios'
import {ref} from 'vue'
import {base64Encode} from '../utils/base64.ts'
import child from './ChildContent.vue'

getComments();
let commentList =ref();



function getComments(){
  let blogId = base64Encode("/essay/");
  let url = "https://xcx.xiaoliu.life/comment/get/"+blogId;
  console.log(url);
  axios.get(url).then(data=>{
    commentList.value = data.data;
    console.log(commentList.value)
  })
}
</script>

<style scoped>

</style>