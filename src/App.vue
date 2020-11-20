
<template>
  <div id="app">
    <div id="nav">
      <Navbar /> 
    
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    this.getData();
  },

  methods: {
    ...mapActions("Datos", ["getData"]),
  },
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
