import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 字体图标
import './assets/fonts/iconfont.css'
// 全局css
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'
// 全局导入axios
import axios from 'axios'
// 配置跟路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
