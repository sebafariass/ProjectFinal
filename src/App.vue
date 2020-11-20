<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/chat">Chat</router-link> |
      <router-link to="/recuperar">Recuperación de clave</router-link> |
    </div>
    <router-view/>
 
  </div>
</template>

<script>

import { mapActions } from "vuex";
import firebase from 'firebase'

export default {
  name: 'App',

  created () {
    this.getData();
  },

  
  methods: {
    ...mapActions("Datos", ["getData"]),

    

    
  },
  
  
}


</script>

<style lang="scss">
h1{

  text-align: center;
}



</style>
