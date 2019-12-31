import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import {mymixin} from './mixins/validateGameEnd.js'

Vue.config.productionTip = false

new Vue({
  store,
  mixins: [mymixin],
  beforeCreate(){
    console.log("Init: Local Store")
    this.$store.commit('initialiseStore');
  },
  render: h => h(App)
}).$mount('#app')


