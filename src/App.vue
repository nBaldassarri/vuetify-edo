<template>
  <div>
        <h1>TURN ON/OFF LED</h1>
        <br><br>
        <v-btn class="btn btn-danger" @click='on'>ON</v-btn>
        <v-btn @click='off'>OFF</v-btn>
  </div>
</template>

<script>
import io from "socket.io-client"; 

export default {
  name: 'app',
  data() {
    return {
      socket: {},
    }
  },
  created() {
    this.socket = io("http://localhost:5000");
  },
  methods: {
    on: function() {
      this.socket.emit("on", 13);
    },
    off: function() {
      this.socket.emit("off", 13);
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>