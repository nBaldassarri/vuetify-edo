<template>
  <div>
        <h1>TURN ON/OFF LED</h1>
        <br><br>
        <v-btn color="cyan accent-2" @click='on'>ON</v-btn>
        <v-btn color="error" @click='off'>OFF</v-btn>
        <br><br>
        <v-color-picker></v-color-picker>
        
        
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