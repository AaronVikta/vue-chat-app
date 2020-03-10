<template>
  <div class="">
    <span v-if="isConnected" class="bar connected">
      Connected to the server
    </span>
    <span v-else class="bar disconnected">
      Disconnected from the Server
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:['isConnected']
}
</script>

<style lang="css" scoped>
.bar{
  position: absolute;
  bottom:0;
  left: 0;
  right: 0;
  text-align: center;
  padding:5px;
}
.connected{
  background: greenYellow;
  color:black;
}
.disconnected{
  background: red;
  color: white;
}
</style>
