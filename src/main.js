// 引入的不再是Vue构造函数，而是一个createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// 以前
// const vm = new Vue({
//   render: h=>h(App)
// })
// vm.$mount('#app')
