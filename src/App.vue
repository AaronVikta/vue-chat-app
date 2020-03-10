<template>
  <div id="app">
    <navigation-bar/>
    <div class="container">
      <message-list :messages="messages"/>
      <MessageForm/>
    </div>
    <connection-status :isConnected="isConnected"/>
  </div>
</template>

<script>
import MessageList from './components/MessageList.vue'
import MessageForm from './components/MessageForm.vue'
export default {
  name: 'App',
  components: {
    MessageList,
    MessageForm
  },
  data(){
    return{
      isConnected:false,
      messages:[
        {
          id:1,
          username:'Aryan',
          message:'Hello'
        },
        {
          id:2,
          username:'Vikta',
          message:'Hi'
        },
        {
          id:3,
          username:'Ikedi',
          message:'Important message to you all'
        },
      ]
    }
  },
  sockets:{
    connect: function(){
      this.isConnected=true;
    },
    disconnect: function(){
      this.isConnected=false;
    },
    chatMessage(messages){
      this.messages=messages
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.container{
  width:300px;
  margin:0 auto;
}
</style>
