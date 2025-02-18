<template>
    <ion-page>
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-buttons slot="start">
    <img 
      src="@/assets/back_arrow.svg" 
      alt="Back" 
      class="back-button" 
      @click="router.push('/home')" 
    />
  </ion-buttons>
  
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <div class="flex flex-col items-center justify-center min-h-screen px-4">
          <div class="w-full max-w-sm space-y-8">
            <div class="flex flex-col items-center space-y-2">
              <div class="w-16 h-16">
                <img src="@/assets/logo.gif" alt="EasyFCT Logo" class="logo" />
              </div>
              <h1 class="text-xl font-medium">EasyFCT</h1>
            </div>
            
            <div class="space-y-4 w-full">
              <ion-button 
                expand="block" 
                fill="outline" 
                class="h-12"
              >
                Register
              </ion-button>
              
              <ion-button 
                expand="block"
                class="h-12"
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
  import {IonPage, IonHeader, IonToolbar, IonButtons, IonContent, IonButton} from '@ionic/vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  </script>
  
  <style scoped>
  
  .logo {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  
  ion-button {
    --padding-top: 1rem;
    --padding-bottom: 1rem;
  }
  
  /* Make sure the back button icon is black */
  ion-back-button::part(icon) {
    color: black;
  }
  </style>