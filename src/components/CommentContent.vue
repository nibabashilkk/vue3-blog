<template>
  <div v-for="comment in commentList">
    <div class="border">
      <el-container id="comment">
        <el-aside width="60px">
          <Avatar :mail=comment.userEmail></Avatar>
        </el-aside>
        <el-main>
          <div class="row">
            <div class="meta">
              <strong class="nick">{{comment.userName}}</strong>
              <small class="time">{{comment.createTime}}</small>
            </div>
            <el-icon id="replay-icon" @click="isReplay(comment)"><ChatDotRound /></el-icon>
          </div>
          <div class="content">
            <p>{{comment.content}}</p>
          </div>
          <div class="replies replies-expand">
            <child :childComment = comment.child :parentComment = comment  v-if="comment.child!=null"></child>
            <replay :parentComment = comment v-if="replayId===comment.id"></replay>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from './Avatar.vue'
import axios from 'axios'
import {ref,computed} from 'vue'
import {base64Encode} from '../utils/base64.ts'
import child from './ChildContent.vue'
import replay from './CommentSubmit.vue'
import {ChatDotRound } from '@element-plus/icons-vue'

let replayId=ref();
function isReplay(comment:Object){
  localStorage.setItem("replayId",comment.id);
  replayId.value=comment.id;
}
getComments();
let commentList =ref();


function getComments(){
  let blogId = base64Encode("/essay/");
  let url = '/api/comment/get/'+blogId;
  console.log(url);
  axios.get(url).then(data=>{
    commentList.value = data.data;
  })
}
</script>

<style scoped>
.border{
  border-radius: 12px;
  border: 1px solid #e0e3ed;
  box-shadow: 0 5px 10px rgb(189 189 189 / 10%);
  transition: all .3s ease-in-out;
  margin-top: 1rem;
}
#comment{
  padding:15px;
  margin:1rem 1rem 1rem 1rem;
}
#comment .content{
  text-align: left;
}

.row {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content {
    padding: 0;
    background: transparent;
    margin-top: 0.5rem;
    overflow: auto;
    max-height: 500px;
    border-radius: 10px;
}

strong {
    font-weight: bolder;
}

small {
    font-size: 80%;
}

.replies {
    padding-bottom: 10px;
    max-height: 200px;
    overflow: hidden;
    position: relative;
}

.replies-expand {
    max-height: none;
}

.el-main {
    --el-main-padding: 10px;
}
.row .nick{
  margin-right:0.5rem;
}
</style>