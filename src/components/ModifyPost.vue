<template>
    <div id="update">
      <h3>수정폼</h3>
      글번호: <input type="text" v-model="info.no" readonly><br/>
      제목: <input type="text" v-model="info.title"><br/>
      작성자: <input type="text" v-model="info.writer"><br/>
      내용: <textarea cols="30" rows="10" v-model="info.content"></textarea><br/>
      <b-button-group>
        <b-button variant="success" @click="updatePost(info.no)">수정</b-button>
        <b-button variant="success" @click="deletePost(info.no)">삭제</b-button>
      </b-button-group>
    </div> 
</template>
<script>
import axios from "axios";
const addr = "http://localhost:9999/vue/api/board";
export default {
        data() {
        return {
          infos:[],
          info:{
          title:"",
          writer:"",
          content:"",  
          },
        }
      },
  created() {
              axios({
            url:addr+"/"+this.$route.params.no,
            method:'get'
          }).then((respData)=>{
            this.info = respData.data
            console.log(respData.data);
            
          }).catch((error)=>{
            console.log(error);
          }).finally();
          
  },
  methods: {
        updatePost(no){
          axios({
            url:addr+"/"+no,
            method:'put',
            data:this.info
          }).then((respData)=>{
            console.log(respData);
            if(respData.status==200){
              alert("글 수정 성공");
              this.reloadData();
            }
          }).catch((error)=>{
            console.log(error);
          }).finally();
        },
        deletePost(no){
          axios({
            url:addr+"/"+no,
            method:'delete',
            data:this.info
          }).then((respData)=>{
            console.log(respData);
            if(respData.status==200){
              alert("글 삭제 성공");
              this.reloadData();
            }
          }).catch((error)=>{
            console.log(error);
          }).finally();
        }
  },
  
  props :{
    no:String ,
  },
}
</script>