import { createApp } from 'vue'

import App from './components/vue-router-1/App.vue'

import router from './components/vue-router-1/route'
const app = createApp(App)
app.use(router)

app.mount('#app')