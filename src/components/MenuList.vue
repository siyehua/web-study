<!--文章列表-->
<template>
  <div class="menu">
    <ul>
      <li v-for="(item,index) in blobList" :key="item.id" @click="dumpToBlob(index)">
        <a>{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {reactive} from "vue";
import router from "@/router";
import PubSub from "pubsub-js";

export default {
  name: "MenuList",
  setup() {
    let id = Date.now()
    let blobList = reactive([
      {
        id: id++,
        title: "HTML",
        link: "/html/htmlbase",
      },
      {
        id: id++,
        title: "CSS",
        link: "/css/cssbase",
      },
      {
        id: id++,
        title: "LESS",
        link: "/less/lessbase",
      },
      {
        id: id++,
        title: "JS 基础",
        link: "/js/jsbase",
      },
      {
        id: id++,
        title: "TypeScript",
        link: "/ts/tsbase",
      },
      {
        id: id++,
        title: "example",
        link: "/example/mipage",
      },
      {
        id: id++,
        title: "Vue",
        link: "/csslayout",
      },
      {
        id: id++,
        title: "React",
        link: "/csslayout",
      },
      {
        id: id++,
        title: "Webpack",
        link: "/csslayout",
      },
      {
        id: id++,
        title: "Tools",
        link: "/tools/toolsbase",
      },
    ])

    function dumpToBlob(index) {
      // publish a topic asynchronously
      PubSub.publish('menuChange', blobList[index].title);
      router.push(blobList[index].link)
    }

    return {
      dumpToBlob,
      blobList
    }
  },
}
</script>

<style scoped>
.menu {
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  height: 48px;
  line-height: 48px;
  background-color: #e8e7e2;
  justify-content: center;
}

ul {
  max-width: 1200px;
  height: 48px;
  line-height: 48px;
}


li {
  float: left;
  list-style: none;
}

a {
  display: inline-block;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  line-height: 48px;
}

a:hover {
  color: white;
  background-color: #3f3f3f;
}

</style>