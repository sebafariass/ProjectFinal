
<template>
  <div class="trueque__pagina">
   

    <!-- Tabla para Leer Información -->
    <h2 class="text-center">Trueques disponibles</h2>

    <table class="table">
      <thead>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Producto</th>
        <th>Tiempo de uso</th>
        <th>Causa del cambio</th>
        <th>Intercambio</th>
        <th>Ciudad</th>
        <th>Email</th>
        <th>Wsapp</th>
        <th>Acciones</th>
        
      </thead>

      <tbody>
        <tr id="datosPerros" v-for="(tienda, i) in trueques" :key="i">
          <td><v-img class="imgDog" :src="tienda.data.img"></v-img></td>
          <td>{{ tienda.data.nombre }}</td>
          <td>{{ tienda.data.producto }}</td>
          <td>{{ tienda.data.tiempo }}</td>
          <td>{{ tienda.data.causa }}</td>
          <td>{{ tienda.data.intercambio }}</td>
          <td>{{ tienda.data.ciudad }}</td> 
          <td>{{ tienda.data.contacto }}</td>
          <td>{{ tienda.data.wsapp }}</td>          
          <td >
            <!-- Botón Editar -->
            <button v-b-modal.modal-1 @click="editar(tienda.id)" class="btn btnEdit" id="btnEditarPerrito">
              Editar
            </button>
            <!-- Botón Eliminar -->
            <button @click="eliminar(tienda.id)" class="btn btnDelete" id="btnEliminarPerrito">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>


<b-modal id="modal-1" title="BootstrapVue" class="EditForm">
      <b-form-group id="input-group-1" label="Agrega la URL de la magen:" label-for="input-1">
        <b-form-input v-model="tienda.data.img"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1"  label="Nombre:" label-for="input-1">
        <b-form-input id="editNameDog" v-model="tienda.data.nombre"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Producto para Trueque:" label-for="input-2">
        <b-form-input v-model="tienda.data.producto"> </b-form-input>
      </b-form-group>

      <b-form-group  id="input-group-2" label="Tiempo de Uso:" label-for="input-2">
        <b-form-input v-model="tienda.data.tiempo"> </b-form-input>
      </b-form-group>

      <b-form-group   id="input-group-2" label="Causa de tu trueque:" label-for="input-2">
        <b-form-input v-model="tienda.data.causa"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Intercambio Por:" label-for="input-2">
        <b-form-input v-model="tienda.data.intercambio"> </b-form-input>
      </b-form-group>

      <b-form-group  id="input-group-2" label="Ciudad en la vives:" label-for="input-2">
        <b-form-input v-model="tienda.data.ciudad"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email de contacto:" label-for="input-2">
        <b-form-input v-model="tienda.data.contacto"> </b-form-input>
      </b-form-group>

      <b-form-group  id="input-group-2" label="Wsapp:" label-for="input-2">
        <b-form-input v-model="tienda.data.wsapp"> </b-form-input>
      </b-form-group>

      <b-button id="boton_name" type="submit" color="sucess" @click="update">Aceptar cambios</b-button>
    </b-modal>
    <hr />


<!-- Formulario Agregar Producto -->
    <h4 class="text-center">Agrega tu producto para el Mercado</h4>
    <div class="w-50 m-auto formAdd">
      <b-form-group  id="input-group-1" label=" Agrega la URL de la Imagen:" class="mt-5" label-for="input-1">
        <b-form-input  v-model="img"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1"  label="Nombre:" label-for="input-1">
        <b-form-input  v-model="nombre"> </b-form-input>
      </b-form-group>

      <b-form-group  id="input-group-2" label="Producto:" label-for="input-2">
        <b-form-input  v-model="producto"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tiempo de Uso:" label-for="input-2">
        <b-form-input  v-model="tiempo"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Causa:" label-for="input-2">
        <b-form-input  v-model="causa"> </b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Intercambio:" label-for="input-2">
        <b-form-input  v-model="intercambio"> </b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Ciudad en la que vives:" label-for="input-2">
        <b-form-input  v-model="ciudad"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Email de Contacto:" label-for="input-2">
        <b-form-input  v-model="contacto"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Wsapp:" label-for="input-2">
        <b-form-input v-model="wsapp"> </b-form-input>
      </b-form-group>


        <!--//////BOTON AGREGAR\\\\\ -->
      <b-button type="submit" class="btnAdd" @click="agregar">Agregar</b-button>


   
    <!-- Modal Editar -->
    

    
    </div>
  </div>
</template>

<!-- Script -->
<script>
import firebase from "firebase";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Edit",
  data() {
    return {
      idUpdating: "",
      img: "",
      nombre: "",
      producto: "",
      tiempo: "",
      causa: "",
      intercambio: "",
      ciudad: "", 
      contacto: "",
      wsapp: "",
      tienda: {
        data: {
          img: "",
          nombre: "",
          producto: "",
          tiempo: "",
          causa: "",
          intercambio: "",
          ciudad: "",
          contacto: "",
          wsapp: "",
        },
      },
    };
  },
  computed: {
    ...mapState(["trueques"]),
    ...mapGetters(["getTiendaUpdating"]),
  },
  methods: {
  
    ...mapActions(["agregar_trueques", "update_trueque", "eliminar_trueque"]),
    agregar() {
      const tienda = {
        img: this.img,
        nombre: this.nombre,
        producto: this.producto,
        tiempo: this.tiempo,
        causa: this.causa,
        intercambio: this.intercambio,
        ciudad: this.ciudad,
        contacto: this.contacto,
        wsapp: this.wsapp,
      };
      this.agregar_trueques(tienda);
    },
    editar(id) {
      const tiendaUpdating = JSON.parse(JSON.stringify(this.getTiendaUpdating(id)));
      this.tienda = tiendaUpdating;
      console.log(tiendaUpdating);
    },
    update() {
      this.update_trueque(this.tienda);
      this.$bvModal.hide("modal-1");
    },
    eliminar(id) {
      this.eliminar_trueque(id);
    },
  },
};
</script>

<!-- Style -->
<style>
.btnLogout {
  color: #ffffff;
  /*background-color: rgb(48, 151, 247);*/
  border-style: none !important;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 50px;
}
.titleTable {
  margin-top: 50px;
  font-weight: bold;
}
.table {
  margin-top: 20px;
}
.titleAdd {
  margin-top: 50px;
  font-weight: bold;
}
.btnDelete {
  color: #ffffff ; 
  background-color: rgb(202, 14, 14) ;
  border-style: none ;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 2px;
  margin-top: 3px;
}
.btnEdit {
  color: #ffffff ;
  background-color: #090263 ;
  border-style: none ;
  border-radius: 5px;
  padding: 10px 28px;
  margin-right: 2px;
}
.btnAdd {
  color: #ffffff ;
  background-color: #e28585 ;
  border-style: none ;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 2px;
  margin-bottom: 100px;
}
.btnCambios {
  color: #ffffff ;
  background-color: rgb(60, 133, 12) ;
  border-style: none ;
  border-radius: 5px;
  padding: 10px 20px;
}
.modal-content footer, .modal-content header {
  display: none;
}
.imgDog {
  width: 100px;
  height: auto;
}
@media (max-width: 768px) {

}
.trueque__pagina {
   background: url("../assets/bg-truque3.jpg") no-repeat center fixed;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.v-application .text-center  {
  color: white;
  font-family: "Sansita Swashed", cursive;
}
.table th, .table td {
  color: white;
  font-family: "Sansita Swashed", cursive;

}


</style>
