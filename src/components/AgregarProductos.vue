<template>
  <div>
    <h1 class="text-center mt-5">Agrega el Stock Disponible</h1>
  <v-container>
    <v-form>
      <v-container>
          <v-row>
              <v-col cols="12" md="4">
              <v-text-field v-model="juguete_unico.nombre" label="Nombre">
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete_unico.codigo" label="Código">
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete_unico.stock" label="Stock">
              </v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="juguete_unico.precio" label="Precio">
              </v-text-field>
            </v-col>
          </v-row>
          <v-btn @click="Agregar(); ClearData();">Agregar Stock Disponible</v-btn>
        </v-container>
  </v-form>
  </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Agregar",
  data: () => ({
    juguete_unico: {
      nombre: "",
      codigo: "",
      stock: "",
      precio: "",
    },
  }),
  methods: {
    ...mapActions("Datos", ["agregando_data"]),
    Agregar() {
      this.agregando_data(this.juguete_unico);
    },
    ClearData() {
      this.juguete_unico.nombre = "";
      this.juguete_unico.codigo = "";
      this.juguete_unico.precio = "";
      this.juguete_unico.stock = "";
    },
  },
};
</script>

