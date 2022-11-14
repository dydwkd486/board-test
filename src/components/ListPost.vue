<template>
    <div>
        <h3>Posts</h3>       
        <b-table striped :bordered="bordered" hover :items="infos">
          <template #cell(no)="data">
            {{data.item.no}}
          </template>
          <template #cell(title)="data">
              <router-link :to="'/modify/'+data.item.no">
                {{data.item.title}}
              </router-link>
            </template>
          <template #cell(content)="data">
              {{data.item.content}}
          </template>
          <template #cell(writer)="data">
              {{data.item.writer}}
          </template>
          <template #cell(regtime)="data">
              {{data.item.regtime | transDate}}
          </template>
          <!-- additional table slots here if needed -->
        </b-table>
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
          bordered: true,
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

<style>
table{
	margin : auto;
    width : 80%;
}
</style>