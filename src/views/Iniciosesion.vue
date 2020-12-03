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

        <v-text-field id="nombre_usuario" v-model="usuario.nombre" label="Nombre"></v-text-field>

        <v-text-field id="email_usuario" v-model="usuario.email" label="E-mail"></v-text-field>

        <v-text-field
          v-model="usuario.direccion"
          label="Dirección"
          id="address_usuario"
        ></v-text-field>

       <v-text-field
          v-model="usuario.password"
          id="add_Password"
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
          id="addUsuario"
          
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
          @click="dialogo"
          id="closeUsuario"
         
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
  name: "Iniciosesion",
  data() {
    return {
     
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
   
      this.agregando_user(this.usuario);
      this.$router.push('login')
    },
    dialogo() {
      
       this.$router.push('login')
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
