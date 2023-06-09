import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './css/normalize.css'
import './css/styles.css'
import './css/media.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
