import Vue from 'vue';
import App from './App.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Grafik from './components/Grafik.vue';
import Report from './components/Report.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/grafik', component: Grafik },
  { path: '/report', component: Report },
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});