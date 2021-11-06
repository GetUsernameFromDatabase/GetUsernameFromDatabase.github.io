import Particles from 'particles.vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Particles);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
