<style scoped>
</style>

<template>
 <span>Principal con Vue-route</span>
</template>

<script>
export default {
  name: "Tareasprogramadascomponent",

  data() {
    return {};
  },
  methods: {
    segundoComponente() {
      alert("alerta dedsde el componente  hijo");
    },
    mensajealPadre() {
     this.$emit('mensajePadre');
    },
  },
};
</script>