<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <!-- Botón de Retroceso con imagen -->
      <button class="back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Volver" class="back-icon" />
        </button>
      <div class="ion-padding">
        
        <!-- Formulario de Login -->
        <div class="login-container">
          <h1 class="welcome-text">Bienvenido de nuevo</h1>

          <form @submit.prevent="handleLogin" class="login-form">
            <ion-item class="custom-input">
              <ion-input v-model="email" label="Email" type="email" required />
            </ion-item>

            <ion-item class="custom-input">
              <ion-input v-model="password" :type="showPassword ? 'text' : 'password'" label="Contraseña" required />
              <button type="button" class="eye-button" @click="togglePassword">
                <img :src="showPassword ? '/eye_open.png' : '/eye_close.png'" class="eye-icon" />
              </button>
            </ion-item>

            <ion-button expand="block" type="submit" class="login-btn">Iniciar sesión</ion-button>
          </form>

          <!-- Login con Redes Sociales -->
          <div class="social-login">
            <div class="divider"><span class="divider-text">O ingresa con</span></div>
            <div class="social-buttons">
              <a href="https://facebook.com/login" target="_blank" class="social-btn">
                <img src="/facebook.png" alt="logo facebook" class="social-icon" />
              </a>
              <a href="https://accounts.google.com" target="_blank" class="social-btn">
                <img src="/google.svg" alt="logo google" class="social-icon" />
              </a>
              <a href="https://appleid.apple.com" target="_blank" class="social-btn">
                <img src="/apple.png" alt="logo apple"class="social-icon" />
              </a>
            </div>
          </div>

          <!-- Enlace para registrarse -->
          <p class="signup-text">
            ¿No tienes cuenta?
            <ion-router-link to="/profesor/register" class="signup-link">Regístrate aquí</ion-router-link>
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IonPage, IonContent, IonButton, IonInput, IonItem } from "@ionic/vue";

const router = useRouter();
const email = ref("");
const password = ref("");
const showPassword = ref(false);

const goBack = () => {
  router.go(-1);
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  console.log("Intentando iniciar sesión con:", email.value, password.value);
};
</script>

<style scoped>
/* Estilos generales */
.ion-padding {
  padding: 24px;
  max-width: 400px;
  margin: 0 auto;
}

/* Botón de Retroceso */
.back-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;
}

.back-button:hover {
  transform: scale(1.1);
}


/* Contenedor del login */
.login-container {
  width: 100%;
}

.welcome-text {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #000;
}

/* Formulario */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.custom-input {
  --background: #f5f5f5;
  --border-radius: 8px;
  --padding-start: 16px;
  --padding-end: 16px;
  margin-bottom: 16px;
}

ion-input {
  --padding-top: 16px;
  --padding-bottom: 16px;
  font-size: 16px;
}

/* Botón de login */
.login-btn {
  --background: #000;
  --border-radius: 8px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  margin-top: 8px;
  font-weight: 500;
}

/* Botón para alternar la visibilidad de la contraseña */
.eye-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;
}

.eye-button:hover {
  transform: scale(1.1);
}

.eye-icon {
  width: 24px;
  height: 24px;
}

/* Redes Sociales */
.social-login {
  margin-top: 32px;
}

.divider {
  text-align: center;
  margin: 24px 0;
}

.divider-text {
  background: #fff;
  padding: 0 16px;
  color: #666;
  font-size: 14px;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
}

.social-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon {
  width: 24px;
  height: 24px;
}

/* Registro */
.signup-text {
  text-align: center;
  margin-top: 32px;
  color: #666;
}

.signup-link {
  color: #2196F3;
  font-weight: 500;
}
</style>
