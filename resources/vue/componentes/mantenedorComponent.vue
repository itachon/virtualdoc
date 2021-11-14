<style scoped>
body {
  margin: 100px;
  text-align: center;
  align: center;
}

input[type="text"],
[type="password"],
[type="number"],
[type="file"] {
  width: 33%;
  margin: 8px 0;
  padding: 7px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
select {
  width: 33%;
  margin: 8px 0;
  padding: 7px 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #4caf50;
  width: 10%;
  padding: 9px 5px;
  margin: 5px 0;
  cursor: pointer;
  border: none;
  color: #ffffff;
  margin-left: 80px;
}

button:hover {
  opacity: 0.8;
}

#fn,
#ln,
#un,
#pwd,
#em,
#mn,
#fm,
#cy {
  font-family: "Lato", sans-serif;
  color: gray;
}

#em {
  margin-left: 30px;
}
form {
  padding-left: 40%;
}
</style>
<template>
  <form name="regi" @submit.prevent="guardarPublicacion">
    <h2>Ingresar Publicación</h2>

    <label for="r1" id="fn">Titulo de la publicacion :</label><br />

    <input type="text" name="fname" id="r1" v-model="titulo" /><br />

    <label for="r2" id="ln">Extracto de publicación :</label><br />

    <textarea
      rows="5"
      cols="36"
      name="lname"
      id="r2"
      v-model="extracto"
    /><br /><br />

    <label for="r3" id="un">Foto de la publicacion :</label><br />

    <input
      type="file"
      id="file"
      ref="file"
      v-on:change="handleFileUpload()"
    /><br /><br />

    <label for="r4" id="pwd">Link publicación :</label><br />

    <input type="text" name="pass" id="r4" v-model="linkPublicacion" />
    <button value="Submit" id="button" @click="agregarLink">
      Agregar Enlace</button
    ><br />
    <ul>
      <li v-for="(link, keys) in links" v-bind:key="keys">{{link}}</li>
    </ul>
    <small>Puede ser de cualquier red social disponible</small><br />

    <br /><br />

    <button value="Submit" id="button">Ingresar</button>
  </form>
</template>
<script>
const axios = require("axios");
export default {
  name: "mantenedorComponent",

  data() {
    return {
      titulo: "",
      extracto: "",
      linkPublicacion: "",
      links: [],
      file: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    guardarPublicacion() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("titulo", this.titulo);
      formData.append("extracto", this.extracto);
      formData.append("link", this.links);

      axios
        .post("/guardarPublicacion", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    agregarLink() {
      this.links.push(this.linkPublicacion);
      this.linkPublicacion = '';
    },
  },
};
</script>