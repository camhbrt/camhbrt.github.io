import { createRouter, createWebHistory } from 'vue-router';
import V2 from './pages/v2.vue';
import V1 from './pages/V1.vue';
import Legal from './pages/Legal.vue'
import Privacy from './pages/Privacy.vue'

const routes = [
  { 
    path: '/', 
    component: V1 
  },
  { 
    path: '/v2', 
    component: V2 
  },
  { 
    path: '/legal', 
    component: Legal
  },
  { 
    path: '/privacy', 
    component: Privacy
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
