<template>
  <div>
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#">A N I M A L</b-navbar-brand>

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
            <b-nav-item to="/chat">Chat</b-nav-item>
            <b-nav-item to="/recuperacion">Recuperación de clave</b-nav-item>
          
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>

export default {
  name: "Navbar",

 
};

</script>

<style>

</style>