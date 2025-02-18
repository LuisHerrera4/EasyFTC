import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';

// Importar las vistas correspondientes
import EmpresaInicio from '../views/Login/Empresa/Inicio.vue';
import ProfesorInicio from '../views/Login/Profesor/Inicio.vue';
import AlumnosInicio from '../views/Login/Alumnos/Inicio.vue';
import AdminLogin from '../views/Login/Admin/Login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/empresa',
    name: 'EmpresaInicio',
    component: EmpresaInicio
  },
  {
    path: '/profesor',
    name: 'ProfesorInicio',
    component: ProfesorInicio
  },
  {
    path: '/alumno',
    name: 'AlumnosInicio',
    component: AlumnosInicio
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component: AdminLogin
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
