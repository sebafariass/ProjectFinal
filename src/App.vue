
<template>
    <v-app>
    <Navbar />

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
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
    this.getDataRazas(),
    this.getDataEdades(),
    this.getDataPersonas()
    this.getDataTrueques()
  },

  methods: {
   
     ...mapActions(["getDataRazas"]),
      ...mapActions(["getDataEdades"]),
       ...mapActions(["getDataPersonas"]),
       ...mapActions(["getDataTrueques"]),
  },
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}

.barraColorFooter {
  /*background: #ff0000;
  background: linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -webkit-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -moz-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);*/
  background: #bd9b83;
  height: 200px;
  width: 100%;
}
</style>
