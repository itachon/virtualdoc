<style  >
</style>    
<template>
  <link href="assets/css/app.css" rel="stylesheet" />
  <div id="app" class="bg">
    <div class="container flex fd-c ai-c">
      <div class="logo">
        <img src="assets/img/logo.png" alt="Logo" />
      </div>
      <small>Sitio en Mantención</small>
    </div>
  </div>
</template>
<script>
export default {
  name: "mantencionComponent",

  data() {
    return {};
  },
  methods: {
    segundoComponente() {
      alert("alerta dedsde el componente  hijo");
    },
    mensajealPadre() {
      this.$emit("mensajePadre");
    },
  },
  mounted(){
      alert("test")
  }
};
</script>
