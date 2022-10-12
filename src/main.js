import {createApp} from 'vue'
import router from "./router/index";
import App from './App.vue'

import './assets/css/common.css'

// 引入 code style
import './assets/codestyle/code_style.css'
import './assets/codestyle/code_style.js'


createApp(App)
    .use(router)
    .mount('#app')
