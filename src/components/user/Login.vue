<template>
    <div class="login-container">
      <form class="login-form" @submit.prevent="login">
        <h2>Iniciar sesión</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button @click="login">{{ isAuthenticated ? "Cerrar Sesión" : "Iniciar Sesión" }}</button>
        <p>¿No tienes una cuenta? <router-link to="/registro">Regístrate</router-link></p>
      </form>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import { users } from '../../utilities/cuentas.js';
import { isAuthenticated } from '../../utilities/auth.js';

const email = ref('');
const password = ref('');

const login = () => {
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    isAuthenticated.value = true; // Establece el estado de inicio de sesión en true.
    // Redirige al usuario a la página de inicio.
    router.push('/');
  } else {
    alert('Credenciales incorrectas.');
  }
};
</script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  