<template>
  <ion-page>
    <ion-content>
      <div class="ion-padding">
        <!-- Botón de Retroceso -->
        <ion-button 
          fill="clear" 
          class="custom-back-button" 
          @click="goBack"
        >
          <img 
            src="@/assets/back_arrow.svg" alt="back_arrow" class="back-arrow"
          />
        </ion-button>

        <!-- Logo y Contenido -->
        <div class="content-container">
          <div class="logo-container">
            <img 
              src="@/assets/logo.gif" alt="Logo" class="logo"/>
            <h1 class="title">EasyFCT</h1>
          </div>

          <div class="buttons-container">
            <ion-button 
              expand="block" 
              fill="outline" 
              class="register-btn"
              router-link="/alumno/register"
            >
              Register
            </ion-button>
            
            <ion-button 
              expand="block" 
              class="login-btn"
              router-link="/alumno/login"
            >
              Login
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonButton,
} from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&display=swap');

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}

.custom-back-button {
  --padding-start: 0;
  --padding-end: 0;
  margin-bottom: 2rem;
  height: 44px;
}

.back-arrow {
  width: 24px;
  height: 24px;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

.logo {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.title {
  font-size: 28px;
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
}

.buttons-container {
  width: 331px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.register-btn {
  font-size: 15px;
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  margin-bottom: 16px;
  border-radius: 8px;
  --border-width: 1px;
  --border-color: #1E232C;
  color: #1E232C;
  --ion-color-base: transparent;
}

.login-btn {
  font-size: 15px;
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  --background: #000;
  --color: #fff;
  --border-radius: 4px;
  --padding-top: 10px;
  --padding-bottom: 10px;
}
</style>
