<template>
  <div>
    <div style="width: 10em;
    height: 10em;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    background-color: #b1d069
    ">
      <button @click="enterPager">点击进入</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiPage",
  setup() {
    function enterPager() {
      window.location.href='./MiMainPage.vue'
    }

    return {
      enterPager,
    }
  },
}
</script>

<style scoped>

</style>