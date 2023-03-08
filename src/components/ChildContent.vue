<template>
    <div>
        <ul v-for="comment in childComment">
        <li>{{comment.content}}</li>
        <child :childComment = comment.child :parentComment = comment v-if="comment.child!=null"></child>
        </ul>
    </div>
</template>

<script setup lang="ts">
import child from './ChildContent.vue'
const props = defineProps({
    childComment:{},
    parentComment:{}
})
</script>

<style scoped>

</style>