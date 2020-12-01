<<<<<<< HEAD

<template>
  <div>
    <h2 class="text-center">Recupera tu contraseña aquí</h2>
    <b-form-input class="input__recuperar" v-model="text" placeholder="Ingrese su email"></b-form-input>

    <b-button class=" boton__recuperar mx-5" variant="success">Recuperar</b-button>
</div>
</template>

<style lang="scss">
    .text-center {
        padding: 30px;
    }
    .input__recuperar {
        margin-left: 50px;
        margin-right: 50px;
    }
    .boton__recuperar {
        margin: 30px;
    }
</style>
=======
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
          color="success"
          x-large
          class="py-2 my-2"
          @click="crear_user"
        >
         <v-icon left >mdi-heart</v-icon>
          Únete a nosotros</v-btn>

        <!--  /////// FINAL DE CREAR USUARIO \\\\\\\\-->



        <!-- ////// CREAR USUARIO BTN  \\\\\\ -->
   <v-btn class="mx-2"  to="/home" @click="dialog = false"   x-large dark small color="dark">
      <v-icon dark>mdi-minus
        
      </v-icon>
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
>>>>>>> 5cd0be0cca75c6b1f00c26b52c6c870788a9942b
