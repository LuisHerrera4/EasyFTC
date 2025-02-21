<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="container">
          <div class="logo-container">
            <img src="/logo.gif" alt="EasyFCT Logo" class="logo">
            <h1>EasyFCT</h1>
          </div>
  
          <div class="buttons-container">
            <ion-button expand="block" fill="outline" class="register-btn" @click="goToRegister">
              Register
            </ion-button>
            
            <ion-button expand="block" class="login-btn" @click="goToLogin">
              Login
            </ion-button>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonPage, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'HomePage',
    components: { IonContent, IonPage, IonButton },
    setup() {
      const router = useRouter();
  
      const goToRegister = () => {
        router.push('/register');
      };
  
      const goToLogin = () => {
        router.push('/login');
      };
  
      return {
        goToRegister,
        goToLogin
      };
    }
  });
  </script>
  
  <style scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }
  
  .logo-container {
    text-align: center;
    margin-bottom: 48px;
  }
  
  .logo {
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
  }
  
  .logo-container h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }
  
  .buttons-container {
    width: 100%;
    max-width: 300px;
  }
  
  ion-button {
    margin-bottom: 16px;
    height: 48px;
    --border-radius: 8px;
    font-weight: 500;
  }
  
  .register-btn {
    --border-width: 1px;
    --border-color: var(--ion-color-dark);
    --color: var(--ion-color-dark);
  }
  
  .login-btn {
    --background: var(--ion-color-dark);
    --color: var(--ion-color-light);
  }
  </style>