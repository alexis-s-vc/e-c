<template>
    <header class="header">
      <div class="left-logo">
        <img src="../../assets/logo.png" alt="Logo Izquierdo">
      </div>
      <div class="right-logo">
        <img src="../../assets/escudo.png" alt="Logo Derecho">
      </div>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    background-color: #007BFF;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .left-logo img, .right-logo img {
    width: 100px; /* Ajusta el tamaño de los logotipos según tus necesidades. */
  }
  
  .left-logo {
    margin-left: 20px;
  }
  
  .right-logo {
    margin-right: 20px;
  }
  </style>
  