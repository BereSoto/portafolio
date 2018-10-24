import Vue from 'vue';
import Buefy from 'buefy';

import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  // ...
});

new Vue({
  render: h => h(App),
}).$mount('#app');
