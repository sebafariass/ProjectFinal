<template>
  <div>
    <div class="w-50 m-auto login__input">
      <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Ingrese email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          required
          placeholder="Ingrese Contraseña"
        ></b-form-input>
      </b-form-group>
      <div>
      <b-button class="btn" type="submit" variant="primary" @click="login">Iniciar sesión</b-button>
      <br>

      <!--Boton GOOGLE-->
      <b-button class="btn" @click="logInGoogle" variant="success">
        Continuar con Gmail
        
      </b-button>
      <br>
      <!--Boton para registro -->
      <b-button class="btn" @click="Registro" variant="success">
        Regístrate
      </b-button>

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
      const email = this.email;
      const password = this.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((resultado) => {
          this.$bvToast.toast("Bienvenido " + resultado.user.email, {
            title: `Usuario autenticado`,
            toaster: "b-toaster-top-center",
            solid: true,
            variant: "primary",
            appendToast: true,
          });
          console.log(resultado);
          router.push({ name: "Home" });
        })
        .catch((e) => {
          this.$bvToast.toast(e.message, {
            title: `Error`,
            toaster: "b-toaster-top-center",
            solid: true,
            variant: "primary",
            appendToast: true,
          });
          console.log();
        });
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
  },
};
</script>
<<<<<<< HEAD

=======
<style lang="css">
.btn {
  margin: 20px;
}
.login__input {
  background-image: url("../assets/logo-transparente.png");
}
</style>
>>>>>>> 8a7960d3a696a0eb1f2fce5349195b0fa27fc28e
