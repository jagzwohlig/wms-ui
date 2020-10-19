/* eslint-disable max-len */
import Vue from 'vue';
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue';
import moment from "vue-moment";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';
import VuePromiseBtn from 'vue-promise-btn';
// not required. Styles for built-in spinner
import 'vue-promise-btn/dist/vue-promise-btn.css';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationArrow,
  faPhoneAlt,
  faStar,
  faMapMarkerAlt,
  faPaintBrush,
  faComments,
  faUsers,
  faPowerOff,
  faEye,
} from '@fortawesome/free-solid-svg-icons'; // fas
import {
  faEnvelope,
  faClock,
  faUserCircle,
  faCheckCircle,
  faUser,
  faBuilding,
  faEyeSlash,


} from '@fortawesome/free-regular-svg-icons'; // far
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faPinterest,

} from '@fortawesome/free-brands-svg-icons'; // fab
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VuePromiseBtn);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(Toaster, { timeout: 3000 });
Vue.use(moment);


library.add(faLocationArrow, faPhoneAlt, faStar, faMapMarkerAlt, faPaintBrush, faComments, faUsers, faPowerOff, faEye); // fas
library.add(faEnvelope, faClock, faUserCircle, faCheckCircle, faUser, faBuilding, faEyeSlash); // far
library.add(faTwitter, faFacebookF, faGooglePlusG, faPinterest); // fab

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
