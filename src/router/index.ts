import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';

// Importar las vistas correspondientes
import EmpresaInicio from '../views/Login/Empresa/Inicio.vue';
import ProfesorInicio from '../views/Login/Profesor/Inicio.vue';
import AlumnosInicio from '../views/Login/Alumnos/Inicio.vue';
import AdminLogin from '../views/Login/Admin/Login.vue';

// Importar las vistas de Login y Register
import AlumnosLogin from '../views/Login/Alumnos/Login.vue';
import AlumnosRegister from '../views/Login/Alumnos/Register.vue';

import EmpresaLogin from '../views/Login/Empresa/Login.vue';
import EmpresaRegister from '../views/Login/Empresa/Register.vue';

import ProfesorLogin from '../views/Login/Profesor/Login.vue';
import ProfesorRegister from '../views/Login/Profesor/Register.vue';

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
  },

  // Rutas para Alumnos
  {
    path: '/alumno/login',
    name: 'AlumnosLogin',
    component: AlumnosLogin
  },
  {
    path: '/alumno/register',
    name: 'AlumnosRegister',
    component: AlumnosRegister
  },

  // Rutas para Empresas
  {
    path: '/empresa/login',
    name: 'EmpresaLogin',
    component: EmpresaLogin
  },
  {
    path: '/empresa/register',
    name: 'EmpresaRegister',
    component: EmpresaRegister
  },

  // Rutas para Profesores
  {
    path: '/profesor/login',
    name: 'ProfesorLogin',
    component: ProfesorLogin
  },
  {
    path: '/profesor/register',
    name: 'ProfesorRegister',
    component: ProfesorRegister
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
