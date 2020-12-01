<template>
  <div>
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand  to="/home">
          <img src="../../assets/logo-transparente.png" width="120" height="120" alt="">
          DatingDog
        </b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/registro">Registro de Mascotas</b-nav-item>
            <b-nav-item to="/muestra">MatchCan</b-nav-item>
            <b-nav-item to="/iniciosesion">Registrar Usuario</b-nav-item>
            <b-nav-item to="/mercado">Mercado</b-nav-item>
              <b-nav-item to="/trueque">trueque</b-nav-item>
            <b-nav-item @click="logout">Logout</b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    
    </div>
</template>

<script>
import firebase from "firebase";
import {mapState, mapGetters, mapActions} from "vuex";
export default {
  
  name: "Navbar",
  methods: {
  logout() {
      firebase
        .auth()
        .signOut()
        .then(() => window.location= '/login');
  },
  }
}
</script>

<style lang="css">
</style>