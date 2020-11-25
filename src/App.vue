
<template>
  <div id="app">
      <Navbar /> 
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/elementoapp/Navbar.vue";
import firebase from "firebase";
import { mapActions } from "vuex";

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
