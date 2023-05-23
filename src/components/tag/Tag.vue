<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar/>
      </el-header>
      <el-main>
        <div class="main">
          <div id="tag">
            <div class="content">
              <el-row>
                <div class="head">
                  <span>标签页</span>
                </div>
              </el-row>
              <div id="tagItems">
                <div class="item" v-for="tag in tagList">
                  <div class="item-content">
                    <a :href="'/tag/'+tag.tagName+'/1'">
                      <div class="name">
                        <span>{{ tag.tagName}}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <Footer/>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {ref,inject} from 'vue'
import NavBar from '../head/NavBar.vue';
import Footer from '../foot/Footer.vue';

const url = inject('url')
let tagList = ref();
getTagList();

function getTagList(){
  fetch('/api/tag/getTag',{
    method:'get',
  }).then(data=>data.json()).then(data=>{
    tagList.value = data.data;
    console.log(data)
  })
}
</script>
<style scoped>
.common-layout{
  width: 100%;
  height: 100%;
  margin: auto;
}
.main{
  max-width: 1250px;
  margin: auto;
  padding: 30px 15px;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0px;
  overflow: visible;
}
@media screen and (max-width: 768px){
  .main{
    padding: 10px 6px;
  }
}
#tag .content .head{
  width: 100%;
}
#tag .content{
  padding: 50px 40px;
}
#tag .content .head{
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  margin: 8px 0.2px;
}
#tagItems{
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
#tagItems .item{
  width: calc((100% - 45px)/10);
  display: flex;
  border: var(--lkk-border);
  border-radius: 12px;
  text-align: center;
}
#tagItems .item .item-content{
  margin: auto;
  color: aliceblue;
}
@media screen and (max-width: 768px){
  #tagItems .item{
    width: 100%;
  }
}
</style>