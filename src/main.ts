import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@mdi/font/css/materialdesignicons.css'

import { extend, ValidationProvider } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)

extend('required', required)
extend('email', email)

Vue.config.productionTip = false

new Vue({
  // @ts-ignore
  vuetify,
  render: h => h(App)
}).$mount('#app')
