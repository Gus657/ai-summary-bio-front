import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App.vue'
const cors = require('cors');
import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Vue.use(cors);
Vue.use(VueMaterial)
Vue.config.productionTip = false

Sentry.init({
  Vue,
  dsn: "https://3aeb4cacbff04c0ab1bedea0dcd2f613@o573091.ingest.sentry.io/5723239",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

new Vue({
  render: h => h(App),
}).$mount('#app')
