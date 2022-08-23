<template>
  <div>
    <MenuList/>
    <BlobList></BlobList>
    <div style="margin-left: 14em;padding-top: 48px;">
      <router-view></router-view>
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
  margin-top: 0;
}

body{
  background-color: #FCFDF7;
}


</style>
