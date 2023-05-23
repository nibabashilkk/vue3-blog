<template>
  <div v-for="comment in commentList">
    <div class="border">
      <el-container id="comment-content">
        <div class="avatar">
          <Avatar :mail=comment.userEmail></Avatar>
        </div>
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
            <child :childComment = comment.child :parentComment = comment :blogId = props.blogId :replayId = replayId @replay-id="setReplayId" v-if="comment.child!=null"></child>
            <replay :parentComment = comment :blogId=props.blogId v-if="replayId===comment.id"></replay>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '../aside/Avatar.vue'
import {ref,inject} from 'vue'
import child from './ChildContent.vue'
import replay from './CommentSubmit.vue'
import {ChatDotRound } from '@element-plus/icons-vue'

const props = defineProps({
  blogId:String
})
const url = inject("url");
let replayId=ref();
function isReplay(comment:any){
  replayId.value=comment.id;
}
getComments();
let commentList =ref();

function setReplayId(value){
  replayId.value = value
}
function getComments(){
  let uri = url+'/comment/get/'+props.blogId;
  fetch(uri,{
    method:'get'
  }).then(data=>data.json()).then(data=>{
    commentList.value = data.data;
  })
}
</script>

<style scoped>
#comment-content > .avatar{
  margin-right: 1rem;
}
.el-main{
  padding: 0px;
}
#comment-content .content{
  text-align: left;
  padding: 0;
  background: rgb(235 235 235 / 60%);
  margin-top: 0.5rem;
  overflow: auto;
  max-height: 500px;
  border-radius: 10px;
  padding: 10px 15px;
}
#comment-content .content p{
  margin: 0px;
}
.row {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
.row .nick{
  margin-right:0.5rem;
}
@media screen and (max-width: 768px) {
  #comment-content > .avatar{
    margin-right: 0.5rem;
  }
}
</style>