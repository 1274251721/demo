import { createApp } from "vue";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDown,
  faQrcode,
  faEnvelope,
  faUserTie,
  faPlus,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import router from "./router/index.ts";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { Input, InputNumber } from "ant-design-vue";
let app = createApp(App);
app.use(Input);
app.use(InputNumber);

library.add(faAngleDown, faQrcode, faEnvelope, faUserTie, faPlus, faEllipsis);
app.component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
