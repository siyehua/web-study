<template>

  <div class="sub-root list">
    <div class="subtitle">课程表</div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link :to="item.link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {reactive} from "vue";
import PubSub from 'pubsub-js';

export default {
  name: "BlobList",
  setup() {
    let lastPath = document.cookie.split(';').find(function (value) {
      return value.trim().startsWith('menuType')
    })
    let type = 'html'
    if (lastPath !== null && lastPath !== undefined) {
      type = lastPath.split('=')[1]
    }
    console.log('我被重置了', type);
    let menuTypeChange = function (msg, data) {
      console.log(msg, data);
      type = data.toLowerCase()
      document.cookie = 'menuType=' + type + ";";
      setListData();
    };
    PubSub.subscribe('menuChange', menuTypeChange)

    let list = reactive([])

    function setListData() {
      list.length = 0
      let id = Date.now()
      if (type.toLowerCase() === 'css') {
        list.push({
          id: id++,
          title: "基础",
          link: "/css/cssbase",
        })
        list.push({
          id: id++,
          title: "Text 相关",
          link: "/css/csstext",
        })
        list.push({
          id: id++,
          title: "布局",
          link: "/css/csslayout",
        })
        list.push({
          id: id++,
          title: "BFC （高度塌陷）",
          link: "/css/cssbfc",
        })
        list.push({
          id: id++,
          title: "Flex 弹性布局",
          link: "/css/flexlayout",
        })
        list.push({
          id: id++,
          title: "定位",
          link: "/css/cssposition",
        })
        list.push({
          id: id++,
          title: "margin 重叠",
          link: "/css/marginsome",
        })
        list.push({
          id: id++,
          title: "Iconfont",
          link: "/css/cssiconfont",
        })
        list.push({
          id: id++,
          title: "过渡与动画",
          link: "/css/transitionsetting",
        })
        list.push({
          id: id++,
          title: "transform 变幻",
          link: "/css/transformposition",
        })
        list.push({
          id: id++,
          title: "轮播图(定位)",
          link: "/css/cssviewpager",
        })
        list.push({
          id: id++,
          title: "顶部菜单(京东)",
          link: "/css/cssjdtopmenu",
        })
        list.push({
          id: id++,
          title: "瀑布流布局",
          link: "/css/pubulayout",
        })
      } else if (type.toLowerCase() === 'html') {
        list.push({
          id: id++,
          title: "基础",
          link: "/html/htmlbase",
        })
        list.push({
          id: id++,
          title: "实体（转义）",
          link: "/html/htmlspace",
        })
        list.push({
          id: id++,
          title: "img 图片",
          link: "/html/imageelement",
        })
        list.push({
          id: id++,
          title: "table 表格",
          link: "/html/htmltable",
        })
        list.push({
          id: id++,
          title: "form 表单",
          link: "/html/htmlform",
        })
      } else if (type.toLowerCase() === 'tools') {
        list.push({
          id: id++,
          title: "Tools",
          link: "/tools/toolsbase",
        })
      } else if (type.toLowerCase() === 'example') {
        list.push({
          id: id++,
          title: "小米首页",
          link: "/example/mipage",
        })
      } else if (type.toLowerCase() === 'less') {
        list.push({
          id: id++,
          title: "Less",
          link: "/less/lessbase",
        })
      } else if (type.toLowerCase() === 'js 基础') {
        list.push({
          id: id++,
          title: "js基础",
          link: "/js/jsbase",
        })
        list.push({
          id: id++,
          title: "数组",
          link: "/js/arrayuse",
        })
        list.push({
          id: id++,
          title: "string",
          link: "/js/stinguse",
        })
        list.push({
          id: id++,
          title: "日期",
          link: "/js/dateuse",
        })
        list.push({
          id: id++,
          title: "Obejct",
          link: "/js/objectuse",
        })
        list.push({
          id: id++,
          title: "函数",
          link: "/js/functionuse",
        })
        list.push({
          id: id++,
          title: "类",
          link: "/js/classuse",
        })
        list.push({
          id: id++,
          title: "异步 Async",
          link: "/js/asyncuse",
        })
        list.push({
          id: id++,
          title: "Html Dom",
          link: "/js/htmldom",
        })
        list.push({
          id: id++,
          title: "BOM",
          link: "/js/bomuse",
        })
        list.push({
          id: id++,
          title: "AJAX",
          link: "/js/ajaxuse",
        })
      }else if(type.toLowerCase() === 'typescript'){
        list.push({
          id: id++,
          title: "TypeScript 基础",
          link: "/ts/tsbase",
        })
        list.push({
          id: id++,
          title: "Object",
          link: "/ts/tsobject",
        })
      }
    }

    setListData()
    return {
      list
    }
  }
}
</script>

<style scoped>
.list {
  position: fixed;
}

.sub-root {
  margin-top: 5em;
  margin-left: 0.5em;
  margin-right: 2px;
  border-left: 2px rgba(128, 128, 128, 0.47) solid;
  border-right: 2px rgba(128, 128, 128, 0.47) solid;
}

.subtitle {
  background-color: #e8e7e2;
  color: #777;
  padding: 3px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 0.5em;
}

a {
  display: inline-block;
  width: 165px;
  color: #000000;
  padding: 5px 15px;
}

a:hover {
  background-color: #aaa;
}


</style>