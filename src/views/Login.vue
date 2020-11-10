<template>

    <div class="login">
    <p class="text-center">Inicie sesión mediante su cuenta organizativa</p>
    <form @submit.prevent="login" class="formulario">
      <h2 class="px-5" >Ingresa tus datos</h2>
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <input v-model="contrasena" type="password" placeholder="Password" />
      <v-btn class="ma-2" color="success" @click="loader = 'loading'" type="submit">
      INGRESO
      </v-btn>
    </form>
  </div>

</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
  
      usuario: "",
      contrasena: "",
    };
  },


  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => this.$router.replace("home"),
          (error) => console.error(error)
        );
    },

  
  },
};
</script>

<style lang="scss">
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  .ma-2{
    margin: 20px;
  }

 
}




</style>
