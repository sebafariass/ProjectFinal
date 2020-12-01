<template>
  <div>
      <b-navbar toggleable type="dark" class="navegacion" ariant="dark">
        <b-navbar-brand href="#">
          <i class="fas fa-paw fa-2x"></i> 
          <!--<img src="../../assets/logo-transparente.png" width="50" height="50" alt=""-->
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
            <b-nav-item to="/registro">Registro</b-nav-item>
            <b-nav-item to="/muestra">MatchCan</b-nav-item>
            <b-nav-item to="/recuperar">Recuperar clave</b-nav-item>
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
.navegacion {
  background-color: #e28585;
  font-family: 'Sansita Swashed', cursive;
}

</style>