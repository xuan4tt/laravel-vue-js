import './bootstrap';
import {createApp} from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue';
import router from "./routers";

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const app = createApp(App);
app.use(router)
app.use(Antd)
app.mount("#app")
