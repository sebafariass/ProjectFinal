
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
