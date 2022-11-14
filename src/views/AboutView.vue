<template>
    <div class="about">

        <b-card
        title="조용장"
        img-src="https://avatars.githubusercontent.com/u/22496079?v=4"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <b-card-text>
          조용하지 않은 개발자
        </b-card-text>
        <b-button href="https://github.com/dydwkd486" >Github</b-button>  
      </b-card>
    
      <b-card
        title="유소영"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <b-card-text>
          커여운 개발자
        </b-card-text>
        <b-button href="https://github.com/yu-so-young2" >Github</b-button>  
      </b-card>

      <b-card
        title="박신희"
        img-src="https://avatars.githubusercontent.com/u/52345499?v=4"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <b-card-text>
          신이나는 개발자 🎶
        </b-card-text>
        <b-button href="https://github.com/bobsini601" >Github</b-button>  
      </b-card>

    </div>
  </template>
  
  <script>
  
  export default {
    name: 'AboutView',
    components: {
    },
    data() {
          return {
            teamList :[
              {
                name : '조용장',
                content : 'text',
                url: '',
              },
              {          
                name : '박신희',
                content : 'text',
                url: '',
              },
              {
                name : '유소영',
                content : 'text',
                url: '',
              }
            ]
          }
    },
  }


  </script>

  <style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
p a{
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 600;
  color:#454545;
}
.about{
    display:flex;
    justify-content: center;
}

</style>