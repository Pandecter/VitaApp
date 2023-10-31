import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify()
const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
