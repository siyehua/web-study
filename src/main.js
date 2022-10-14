import {createApp} from 'vue'
import router from "./router/index";
import App from './App.vue'

import './assets/css/common.css'

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/shades-of-purple.css'  //导入代码高亮样式, 切换其他样式可以去官网看 demo

createApp(App)
    //代码高亮
    .directive("highlight", function (el) {
        let blocks = el.querySelectorAll("code");
        blocks.forEach(block => {
            hljs.highlightBlock(block);
        });
    })
    .use(router)
    .mount('#app')
