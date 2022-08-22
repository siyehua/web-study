<template>
  <div class="menu">

    <MenuList/>
    <div style="display: flex">
      <BlobList></BlobList>
      <router-view style="margin-left: 14em;margin-top: 3em;"></router-view>
    </div>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue'
import BlobList from './components/BlobList.vue'

export default {
  name: 'App',
  components: {
    MenuList,
    BlobList,
  },
  setup() {
    function menuClick(title) {
      console.log(title)
    }

    return {
      menuClick,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #FCFDF7;
}


</style>
