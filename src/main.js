// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueFire from '../node_modules/vuefire';
import firebase from '../node_modules/firebase/app';
import '../node_modules/firebase/firestore';

Vue.config.productionTip = false;

Vue.use(VueFire);
firebase.initializeApp({
  projectId: 'fir-demo-e9671',
  databaseURL: 'https://fir-demo-e9671.firebaseio.com',
});

export const db = firebase.firestore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
