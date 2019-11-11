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
// 导入富文本 
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 配置跟路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
// 将富文本编辑器全局注册
Vue.use(VueQuillEditor)
Vue.component('tree-table', TreeTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
