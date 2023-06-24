import Vue from 'vue'
import App from './App.vue'
// import router from "./router";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueMeta from 'vue-meta'

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueMeta)

new Vue({
    // router,
    render: h => h(App),
}).$mount('#app')