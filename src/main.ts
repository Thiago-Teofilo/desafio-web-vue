import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { key, store } from './store';

import '@/assets/css/main.css';

createApp(App).use(store, key).use(router).mount('#app');
