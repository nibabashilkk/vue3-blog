<template>
  <div id="submit" class="tk-submit">
    <div id="submit-row" class="tk-row">
      <el-container>
        <el-aside width="60px">
          <el-avatar :icon="UserFilled" />
        </el-aside>
        <el-main>
          <div class="tk-col">
            <el-row>
              <div class="tk-meta-input">
                <el-input v-for="metaInput in metaInputs"
                    :key="metaInput.key"
                    :name="metaInput.name"
                    :type="metaInput.type"
                    placeholder="请输入"
                    v-model="metaData[metaInput.key]"
                    size="small">
                  <template slot="prepend">{{ metaInput.locale }}</template>
                </el-input>
              </div>
            </el-row>
            <el-input class="tk-input"
                type="textarea"
                ref="textarea"
                v-model="metaData['comment']"
                show-word-limit
                placeholder="请输入"
                :autosize="{ minRows: 3 }"
                maxlength="500" />
          </div>
          <div class="action">
            <el-button type="primary" round @click="submit">提交</el-button>
          </div>
        </el-main>
      </el-container>
    </div>
</div>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import {ref,computed} from 'vue'
import Avatar from './Avatar.vue'
import axios from 'axios'

const props = defineProps({
  parentComment: Object
})

const metaInputs = [{
    key: 'name', locale: "text", name: 'name', type: 'text'
},{
    key: 'mail', locale: "邮箱", name: 'mail', type: 'email'
},{
    key: 'link', locale: "网站", name: 'link', type: 'text'
}]
const metaData = ref({
    name:"",
    mail:"",
    link:"",
    comment:""
})

function submit(){
  let data = {
    id: "",
    content: metaData.value.comment,
    userEmail: metaData.value.mail,
    createTime: "",
    isDelete: "0",
    blogId: "/essay/",
    parentId: "-1"
  }
  console.log(data)
  axios.post("/api/comment/add",data).catch(error=>{
    console.log(error)
  }
  )
}
</script>

<style scoped>
.el-main{
  --el-main-padding: 0px;
}
.tk-submit {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, .6);
  border: 1px solid #e0e3ed;
  box-shadow: 0 5px 10px rgb(189 189 189 / 10%);
  transition: all .3s ease-in-out;
  border-radius: 12px;
  padding: 20px 10px 10px 10px;
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

.tk-meta-input {
  display: flex;
  margin-bottom:1rem;
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
.action{
  margin-top: 1rem;
  text-align: right;
}
</style>