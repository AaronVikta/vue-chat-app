<template>
  <div id="app">
    <connection-status :isConnected="isConnected"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      isConnected:false
    }
  },
  sockets:{
    connect: function(){
      this.isConnected=true;
    },
    disconnect: function(){
      this.isConnected=false;
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
  margin-top: 60px;
}
</style>
