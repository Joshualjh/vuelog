import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import rount from './router.js'


createApp(App).use(rount).mount('#app')
