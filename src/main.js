import {
  createApp
} from "vue";

import App from "./App.vue";
import router from "./routes";
import store from "./store";
import loadImage from "./plugins/loadImage";

import Plugin from '@quasar/quasar-ui-qcalendar/src/QCalendarDay.js'
import '@quasar/quasar-ui-qcalendar/src/css/calendar-day.sass'

createApp(App).use(router).use(store).use(loadImage).use(Plugin).mount("#app");