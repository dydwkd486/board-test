<template>
  <div id="create">
        <h3>입력폼</h3>
        제목: <input type="text" v-model="info.title"><br/>
        작성자: <input type="text" v-model="info.writer"><br/>
        내용: <textarea cols="30" rows="10" v-model="info.content"></textarea><br/>
        <button @click="newPost">등록</button>
       </div> 
</template>

<script>
import axios from "axios";
const addr ="http://localhost:9999/vue/api/board/";

export default {
  data() {
                return {
                   infos :[],
                //    title:'', writer:'', content:''
                   info:{
                      title:'', writer:'', content:''
                   },
                   upInfo:{
                      no:'',title:'', writer:'', content:''
                   }
                }
            },
  methods:{
                newPost(){//글 등록
                    axios({
                        url:addr,
                        method:'post',
                        data: this.info
                    })
                    .then(( respData)=>{ console.log(respData);
                        if(respData.status == 200){
                            alert('글 등록 성공')
                            this.$router.push("/board");
                        }
                    })
                    .catch((err)=>{console.log(err)})
                    .finally();
                },
}
}
</script>