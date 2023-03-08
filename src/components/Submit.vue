<template>
  <div class="tk-submit">
    <div class="tk-row">
      <!-- <check-adminCrypt></check-adminCrypt> -->
      <div class="tk-col">
        <CheckcSubmit/>
        <el-input class="tk-input"
            type="textarea"
            ref="textarea"
            v-model="comment"
            show-word-limit
            placeholder="请输入"
            :autosize="{ minRows: 3 }"
            maxlength="500"
            @input="onCommentInput"
            @keyup.enter.native="onEnterKeyUp($event)" />
      </div>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue'
import Avatar from './Avatar.vue'
import CheckcSubmit from './CheckSubmit.vue'


const props = defineProps({
})

let comment = ref("");

function saveDraft(){
  localStorage.setItem("draft",comment);
}
function onCommentInput(){
  saveDraft();
  console.log(comment);
}
</script>

<style scoped>
.tk-submit {
  display: flex;
  flex-direction: column;
}
.tk-row {
  display: flex;
  flex-direction: row;
}
.tk-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.tk-input {
  flex: 1;
}
</style>