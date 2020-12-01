<template>
 <div >
        <v-container> 
            <v-card color="teal lighten-5" class="pa-5">
        <!--  /////// FORMULARIO \\\\\\\ -->
        <div class="mb-5">
          <v-card-title
            class="primary lighten-1 font-weight-bold text-center"
          >
            Únete a nuestra a comunidad
          </v-card-title>
        </div>

        <v-text-field v-model="usuario.nombre" label="Nombre"></v-text-field>

        <v-text-field v-model="usuario.email" label="E-mail"></v-text-field>

        <v-text-field
          v-model="usuario.direccion"
          label="Dirección"
        ></v-text-field>

       <v-text-field
          v-model="usuario.password"
      
          :type="ingreso ? 'text' : 'password'"
          label="Escribe tu contraseña"
          @click:append="ingreso = !ingreso"
        ></v-text-field>

        <!-- /////// CREAR USUARIO BTN  \\\\\\\\-->

        <v-btn
          dark
          color="dark lighten-1"
          x-large
          class="py-2 my-2"
          @click="crear_user"
          to="/home"
        >
         <v-icon left >mdi-heart</v-icon>
          Únete a nosotros</v-btn>

        <!--  /////// FINAL DE CREAR USUARIO \\\\\\\\-->



        <!-- ////// CREAR USUARIO BTN  \\\\\\ -->

        <v-btn
          dark
          color="red accent-2"
          x-large
          class="py-2 ml-2"
          @click="dialog = false"
        >
          <v-icon left>mdi-close</v-icon>
          Cerrar
        </v-btn>

        <!-- //////  FINAL DE CREAR USUARIO \\\\\\\ -->
      </v-card>
        </v-container>
      
  
 </div>
</template>

    <script>
import firebase from "firebase";
import { mapActions } from "vuex";
export default {
  name: "Recuperar",
  data() {
    return {
        dialog: false,
        ingreso: false, 
      // objeto usuario
      usuario: {
        nombre: "",
        email: "",
        direccion: "",
        password: "",
      },
    };
  }, // ////// FINAL DEL DATA \\\\\\\\
  methods: {
    crear_user() {
      this.dialog = false;
      this.agregando_user(this.usuario);
    },
    ...mapActions(["agregando_user"]),

    ////////  LOGOUT \\\\\\\\
    logOut() {
    
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("/"));
    },
  },
};
</script>
