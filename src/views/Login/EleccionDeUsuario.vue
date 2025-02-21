<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="container">
        <!-- Logo (reemplaza la ruta según corresponda) -->
        <img src="/logo.gif" alt="Logo" class="logo" />
        
        <!-- Título -->
        <h1 class="title">EasyFTC</h1>
        
        <!-- Botones -->
        <div class="buttons">
          <ion-button expand="block" fill="outline" class="button" router-link="/empresa">Compañía</ion-button>
          <ion-button expand="block" fill="outline" class="button" router-link="/profesor">Profesor</ion-button>
          <ion-button expand="block" fill="outline" class="button" router-link="/alumno">Alumno</ion-button>
          <ion-button expand="block" fill="outline" class="button" router-link="/admin">Admin</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton } from '@ionic/vue';

export default {
  name: 'HomePage',
  components: {
    IonPage,
    IonContent,
    IonButton,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600&display=swap');

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 16px;
  background-color: #f8f8f8;
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


.buttons {
  width: 100%;
  max-width: 300px;
}

.button {
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
</style>
