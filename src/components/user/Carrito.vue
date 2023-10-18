<template>
    <div>
      <Header />
      <main class="carrito-main">
        <h1 class="carrito-title">Carrito de Compras</h1>
  
        <div v-if="carrito.length === 0" class="carrito-vacio">
          Tu carrito está vacío.
        </div>
        <div v-else>
          <div v-for="item in carrito" :key="item.id" class="carrito-item">
            <h3>{{ item.nombre }}</h3>
            <p>Precio: {{ item.precio }} USD</p>
            <p>Cantidad: {{ item.cantidad }}</p>
            <button @click="eliminarItem(item.id)">Eliminar</button>
          </div>
          <div class="total">
            <p>Total: {{ calcularTotal() }} USD</p>
            <button @click="finalizarCompra">Finalizar Compra</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Header from '../common/Header.vue';
  import Footer from '../common/Footer.vue';
  
  // Datos simulados del carrito (puedes obtener estos datos de tu tienda en línea)
  const carrito = ref([
    { id: 1, nombre: 'Producto 1', precio: 10, cantidad: 2 },
    { id: 2, nombre: 'Producto 2', precio: 15, cantidad: 1 },
  ]);
  
  const calcularTotal = () => {
    return carrito.value.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };
  
  const eliminarItem = (itemId) => {
    carrito.value = carrito.value.filter(item => item.id !== itemId);
  };
  
  const finalizarCompra = () => {
    // Agregar lógica para finalizar la compra, como enviar los datos al servidor.
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para el componente Carrito */
  .carrito-main {
    text-align: center;
    padding: 20px;
  }
  
  .carrito-title {
    font-size: 24px;
    margin: 20px 0;
  }
  
  .carrito-vacio {
    margin: 20px 0;
    color: #999;
  }
  
  .carrito-item {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;
    text-align: left;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .total {
    margin-top: 20px;
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
  