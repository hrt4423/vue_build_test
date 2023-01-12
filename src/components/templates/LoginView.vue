<template>
  <div class="login">
    <h1>ログイン画面</h1>

    <label for="user-name">なまえ</label>
    <input
      id="user-name"
      v-model="userName"
      type="text"
    >

    <label for="password">パスワード</label>
    <input
      id="password"
      v-model="password"
      type="password"
    >

    <br><button type="button" @click="commit">ログイン</button>

    <p v-if="error" class="error-message">
      {{ error }}
    </p>

    <br><a href="">新規登録</a>
  </div>
</template>

<script>
const NCMB = require('ncmb')
const apiKey = 'dee51657f9ee6f0b90fff0b1a9fa69dd557a23475814d9b9eadc7154226e41a8'
const clientKey = '8b9cbea8e8391c33cb9bd74f4177a177df679ed4d3483ccb64ac6f0ac52e1319'

const ncmb = new NCMB(apiKey, clientKey)
// クラスのTestClassを作成
const TestClass = ncmb.DataStore('TestClass')

export default {
  name: 'LoginView',

  data () {
    return {
      userName: '',
      password: '',
      error: ''
    }
  },

  methods: {
    commit () {
      const testClass = new TestClass()
      testClass.set('message', 'Hello, NCMB! 1/12 14:52')
      testClass.save()
        .then(function () {
          // 保存に成功した場合の処理
        })
        .catch(function (err) {
          // 保存に失敗した場合の処理
          throw new Error(err.message)
        })
    }
    /*
    login () {
      this.$store.dispatch('login', { userName: this.userName, password: this.password })
        .catch(err => {
          this.error = err.message
        })
        .then(() => {
          this.$router.push({ path: '/' })
        })
    }
    */
  }
}
</script>

<style>
.error-message{
  color: red;
}
</style>
