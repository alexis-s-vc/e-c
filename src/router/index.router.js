import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
				{
				  path: "/:catchAll(.*)",
				  redirect: { name: "Home" },
				},
       {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: '/Login',
          name: 'Login',
          component: () => import('../components/user/Login.vue'),
        },
				{
          path: '/Registro',
          name: 'Registro',
          component: () => import('../components/user/Register.vue'),
        },
        {
          path: '/Carrito',
          name: 'Carrito',
          component: () => import('../components/user/Carrito.vue'),
        },
    ]
})

export default router   