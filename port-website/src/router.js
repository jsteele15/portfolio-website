import { createRouter, createWebHistory } from 'vue-router';

import Home from './App.vue';
import GodotPython from './pages/GodotPython.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/godot-python', component: GodotPython },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});