import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);
const routes = [

];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active router-link-active',
  routes,
});

new Vue(Vue.util.extend({
  router
}, App)).$mount('#app');

/* eslint no-unused-vars: ["error", { "args": "none" }] */
router.beforeEach((transition, redirect, next) => {
  next();
});
/* eslint no-unused-vars: ["error", { "args": "none" }] */
router.afterEach((transition) => {
});
