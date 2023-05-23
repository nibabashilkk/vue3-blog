<script setup lang='ts'>
import {ref,computed} from 'vue'
import {getQQAvatar} from '../../utils/avatar.js'
const props = defineProps({
  mail: String})
let avatar = computed(()=>{
  return getQQAvatar(props.mail);
})
</script>

<template>
  <div class="avatar">
    <img class="avatar-img" :src="avatar" alt="图片获取失败">
  </div>
</template>

<style scoped>
.avatar {
  flex-shrink: 0;
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
  text-align: center;
}
.avatar .avatar-img {
  color: #c0c4cc;
  border-radius: 5px;
}
</style>