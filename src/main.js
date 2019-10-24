import Vue from 'vue'
import Wedding from './Wedding.vue'
import axios from 'axios'

Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Wedding)
})