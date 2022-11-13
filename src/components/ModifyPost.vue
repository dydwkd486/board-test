<template>
    <div id="update">
      <b-card
        style="max-width: 30rem; margin: auto; margin-top: 10px;"
        class="mb-2"
        border-variant="info">
          <h3>수정폼</h3>
          글번호 <b-form-input type="text" v-model="info.no" readonly></b-form-input><br/>
          제목 <b-form-input type="text" v-model="info.title" placeholder="title"></b-form-input><br/>
          작성자 <b-form-input type="text" v-model="info.writer" placeholder="writer"></b-form-input><br/>
          내용 <b-form-textarea cols="30" rows="5" v-model="info.content" placeholder="content"></b-form-textarea><br/>
          <b-button-group>
            <b-button  @click="updatePost(info.no)">수정</b-button>
            <b-button  @click="deletePost(info.no)">삭제</b-button>
          </b-button-group>
      </b-card>
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