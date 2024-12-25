import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import Vant from 'vant';
import 'vant/lib/index.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(NutUI)
app.use(Vant)

app.mount('#app')
