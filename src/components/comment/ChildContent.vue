<template>
  <div v-for="comment in childComment">
    <div id="child-comment">
      <div class="avatar">
        <avatar :mail=comment.userEmail></avatar>
      </div>
      <el-main>
        <div class="row">
          <div class="meta">
          <strong class="nick">{{comment.userName}}</strong>
          <small class="time">{{comment.createTime}}</small>
          </div>
          <el-icon id="child-replay-icon" @click="isReplay(comment)"><ChatDotRound /></el-icon>
        </div>
        <div class="content">
          <p v-if="props.parentComment">回复
            <a>@{{ props.parentComment.userName }}</a>
            :
          <br>
          {{comment.content}}</p>
        </div>
      </el-main>
    </div>
    <child :childComment = comment.child :parentComment = comment :blogId = props.blogId :replayId = replayId @replay-id="setReplayId" v-if="comment.child!=null"></child>
    <replay :parentComment = comment :blogId = props.blogId  v-if="replayId===comment.id"></replay>
  </div>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'
import child from './ChildContent.vue'
import avatar from '../aside/Avatar.vue'
import {ChatDotRound } from '@element-plus/icons-vue'
import replay from './CommentSubmit.vue'

const emits = defineEmits(['replay-id'])
const props = defineProps({
    childComment:Object,
    parentComment:Object,
    blogId:String,
    replayId:Number
})
let replayId=ref(props.replayId);

watch(()=>props.replayId,(newValue:any,oldValue)=>{
  replayId.value = newValue;
})
function setReplayId(value){
  replayId.value = value;
  emits('replay-id',replayId.value)
}
function isReplay(comment:any){
  replayId.value=comment.id;
  emits('replay-id',replayId.value)
}
</script>

<style scoped>
.el-main{
  padding: 0px;
}
#child-comment{
  display: flex;
  margin-top:1rem;
}
#child-comment .avatar{
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 0.5rem;
}
#child-comment .content{
    text-align: left;
    padding: 0;
    background: rgb(235 235 235 / 60%);
    margin-top: 0.5rem;
    overflow: auto;
    max-height: 500px;
    border-radius: 10px;
    display: flex;
    padding: 10px 15px;
}
#child-comment .content p{
  margin: 0px;
}
.row {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

small {
    font-size: 80%;
}

.row .nick{
  margin-right:0.3rem;
}
</style>