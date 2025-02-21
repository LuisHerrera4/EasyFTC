<template>
  <ion-page>
    <ion-content>
      <div class="ion-padding">
        <!-- Back Button -->
        <ion-button 
          fill="clear" 
          class="custom-back-button" 
          @click="goBack"
        >
          <img 
            src="@/assets/back_arrow.svg" alt="back_arrow"  class="back-arrow"
          />
        </ion-button>

        <!-- Logo and Content -->
        <div class="content-container">
          <div class="logo-container">
            <img 
              src="@/assets/logo.gif" alt="Logo" class="logo"/>
            <h1 class="title">EasyFCT</h1>
          </div>

          <div class="buttons-container">
            <ion-button expand="block" fill="outline" class="register-btn" router-link="/"
            >
              Register
            </ion-button>
            
            <ion-button 
             expand="block" 
             class="login-btn"
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

// Asume que tienes estas imágenes en tus assets
const backArrowSrc = '@/assets/back_arrow.svg';
const logoSrc = '@/assets/logo.gif';

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
  margin-top: 50px;
  width: 331px;
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.register-btn {
  width: 331px;
  height: 56px;
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
  width: 331px;
  height: 56px;
  font-size: 15px;
  font-family: 'Lexend', sans-serif;
  font-weight: 500;
  --background: #000;
  --color: #fff;
  --border-radius: 4px;
  --padding-top: 1.5px;
  --padding-bottom: 1px;
}



</style>