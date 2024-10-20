<template>
  <div class="container">
    <h1>Inscrição</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nome:</label>
        <input
          type="text"
          v-model="name"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          v-model="email"
          placeholder="Digite seu email"
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    async submitForm() {
      const payload = {
        name: this.name,
        email: this.email,
      };
      try {
        await axios.post("/api/subscribe", payload); // Endpoint no backend
        alert("Inscrição realizada com sucesso!");
      } catch (error) {
        alert(`Ocorreu um erro ao enviar os dados ${error}`);
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
