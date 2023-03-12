<script setup lang="ts">
import { ref,computed } from 'vue'
import Content from './CommentContent.vue'
import Submit from './CommentSubmit.vue'
</script>

<template>
  <div>
    <Submit/>
    <Content/>
  </div>
</template>

<style scoped>
</style>
