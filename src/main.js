import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//vuetify ADD 
import vuetify from './plugins/vuetify';

//importando bootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//importando firebase
import firebase from 'firebase'; 

//import vueChatScroll
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)


Vue.config.productionTip = false

// VINCULANDO FIREBASE CON NUESTRO PROYECTO
var firebaseConfig = {
  apiKey: "AIzaSyCkmqqWztYm-8GJe5k927Km4q_QYMuqI30",
  authDomain: "proyectofinal-6fe4e.firebaseapp.com",
  databaseURL: "https://proyectofinal-6fe4e.firebaseio.com",
  projectId: "proyectofinal-6fe4e",
  storageBucket: "proyectofinal-6fe4e.appspot.com",
  messagingSenderId: "162832993062",
  appId: "1:162832993062:web:c11349cdedd29e2b170fe7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
