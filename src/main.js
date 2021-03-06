// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'//vuex
import zutil from './util/util'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.zutil = zutil;

// {{ dateTime | time('HH:mm:ss')}}
Vue.filter('time', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm';
  return moment(value).format(formatString);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
