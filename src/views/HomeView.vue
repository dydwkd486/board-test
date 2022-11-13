<template>
  <div class="home">
    <HelloWorld/>
    <img alt="Vue logo" src="../assets/logo.png" width="900">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
