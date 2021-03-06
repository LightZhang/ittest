import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import './assets/css/base.css';
import 'iview/dist/styles/iview.css';
import './assets/css/app.less';

Vue.config.productionTip = false;

Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')