<template>
  <div class="home">
    <img alt="Character" src="@/assets/odebu.png" class="character-image">
    <h1>ホーム画面</h1>
    <p>token: {{ $store.state.auth.token }}</p>

    <p>{{ $store.state.message}} </p>

    <input type="text" v-model="message"/><br>
    <button @click="changeMessage">変更</button><br>

    <router-link to="/login">
      ログイン画面へ
    </router-link>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',

  data () {
    return {
      message: ''
    }
  },

  methods: {
    changeMessage () {
      this.$store.dispatch('changeMessage', this.message)
    }
  }

}
</script>

<style>
.character-image{
  height:200px;
}
</style>
