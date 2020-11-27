<template>
<div>
  <b-card
  
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <h1>{{ raza.data.nombre }}</h1>
    <b-card-text>
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
  
</template>

<script>
export default {
  name: "Card",
  props: ["raza"],
  data: () => ({
   
  }),
};
</script>

<style lang="scss">


</style>
