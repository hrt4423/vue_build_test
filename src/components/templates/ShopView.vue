<template>
  <div class="shop">
    <h1>ショップ</h1>
  </div>
</template>

<script>
export default {
  name: 'ShopView',

  data: function () {
    return {
      showContent: false
    }
  },

  methods: {
    openModal: function () {
      this.showContent = true
    },
    closeModal: function () {
      this.showContent = false
    }
  }
}
</script>

<style>

</style>
