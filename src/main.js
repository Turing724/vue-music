// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import VueLazyLoad from 'vue-lazyLoad';
import 'common/stylus/index.styl';
fastclick.attach(document.body); // 解决手机端点击事件三秒延时
Vue.config.productionTip = false;

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
