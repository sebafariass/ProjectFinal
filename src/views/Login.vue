<template>
  <div class="login__input">
    <div class="w-50 m-auto">
      <b-form-group
        id="input-group-1"
        label="Mail:"
        label-for="input-1"
        class="letras"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Ingrese email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Contraseña:"
        label-for="input-2"
        class="letras"
      >
        <b-form-input
          id="input-2"
          v-model="password"
          required
          placeholder="Ingrese Contraseña"
        ></b-form-input>
      </b-form-group>
      <div class="botones__login">
      <b-button id="botonSesion" type="submit" class="mb-3" variant="primary" @click="login">Iniciar sesión</b-button>

      <!--Boton GOOGLE-->
      <b-button class="mb-3" id="botonGoogle"  @click="logInGoogle" variant="success">
        Continuar con Gmail
        
      </b-button>
      <br>
      <!--Boton para registro -->
      <b-button id="redirigirBoton" class="mb-3" @click="redigirigir" variant="success">
        Regístrate
      </b-button>
      </div>
    </div>
    <div class="container font__awesome">
      <div class="seccion-iconos">
        <i class="fal fa-dog fa-3x"> <h5>Encuentra su cita ideal</h5></i>
      </div>
      <div class="seccion-iconos">
        <i class="fal fa-bone fa-3x"><h5> La red más grande</h5></i>
      </div>
      <div class="seccion-iconos">
        <i class="fal fa-comment-alt-dots fa-3x"> <h5> Busca y ponte en contacto </h5></i>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router/index.js";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    

    login() {
      const email = this.email
      const password = this.password
      firebase.auth().signInWithEmailAndPassword(email, password).then( (resultado) => {
        console.log(resultado)
        router.push({name:"Home"})
      }).catch(e => console.log(e.message))
    },

    //GOOGLE
    logInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$router.replace("home");
        });
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        })
        .catch((e) => {
          console.error("Sign Out Error", e);
        });
    },

    	redigirigir() {		
				this.$router.push('iniciosesion')
			},
  },
};
</script>
<style lang="css">
.btn {
  margin: 20px;
  background-color: #e28585;
  border: #e28585;
  font-family: "Sansita Swashed", cursive;
}
.login__input {
  background: url("../assets/bg-login.jpg") no-repeat fixed;
  height: 100%;
  width: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.botones__login {
  text-align: center;
}
.letras {
  color: white;
  font-family: "Sansita Swashed", cursive;
}
.font__awesome {
  color: white;
  justify-content: center;
  font-family: 'Sansita Swashed', cursive;
  display: flex;
      justify-content: space-around;
}
h5 {
  font-family: 'Sansita Swashed', cursive;
  font-size: 15px;
  margin-bottom: 30px;
}

.seccion-iconos {
  margin-right: 40px; 
  margin-top:120px; 
  text-align:center
}
</style>
