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
      <button type="submit">Send</button>
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
  }
}
</script>

<style lang="css" scoped>
textarea{
  margin:5px;
  width: 100%;
}
</style>
