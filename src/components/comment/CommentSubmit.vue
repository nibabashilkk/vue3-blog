<template>
  <div id="submit" class="tk-submit">
    <div id="submit-row" class="tk-row">
      <el-container>
        <div class="avatar">
        <el-avatar :icon="UserFilled" />
        </div>
        <el-main>
          <div class="tk-col">
            <el-row>
              <div class="tk-meta-input">
                <el-input v-for="metaInput in metaInputs"
                    :key="metaInput.key"
                    :name="metaInput.name"
                    :type="metaInput.type"
                    placeholder="请输入"
                    v-model="metaData[metaInput.key]">
                  <template #prepend>{{ metaInput.locale }}</template>
                </el-input>
              </div>
            </el-row>
            <el-input class="tk-input"
                type="textarea"
                ref="textarea"
                v-model="metaData['comment']"
                show-word-limit
                placeholder="请输入"
                :autosize="{ minRows: 6 }"
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
import {ref,inject} from 'vue'

const props = defineProps({
  parentComment: Object,
  blogId:String
})

const metaInputs = [{
    key: 'name', locale: "昵称", name: 'name', type: 'text'
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
    userName: metaData.value.name,
    createTime: "",
    isDelete: "0",
    blogId: props.blogId,
    parentId: props.parentComment ? props.parentComment.id : '-1'
  }
  console.log(data)
  fetch(url+"/comment/addComment",{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  }).then(data=>data.json())
  .then(data=>{
    if(data.code==400){
      alert(data.message);
    }else if(data.code==200){
      alert("评论成功，刷新页面显示")
    }
  }).catch(error=>{
    console.log(error)
  }
  )
}
</script>

<style scoped>
#submit .avatar{
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
}
.el-main{
  --el-main-padding: 0px;
}
.tk-submit {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, .6);
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
@media screen and (max-width: 768px) {
  .tk-meta-input {
    flex-direction: column;
    width: 100%;
  }
  .tk-meta-input .el-input {
    width: auto;
  }
  .tk-meta-input .el-input + .el-input {
    margin-left: 0;
    margin-top: 0.5rem;
  }
  #submit .avatar{
    margin-right: 0.5rem;
  }
}
</style>