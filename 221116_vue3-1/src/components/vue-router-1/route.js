import { createRouter, createWebHashHistory } from 'vue-router'

import Cyxy from './Cyxy.vue'
import Hxos from './Hxos.vue'
import Dgql from './Dgql.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/hxos' },
        { path: '/cyxy', component: Cyxy },
        { path: '/hxos', component: Hxos },
        { path: '/dgql', component: Dgql }

    ]
})
export default router
// createApp(App).mount('#app')
