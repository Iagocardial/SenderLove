<template>
  <div class="landing-page">
    <header class="header">
      <h1>Mantenha o Amor no Ar</h1>
      <p>Receba todo mês ideias de presentes e atividades para deixar o amor sempre presente na sua vida.</p>
    </header>
    
    <section class="form-section">
      <h2>Inscreva-se agora</h2>
      <form @submit.prevent="subscribe">
        <div class="form-group">
          <label for="name">Seu Nome</label>
          <input type="text" v-model="name" placeholder="Digite seu nome" required>
        </div>
        <div class="form-group">
          <label for="email">Seu Email</label>
          <input type="email" v-model="email" placeholder="Digite seu email" required>
        </div>
        <button type="submit" class="btn-submit">Inscrever-se</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    async subscribe() {
      // Lógica para enviar o email para o backend
      const payload = {
        name: this.name,
        email: this.email,
      };

      try {
        await axios.post('/api/subscribe', payload);
        alert('Inscrição realizada com sucesso!');
      } catch (error) {
        alert('Ocorreu um erro ao tentar se inscrever. Por favor, tente novamente.');
      }
    },
  },
});
</script>

<style scoped>
/* Estilos suaves e românticos */
.landing-page {
  text-align: center;
  padding: 50px;
  background-color: #ffe4e1; /* Cor de fundo suave, rosa pastel */
  color: #d6336c; /* Texto em cor rosa escuro */
  font-family: 'Georgia', serif;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2rem;
}

.form-section {
  margin-top: 30px;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-size: 1.1rem;
  color: #d6336c;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 2px solid #d6336c;
  border-radius: 5px;
  font-size: 1rem;
}

.btn-submit {
  background-color: #d6336c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
}

.btn-submit:hover {
  background-color: #ff85a2;
}

</style>