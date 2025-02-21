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
            <ion-icon :icon="chevronBack" class="back-icon" />
          </ion-button>
  
          <!-- Login Form -->
          <div class="login-container">
            <h1 class="welcome-text">Welcome back!</h1>
  
            <form @submit.prevent="handleLogin" class="login-form">
              <ion-item class="custom-input">
                <ion-input
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                />
              </ion-item>
  
              <ion-item class="custom-input">
                <ion-input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  required
                />
                <button 
                  type="button"
                  class="eye-button"
                  @click="togglePassword"
                  :aria-label="showPassword ? 'Hide password' : 'Show password'"
                >
                  <img 
                    :src="showPassword ? '@/assets/eye_open.png' : '@/assets/eye_close.png'"
                    :alt="showPassword ? 'Hide password' : 'Show password'"
                    class="eye-icon"
                  />
                </button>
              </ion-item>
  
              <ion-button 
                expand="block" 
                type="submit"
                class="login-btn"
              >
                Login
              </ion-button>
            </form>
  
            <!-- Social Login -->
            <div class="social-login">
              <div class="divider">
                <span class="divider-text">Or sign in with</span>
              </div>
              
              <div class="social-buttons">
                <a 
                  href="https://facebook.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="social-btn"
                  aria-label="Sign in with Facebook"
                >
                  <img 
                    src="@/assets/facebook.png" 
                    alt="facebook" 
                    class="social-icon"
                  />
                </a>
                <a 
                  href="https://accounts.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="social-btn"
                  aria-label="Sign in with Google"
                >
                  <img 
                    src="@/assets/google.png" 
                    alt="google" 
                    class="social-icon"
                  />
                </a>
                <a 
                  href="https://appleid.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="social-btn"
                  aria-label="Sign in with Apple"
                >
                  <img 
                    src="@/assets/apple.png" 
                    alt="" 
                    class="social-icon"
                  />
                </a>
              </div>
            </div>
  
            <!-- Sign Up Link -->
            <p class="signup-text">
              Don't have an account? 
              <ion-router-link href="/signup" class="signup-link">
                Sign up here
              </ion-router-link>
            </p>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    IonPage,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonIcon,
  } from '@ionic/vue';
  import { chevronBack } from 'ionicons/icons';
  
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  const showPassword = ref(false);
  
  const goBack = () => {
    router.go(-1);
  };
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  const handleLogin = async () => {
    // Implement your login logic here
    console.log('Login attempt with:', email.value, password.value);
  };
  </script>
  
  <style scoped>
  /* ... (mantener los estilos anteriores) ... */
  
  .eye-button {
    background: transparent;
    border: none;
    padding: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    border-radius: 50%;
  }
  
  .eye-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .eye-button:active {
    transform: scale(0.95);
  }
  
  .eye-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  
  .ion-padding {
  padding: 24px;
  max-width: 400px;
  margin: 0 auto;
}

.custom-back-button {
  margin-bottom: 32px;
}

.back-icon {
  font-size: 24px;
  color: #000;
}

.login-container {
  width: 100%;
}

.welcome-text {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #000;
}

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

.login-btn {
  --background: #000;
  --border-radius: 8px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  margin-top: 8px;
  font-weight: 500;
  text-transform: none;
}

.social-login {
  margin-top: 32px;
}

.divider {
  position: relative;
  text-align: center;
  margin: 24px 0;
}

.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: calc(50% - 70px);
  height: 1px;
  background-color: #e0e0e0;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
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
  transition: all 0.2s ease;
}

.social-btn:hover {
  background-color: #f5f5f5;
}

.social-icon {
  width: 24px;
  height: 24px;
}

.signup-text {
  text-align: center;
  margin-top: 32px;
  color: #666;
  font-size: 14px;
}

.signup-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

.signup-link:hover {
  text-decoration: underline;
}

  </style>