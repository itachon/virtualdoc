import { createWebHistory, createRouter } from "vue-router";
import Mantenedor from "../componentes/mantenedorComponent.vue";
import Principal from "../componentes/paginaprincipal/mantencionComponent.vue";
//AUTH

import LoginAdministrador from "../auth/loginAdminComponent.vue";



const routes = [
  {
    path: "/",
    name: "Principal",
    component: Principal,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginAdministrador,
  },
  {
    path: "/mantenedor",
    name: "Mantenedor",
    component: Mantenedor,
    meta: { requireAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  let user_token = localStorage.getItem('usu_token');
  let auth = user_token != null ? true : false;
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (!auth) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
})
export default router;