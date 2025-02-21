<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="ion-padding">
          <!-- Back Button -->
          <ion-button 
            fill="clear" 
            class="custom-back-button" 
            @click="goBack"
          >
          <img 
            src="@/assets/back_arrow.svg" alt="back_arrow"  class="back-arrow"/>

          </ion-button>
  
          <!-- Logo and Content -->
          <div class="content-container">
            <div class="logo-container">
              <img 
                src="@/assets/logo.gif" alt="EasyFCT Logo" class="logo"/>
              <h1 class="title">EasyFCT</h1>
            </div>
  
            <div class="buttons-container">
              <ion-button 
                expand="block" 
                fill="outline" 
                class="register-btn"
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
    width: 64px;
    height: 64px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    margin: 0;
  }
  
  .buttons-container {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .register-btn {
    --background: transparent;
    --color: #000;
    --border-color: #000;
    --border-style: solid;
    --border-width: 1px;
    --border-radius: 4px;
    --padding-top: 1.5rem;
    --padding-bottom: 1.5rem;
  }
  
  .login-btn {
    --background: #000;
    --color: #fff;
    --border-radius: 4px;
    --padding-top: 1.5rem;
    --padding-bottom: 1.5rem;
  }
  
  /* Responsive adjustments */
  @media (min-width: 768px) {
    .logo {
      width: 80px;
      height: 80px;
    }
  
    .title {
      font-size: 1.75rem;
    }
  
    .buttons-container {
      max-width: 400px;
    }
  }
  </style>