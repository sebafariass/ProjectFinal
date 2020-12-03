import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        login: true,
      },
    },
    {
      path: "/login",
      name: "Login",
      component: () =>
        import( "../views/Login.vue"),
    },
    {
      path: "/registro",
      name: "Registro",
      component: () =>
        import( "../views/Registro.vue"),
        meta: {
          login: true,
        },
    },
    {
      path: "/muestra",
      name: "Muestra",
      component: () =>
        import("../views/Muestra.vue"),
        meta: {
          login: true,
        },
    },
    {
      path: "/iniciosesion",
      name: "Iniciosesion",
      component: () =>
        import("../views/Iniciosesion.vue"),
       
    },
    {
      path: "/mercado",
      name: "Mercado",
      component: () =>
        import("../views/Mercado.vue"),
        meta: {
          login: true,
        },
    },
    {
      path: "/trueque",
      name: "Trueque",
      component: () =>
        import("../views/Trueque.vue"),
     
    },
    
  ];

  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let ingreso = to.matched.some((record) => record.meta.login);

  if (!ingreso && usuario) {
    next("login");
  } else if (ingreso && !usuario) {
    next("/");
  } else {
    next();
  }
});

export default router;

