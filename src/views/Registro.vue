<template>
  <div>
    <div>
      <v-container>
        <v-main>
          <!-- consumir datos por el metodo change -->
       
          <h1>Registra a tu mascota con nosotros</h1>
          <v-text-field v-model="nombre" label="Nombre"></v-text-field>
          <b-form-select >
          <b-form-select-option v-model="selected" :value="null">Selecciona una raza</b-form-select-option>
          <b-form-select-option v-for="(raza,i) in razas" :key="i" :value="null">{{raza.data.nombre}}</b-form-select-option>
          </b-form-select>
    
          <b-form-select >
          <b-form-select-option v-model="selected" :value="null">Selecciona una edad</b-form-select-option>
          <b-form-select-option v-for="(edad,j) in edades" :key="j" :value="null">{{edad.data.rango}}</b-form-select-option>
          </b-form-select>
          <v-text-field v-model="sexo" label="Sexo"></v-text-field>
          <v-text-field v-model="ciudad" label="Ciudad"></v-text-field>
          <v-text-field v-model="text" label="Información Extra"></v-text-field>
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
          <v-img  :src="persona.data.imgSrc" height="200px"> </v-img>

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
import {mapState, mapGetters, mapActions} from "vuex";
export default {
    data() {
      return {
        rango: "",
        nombre: "",
        raza: {
          data: {
            nombre: "",
          }
        },
        edad: {
          data: {
            rango: ""
          }
        }
      }  
    },
  computed: {
    ...mapState(['razas','edades']),
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
                  edad: this.edad,
                  race: this.raza,
                  sex: this.sexo,
                  especie: this.animal,
                  imgSrc: this.url,
                  info: this.text,
                  city: this.ciudad
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
    raza: "",
    sexo: "",
    text: "",
    animal: "",
    ciudad: "",
    personas: [],
    loading: false,
  }),
};
</script>


<style>
.custom-select {
  margin: 20px;
}
</style>