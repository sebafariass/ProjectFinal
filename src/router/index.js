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
        import(/* webpackChunkName: "login" */ "../views/Login.vue"),
       
    },

    //RUTA NUEVA UNA VEZ ENTRANDO LA PARTE LOGIN 
    {
      path: "/chat",
      name: "Chat",
      component: () =>
        import( "../views/Chat.vue"),
        meta: {
          login: true,
        },
    },
    {
      path: "/recuperacion",
      name: "Recuperacion",
      component: () =>
        import( "../views/Chat.vue"),
        meta: {
          login: true,
        },
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

