import Vue from 'vue'
import App from './App.vue'
import SocketIo from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

export const Socket=SocketIo(`http://localhost:3000`)

Vue.use(VueSocketIO, Socket)

new Vue({
  render: h => h(App),
}).$mount('#app')
