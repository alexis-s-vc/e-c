<template>
  <div>
    <Header />
    <div class="auth-buttons">
      <router-link to="/Login" class="auth-button">Iniciar sesión</router-link>
      <router-link to="/Registro" class="auth-button">Regístrate</router-link>
    </div>
    <main class="home-main">
      <h1 class="home-title">Bienvenido a nuestra tienda en línea</h1>
      <div class="cart-button-container">
        <router-link to="/Carrito" class="cart-button">
          <!-- Imagen del carrito -->
          <img src="../assets/carrito.jpg" alt="Carrito" />
        </router-link>
      </div>

      <div class="productos-container">
        <div v-for="producto in productos" :key="producto.id" class="producto">
          <h2 class="producto-title">{{ producto.nombre }}</h2>
          <section class="caracteristicas">
            <h3>Características:</h3>
            <div class="caracteristicas-item">
              {{ producto.caracteristicas.a }}
            </div>
            <div class="caracteristicas-item">
              {{ producto.caracteristicas.b }}
            </div>
            <div class="caracteristicas-item">
              {{ producto.caracteristicas.c }}
            </div>
            <div class="caracteristicas-item">
              {{ producto.caracteristicas.d }}
            </div>
            <div class="caracteristicas-item">
              {{ producto.caracteristicas.e }}
            </div>
          </section>
          <p class="opiniones"><strong>Opiniones:</strong> {{ producto.data.opiniones }}</p>
          <p class="resumen"><strong>Resumen:</strong> {{ producto.resumen }}</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.home-main {
  text-align: center;
  padding: 20px;
}

.home-title {
  font-size: 24px;
  margin: 20px 0;
}

.productos-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}

.producto {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.producto-title {
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
}

.caracteristicas {
  margin-top: 10px;
}

.caracteristicas-item {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
}

.opiniones {
  margin: 10px 0;
}

.resumen {
  margin: 10px 0;
}

@media (max-width: 768px) {
  .productos-container {
    grid-template-columns: 1fr;
  }
}

.auth-buttons {
  text-align: right;
  margin-top: 20px;
}

.auth-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  font-weight: bold;
  text-decoration: none;
  color: #007BFF;
  border: 1px solid #007BFF;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.auth-button:hover {
  background-color: #007BFF;
  color: #fff;
}
.cart-button-container {
  text-align: center;
}

.cart-button {
  display: inline-block;
  border: none;
  background: none;
  cursor: pointer;
}

.cart-button img {
  width: 200px; /* Ancho de la imagen del carrito */
  height: auto; /* Altura automática para mantener la proporción */
}
</style>



<script setup>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';
import { productos } from '../utilities/data.js'

</script> 