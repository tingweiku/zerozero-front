import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/app.scss'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faTimes, faArrowRight, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

import mixin from './mixins.js'

import VueGtag from 'vue-gtag'
Vue.use(VueGtag, {
  config: { id: 'G-S6RJ86RJ1N' }
})

library.add(faCheck, faTimes, faArrowRight, faCalendarCheck)

axios.defaults.baseURL = process.env.VUE_APP_API
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.component('ImgInputer', ImgInputer)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-popup', LPopup)
Vue.component('l-icon', LIcon)

Vue.mixin(mixin)

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
