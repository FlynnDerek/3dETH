import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import Vuethereum from "vuethereum"
import vue2Dropzone from "vue2-dropzone"
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import FullpageModal from 'vue-fullpage-modal'

Vue.use(FullpageModal)
Vue.use(Vuethereum)
Vue.use(vue2Dropzone)


new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
