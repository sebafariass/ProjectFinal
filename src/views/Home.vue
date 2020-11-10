<template>
  <div class="home">
    <v-container>
      <v-app-bar app color="dark" dark>
        <h1>Inventario Local // Concepción \\</h1>
        <v-spacer></v-spacer>

        <v-btn class="align-content-end btn-color" @click="logout">
          logout
        </v-btn>
      </v-app-bar>

      <TablaDatos />
      <v-btn @click="show_add" depressed>
        <!-- forzando btn important!-->
        <span class="boton v-color-picker" v-if="!add">Agregar Producto</span>
        <span v-if="add" class="v-color-picker">Cerrar Formulario</span>
      </v-btn>
      <AgregarProductos v-if="add" />
    </v-container>
  </div>
</template>

<script>
import AgregarProductos from "@/components/AgregarProductos.vue";
import TablaDatos from "@/components/TablaDatos.vue";

import { mapMutations, mapState } from "vuex";
import firebase from "firebase";


export default {
  name: "Home",
  components: {
    TablaDatos,
    AgregarProductos,
    
  },
  computed: {
    ...mapState("Datos", ["add"]),
  },
  methods: {
  
    ...mapMutations("Datos", ["MostrarAdd"]),


    show_add() {
      this.MostrarAdd();
    },

   
    logout() {
      firebase.auth().signOut().then(() => {

          this.$router.replace("login");
        })
        .catch((e) => {
          console.error("Error al ingresar", e);
        });
    },
}
}
</script>

<style lang="scss">
.home {
  padding: 20px 0;
}

.btn-color { 
  color: blue
}

.boton{
  display: flex;
  align-content: center;
}
</style>
