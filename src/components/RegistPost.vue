<template>
    <div id="create">
        <b-card
        style="max-width: 30rem; margin: auto; margin-top: 10px;"
        class="mb-2"
        border-variant="info">
            <h3>입력폼</h3>
            제목 <b-form-input type="text" v-model="info.title" placeholder="title"></b-form-input><br/>
            작성자 <b-form-input type="text" v-model="info.writer" placeholder="writer"></b-form-input><br/>
            내용 <b-form-textarea cols="30" rows="5" v-model="info.content" placeholder="content"></b-form-textarea><br/>
            <b-button @click="newPost">등록</b-button>
        </b-card>
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
<style>
    #create{
        
    }
</style>