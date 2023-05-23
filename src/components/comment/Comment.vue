<script setup lang="ts">
import Content from './CommentContent.vue'
import Submit from './CommentSubmit.vue'

const props = defineProps({
  blogId:String
})
console.log(props.blogId)
</script>

<template>
  <hr>
  <div id="comment">
    <div class="comment-head">
      <i class="icon iconfont icon-pinglun"></i>
      <span>评论</span>
    </div>
    <div class="comment-submit">
    <Submit :blogId=props.blogId />
    </div>
    <Content :blogId = props.blogId />
  </div>
</template>

<style scoped>
#comment .comment-head{
  display: inline-block;
  vertical-align: middle;
  font-weight: 700;
  font-size: 1.43em;
  margin-bottom: 20px;
}
#comment .icon-pinglun{
  margin-right: 5px;
  font-size: 30px;
}
#comment .comment-submit{
  margin-bottom: 20px;
}
#comment,hr{
  width: calc(100% - 100px);
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
hr{
  position: relative;
  margin: 40px auto;
  border: 2px dashed var(--hr-border);
}
@media screen and (max-width: 768px){
  #comment,hr{
    width: calc(100% - 30px);
  }
}
</style>
