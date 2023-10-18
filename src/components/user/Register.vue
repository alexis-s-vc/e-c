<template>
    <div class="register-container">
      <form class="register-form" @submit.prevent="register">
        <h2>Registro</h2>
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" v-model="name" id="name" required>
        </div>
        <div class="form-group">
          <label for="address">Dirección:</label>
          <input type="text" v-model="address" id="address" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" v-model="confirmPassword" id="confirmPassword" required>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';
import { users } from '../../utilities/cuentas.js';

const name = ref('');
const address = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  // Crea un objeto de usuario
  const user = {
    name: name,
    address: address,
    email: email,
    password: password,
  };

  // Agrega el usuario al arreglo global
  users.push(user);

  

};
</script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .register-form {
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
  