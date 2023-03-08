<template>
<el-row>
  <el-avatar :icon="UserFilled" />
  <div class="tk-meta-input">
    <el-input v-for="metaInput in metaInputs"
        :key="metaInput.key"
        :name="metaInput.name"
        :type="metaInput.type"
        placeholder="请输入"
        v-model="metaData[metaInput.key]"
        size="small"
        @change="onMetaChange">
      <template slot="prepend">{{ metaInput.locale }}</template>
    </el-input>
  </div>
</el-row>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import {ref,computed} from 'vue'

const metaInputs = [{
    key: 'name', locale: "123", name: 'name', type: 'text'
},{
    key: 'mail', locale: "123", name: 'mail', type: 'email'
},{
    key: 'link', locale: "123", name: 'link', type: 'text'
}]
const metaData = ref({
    name:"",
    mail:"",
    link:""
})

function onMetaChange(){
    updateMeta();
}
function updateMeta(){
    localStorage.setItem('metaData', JSON.stringify(metaData));
    console.log(metaData);
}

</script>

<style scoped>
.tk-meta-input {
  display: flex;
}
.tk-meta-input .el-input {
  width: auto;
  width: calc((100% - 1rem) / 3); /* Fix Safari */
  flex: 1;
}
.tk-meta-input .el-input + .el-input {
  margin-left: 0.5rem;
}
.tk-meta-input .el-input .el-input-group__prepend {
  padding: 0 1rem;
}
.tk-meta-input .el-input input:invalid {
  border: 1px solid #f56c6c;
  box-shadow: none;
}
@media screen and (max-width: 767px) {
  .tk-meta-input {
    flex-direction: column;
  }
  .tk-meta-input .el-input {
    width: auto;
  }
  .tk-meta-input .el-input + .el-input {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}

.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>