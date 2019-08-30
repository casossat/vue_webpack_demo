import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { router } from './router'

import App from './app.vue';

const vuetifyOptions = { }
Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
  vuetify: new Vuetify(vuetifyOptions)
}).$mount('#root')