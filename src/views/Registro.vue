<template>
  <div>
    <div>
      <v-container>
        <v-main>
          
          <!-- consumir datos por el metodo change -->
       
          <h1>REGISTRA TU MASCOTA!</h1>
          <v-text-field v-model="nombre" label="Nombre"></v-text-field>
          <v-text-field v-model="edad" label="Edad"></v-text-field>
          <v-text-field v-model="raza" label="Raza"></v-text-field>
          <v-text-field v-model="sexo" label="Sexo"></v-text-field>
          <v-file-input
            @change="previewImage"
            accept="image/*"
            label="Sube Archivo"
          ></v-file-input>
        </v-main>

        <b-button @click="upload" variant="primary"> Subir imagen </b-button>

        <div v-show="loading">
          <h3>Registrando Mascotas</h3>
          <v-progress-linear
            color="red lighten-2"
            buffer-value="0"
            stream
          ></v-progress-linear>
        </div>
        <v-card
          v-for="(persona, i) in personas"
          :key="i"
          class="mx-auto"
          max-width="344"
        >
          <v-img :src="persona.data.imgSrc" height="200px"> </v-img>

          <v-card-title>
            {{ persona.data.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ persona.data.edad }}
          </v-card-subtitle>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
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
                  edad: this.edad,
                  imgSrc: this.url,
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
    edad: "",
    personas: [],
    loading: false,
  }),
};
</script>
