import Vue from 'vue'
import App from './App.vue'
import SocketIo from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'


import ConnectionStatus from './components/ConnectionStatus.vue'
import Navbar from './components/Navbar.vue'


Vue.config.productionTip = false

export const Socket = SocketIo(`http://localhost:3000`)

Vue.component('connection-status',ConnectionStatus);
Vue.component('navigation-bar',Navbar);
Vue.use(VueSocketIO, Socket)

new Vue({
  render: h => h(App),
}).$mount('#app')
