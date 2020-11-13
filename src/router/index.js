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

