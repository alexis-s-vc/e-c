<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Información de contacto</h4>
          <p>Dirección: Ciudad Universitaria</p>
          <p>Teléfono: +52 5534104911</p>
          <p>Email: alexis.vazquez@ingenieria.unam.edu</p>
        </div>
        <div class="footer-section">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
           <!-- <li><router-link to="/productos">Productos</router-link></li>-->
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; {{ new Date().getFullYear() }} Facultad de ingenieria - Todos los derechos reservados
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  
  .footer-section {
    flex: 1;
    padding: 0 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 10px;
  }
  </style>
  