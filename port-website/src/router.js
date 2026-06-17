import { createRouter, createWebHistory } from 'vue-router';

import Home from './App.vue';
import About from './pages/About.vue';
import GodotPython from './pages/GodotPython.vue';
import VueNet from './pages/VueNet.vue';
import Contact from './pages/Contact.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/godot-python', component: GodotPython },
  { path: '/vue-net', component: VueNet },
  { path: '/contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});