<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-text>
      <v-card-title class="tituloCard">{{ tienda.data.nombre }}</v-card-title>
      <v-img height="300" :src="tienda.data.img"></v-img>
      <v-divider class="mx-4"></v-divider>
    </v-card-text>

    <v-card-actions >
      <v-btn  @click="reveal = true">
        Leer más
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <div class="textCard" id="textoCard">
            <h5 class="contactoCard">Datos del Trueque</h5>
            <div id="nombre_dueño"><b>Nombre de dueño:</b> {{ tienda.data.nombre }}</div>
            <div id="nombre_producto"><b>Nombre del Producto:</b> {{ tienda.data.producto }}</div>
            <div id="uso_producto"><b>Tiempo de uso:</b> {{ tienda.data.tiempo }}</div>
            <div id="causa_trueque"><b>¿Por qué lo truequeas?:</b> {{ tienda.data.causa }}</div>
            <div id="intercambio_trueque"><b>Intercambio:</b> {{ tienda.data.intercambio}}</div>
            <div id="ciudad_trueque"><b>Ciudad en la que vives:</b> {{ tienda.data.ciudad }}</div>
            <div>

              <h5 class="contactoCard" id="datosContacto">Datos contacto</h5>
              <div id="nombreContacto"><b>Email :</b> {{ tienda.data.contacto }}</div>
              <div id="numeroContacto"><b>Whatssap Contacto</b> {{ tienda.data.wsapp }}</div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="mb-3">
          <v-btn  @click="reveal = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Cardmercado",
  props: ["tienda"],
  data: () => ({
    reveal: false,
  }),
};
</script>

<style lang="scss">
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}


.contactoCard {
  font-weight: bold;
  margin-top: 20px;
}
</style>
