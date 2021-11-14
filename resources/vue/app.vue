<style scoped>
#contenedor {
  width: 100% !important;
}
</style>
<template>
  <div id="contenedor" v-if="usu_token != null">
    <router-link to="/mantenedor">Mantenedor</router-link>
    <router-view></router-view>
  </div>
  <div id="contenedor" v-else>
    <router-view></router-view>
  </div>
</template>
<script>
import Mantenedor from "./componentes/mantenedorComponent.vue";
import Mantencion from "./componentes/paginaprincipal/mantencionComponent.vue";

export default {
  name: "Tareasprogramadascomponent",
  components: {
    Mantenedor,
    Mantencion,
  },
  data() {
    return {
      contador: 0,
      usu_token: localStorage.getItem("usu_token"),
    };
  },
  watch: {
    //ESCUCHA LOS CAMBIOS DEL ROUTE Y ACTUALIZA EL USU_TOKEN PARA VERIFICAR SI AUN ESTA LOGEADO
    $route(to, from) {
      this.usu_token = localStorage.getItem("usu_token");
    },
  },
  methods: {
    primerComponente() {
      alert("alerta desde componente padre");
    },
    actualizarContador() {
      this.contador = this.contador + 1;
    },
  },
};
</script>
