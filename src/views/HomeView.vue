<template>
  <div class="home">
    <img alt="Character" src="../assets/odebu.png" class="character-image">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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

<style>
.character-image{
  height:200px;
}
</style>
