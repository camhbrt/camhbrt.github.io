import { createRouter, createWebHistory } from 'vue-router';
import V2 from './pages/v2.vue';
import V1 from './pages/V1.vue';

const routes = [
  { 
    path: '/', 
    component: V1 
  },
  { 
    path: '/v2', 
    component: V2 
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
