
<template>
  <div id="app">
      <Navbar /> 
    <router-view />
     <Footer />
  </div>
</template>

<script>
import Footer from "@/components/elementoapp/Footer.vue";
import Navbar from "@/components/elementoapp/Navbar.vue";
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  created() {
  this.getDataRazas();
  },

  methods: {
    ...mapActions(["getDataRazas"]),
  },
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
