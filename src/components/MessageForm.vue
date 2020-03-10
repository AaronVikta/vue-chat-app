<template>
  <div class="">
    <form @submit.prevent="sendMessage">
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username">
      </div>
      <div class="">
        <label for="message">Message</label>
          <textarea name="message" v-model="message">
          </textarea>
      </div>
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:"",
      message:""
    }
  },
  methods:{
    sendMessage() {
      this.$socket.emit('chatMessage',{
        username:this.username,
        message:this.message
      });
    }
  }
}
</script>

<style lang="css" scoped>
textarea{
  margin:5px;
  width: 100%;
}
</style>
