<template>
  <div class="about">
    <router-link to="/regist"><b-button variant="primary">등록</b-button></router-link>
    <router-view/>
    <h3>글목록</h3>
    <table>
      <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
        <th>작성일</th>
      </tr>
      <tr v-for="(info, index) in infos" :key="index">
        <td>{{info.no}}</td>
        <router-link :to="'/modify/'+info.no"><td>{{info.title}}</td></router-link>
        <td>{{info.content}}</td>
        <td>{{info.writer}}</td>
        <td>{{info.regtime | transDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

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
  created(){
    const addr = "http://localhost:9999/vue/api/board";
    // axios 요청 (Spring Boot Rest API 참고)
    axios({
          url:addr,
          method:'get'
        }).then((respData)=>{
          this.infos = respData.data;
        }).catch((error)=>{
          console.log(error);
        }).finally()
  },
        filters:{
        transDate: function(regtime){
          if(!regtime)return ''; 
          let js_date = new Date(regtime);
          let year = js_date.getFullYear();
          let month = js_date.getMonth()+1; 
          let day = js_date.getDate();
          if(month<10) month= "0"+month;
          if(day<10) day= "0"+day;
          
          return year+"년 "+month+"월 "+day+"일";
        } 
      },
}
</script>