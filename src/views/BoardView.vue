<template>
  <div class="board">
    <nav>
      <router-link to="/board"><b-button variant="primary">글 목록</b-button></router-link>
      <span>&nbsp;</span>
      <router-link to="/regist"><b-button variant="primary">등록</b-button></router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'BoardView',
  components: {
  }
}
</script>

<style scoped>
nav {
  text-align: left;
  padding-left: 150px;
}
</style>