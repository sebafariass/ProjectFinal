<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Código</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Precio</th>
          <th class="text-left">Eliminar</th>

          <th class="text-left">Editar</th>
        </tr>
      </thead>

     <tbody>
        <tr v-for="item in Productos" :key="item.nombre">

          <td>{{ item.nombre }}</td>
          <td>{{ item.codigo }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>

          <td>
              <!-- \\\ boton eliminar /// -->
            <v-btn fab small color="error" @click="eliminar(item.id)">
             <v-icon>D</v-icon>
            </v-btn>
          </td>

          <td>
            <v-row>
              <!-- ANCHO DE VENTANA  modal ///// EDITAR \\\\\ --->
              <v-dialog v-model="envio" max-width="400px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn fab small v-bind="attrs" v-on="on" @click="edit(item)">
                  <v-icon>E</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title>
                    <span class="headline">Edita Stock</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <!-- modal edit stock 
                        columnas asignadas  -->
                        <v-col cols="12">
                          <v-text-field
                            label="Nombre Stock"
                            v-model="juguetes.data.nombre"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="juguetes.data.codigo"
                            label="Codigo"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Precio"
                            v-model="juguetes.data.precio"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Stock"
                            v-model="juguetes.data.stock"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                        <!-- BOTON CANCELAR-->
                    <v-btn color="blue darken-1" text @click="envio = false">
                      Cancelar
                    </v-btn>
                        <!-- BOTON CANCELAR-->
                    <v-btn color="blue darken-1" text @click="(envio = false), editando_juguete()">
                      Enviar
                    </v-btn>

                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </td>
        </tr>
    </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "TablaDatos",

  data() {
    return {
      juguetes: {
        data: {
          nombre: "",
          codigo: "",
          stock: "",
          precio: "",
        },
      },
      envio: false,
    };
  },
  computed: {
    ...mapState("Datos", ["Productos"]),
  },
  methods: {
    ...mapActions("Datos", ["eliminando_juguete_accion", "editando_juguete__accion"]),

    eliminar(id) {
      this.eliminando_juguete_accion(id);
    },

    editando_juguete() {
      this.editando_juguete__accion(this.juguetes);
      console.log("editando");
    },

    edit(item) {
      this.juguetes.id = item.id;
      this.juguetes.data.nombre = item.nombre;
      this.juguetes.data.codigo = item.codigo;
      this.juguetes.data.stock = item.stock;
      this.juguetes.data.precio = item.precio;
    },
  },
};
</script>

<style></style>
