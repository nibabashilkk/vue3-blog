<script setup lang='ts'>
import {ref,computed} from 'vue'
import {getQQAvatar} from '../utils/avatar.ts'
const props = defineProps({
  mail: String})
let avatar = computed(()=>{
  return getQQAvatar(props.mail);
})
</script>

<template>
  <div class="avatar">
    <img class="avatar-img" :src="avatar" alt="">
  </div>
</template>

<style scoped>
.avatar {
  flex-shrink: 0;
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  margin-right: 1rem;
}
.avatar .avatar-img {
  height: 2.5rem;
  color: #c0c4cc;
}
</style>