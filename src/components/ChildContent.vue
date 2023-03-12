<template>
  <div v-for="comment in childComment">
    <el-container id="child-comment">
      <el-aside width="60px">
        <avatar :mail=comment.userEmail></avatar>
      </el-aside>
      <el-main>
        <div class="row">
          <div class="meta">
            <strong class="nick">{{comment.userName}}</strong>
            <small class="time">{{comment.createTime}}</small>
          </div>
          <el-icon id="child-replay-icon" @click="isReplay(comment)"><ChatDotRound /></el-icon>
        </div>
        <div class="content">
          <p>{{comment.content}}</p>
        </div>
      </el-main>
    </el-container>
    <child :childComment = comment.child :parentComment = comment  v-if="comment.child!=null"></child>
    <replay :parentComment = comment v-if="replayId===comment.id"></replay>
  </div>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'
import child from './ChildContent.vue'
import avatar from './Avatar.vue'
import {ChatDotRound } from '@element-plus/icons-vue'
import replay from './CommentSubmit.vue'

const props = defineProps({
    childComment:{},
    parentComment:{},
})
let replayId=ref();
function isReplay(comment:Object){
  localStorage.setItem("replayId",comment.id);
  replayId.value=comment.id;
}
</script>

<style scoped>
.el-main {
    --el-main-padding: 10px;
}
#child-comment{
    margin-top:1rem;
}
#child-comment .content{
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
.comment-font{
    text-align:"left"
}

.row .nick{
  margin-right:0.5rem;
}
</style>