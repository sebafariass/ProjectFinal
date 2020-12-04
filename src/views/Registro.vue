<template>
  <div class="registro__pagina" >
    <div class= "container">
      <v-container>
        <v-main>
          <!-- consumir datos por el metodo change -->

          <h2>Registra tu mascota</h2>

          <v-text-field class="datos__registro" v-model="nombre" label="Nombre"></v-text-field>
          <!-- Select Edad -->
          <b-form-select v-model="selectedEdad">
            <b-form-select-option  class="selectEdad" :value="0"
              >Selecciona una edad</b-form-select-option
            >
            <b-form-select-option
              v-for="(edad, j) in edades"
              :key="j"
              :value="edad.data.rango"
              id="edadSelection"
              >{{ edad.data.rango }}</b-form-select-option
            >
          </b-form-select>
          <!-- Select Raza -->
          <b-form-select class="my-5 datos__registro"  v-model="selectedRaza">
            <b-form-select-option class="select" :value="0"
              >Selecciona una raza</b-form-select-option
            >
            <b-form-select-option
              class="select"
              v-for="(raza, i) in razas"
              :key="i"
              :value="raza.data.nombre"
              id="razaSelection"
              >{{ raza.data.nombre }}</b-form-select-option
            >
          </b-form-select>
          <!-- Select Sexo -->
          <b-form-select class="my-5 datos__registro " v-model="selectedSexo">
            <b-form-select-option id="sexoSelection" class="select" :value="0"
              >Selecciona Sexo</b-form-select-option
            >
            <b-form-select-option class="select datos__registro " value="Macho"
              >Macho</b-form-select-option
            >
            <b-form-select-option class="select datos__registro " value="Hembra"
              >Hembra</b-form-select-option
            >
          </b-form-select>

          <v-text-field v-model="ciudad" id="ciudadSelection" label="Ciudad" class="datos__registro"></v-text-field>
          <v-text-field v-model="text" id="infoSelection" label="Información Extra" class="datos__registro"></v-text-field>
          <v-file-input
            @change="previewImage"
            accept="image/*"
            label="Sube Archivo"
            
          ></v-file-input>
        </v-main>

        <b-button id="inputUpload" @click="upload" variant="primary"> Subir imagen </b-button>

        <div v-show="loading">
          <h3>Registrando Mascotas</h3>
          <v-progress-linear
            color="red lighten-2"
            buffer-value="0"
            stream
          ></v-progress-linear>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Card from "@/components/mostrarcard/Card.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import router from "../router/index.js";
export default {
  data() {
    return {
      rango: "",
      nombre: "",
      raza: {
        data: {
          nombre: "",
          codigo: "",
        },
      },
      edad: {
        data: {
          rango: "",
          codigo: "",
        },
      },
    };
  },
  computed: {
    ...mapState(["razas", "edades"]),
  },
 
  mounted() {
    firebase
      .firestore()
      .collection("personas")
      .onSnapshot((snapshot) => {
        this.personas = [];
        snapshot.forEach((doc) => {
          this.personas.push({
            id: doc.id,
            data: doc.data(),
          });
        });
      });
  },
  methods: {
    previewImage(file) {
      console.log(file);
      this.imagen = file;
      //mandando info a firebase storage
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("home"));
    },
    upload() {
      (this.loading = true),
        firebase
          .storage()
          .ref(`/imagenes/${this.imagen.name}`)
          //metodo put para mandar al storage
          .put(this.imagen)
          //snapshot corresponde al archivo recien cargado
          //getdownloadUrl el metodo por si solo es una promesa
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              console.log(url);
              this.url = url;
              firebase
                .firestore()
                .collection("personas")
                .add({
                  name: this.nombre,
                  edad: this.selectedEdad,
                  race: this.selectedRaza,
                  sex: this.selectedSexo,
                  imgSrc: this.url,
                  info: this.text,
                  city: this.ciudad,
                })
                .then(() => {
                  this.loading = false;
                });
            });
          });
    },
  },
  data: () => ({
    imagen: "",
    url: "",
    nombre: "",
    selectedEdad: 0,
    selectedRaza: 0,
    selectedSexo: 0,
    text: "",
    ciudad: "",
    personas: [],
    loading: false,
  }),
   components: {
    Card,
  },
};
</script>

<style>
.custom-select {
  margin: 20px;
}
.registro__pagina {
  background: url("../assets/bg-registro1.jpg") no-repeat center fixed;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
h2 {
  color: black;
  text-align: center;
}
.datos__registro {
  font-family: "Sansita Swashed", cursive;
}

</style>
