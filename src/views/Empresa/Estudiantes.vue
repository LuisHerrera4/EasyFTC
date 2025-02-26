<template>
    <ion-page>
      <ion-header>
        <ion-toolbar class="bg-gray-200">
          <ion-title class="font-bold text-center">STUDENTS</ion-title>
        </ion-toolbar>
        <ion-segment value="students" class="bg-white">
          <ion-segment-button value="others">
            <ion-label>Others</ion-label>
          </ion-segment-button>
          <ion-segment-button value="students">
            <ion-label>Students</ion-label>
          </ion-segment-button>
          <ion-segment-button value="help">
            <ion-label>Help</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-header>
  
      <ion-content>
        <div class="grid grid-cols-2 gap-4 p-4">
          <div v-for="i in 6" :key="i" class="bg-white rounded-lg p-4 shadow">
            <div class="flex items-center space-x-3">
              <ion-avatar>
                <img :src="'users.png'" alt="Student avatar" class="w-12 h-12 rounded-full" />
              </ion-avatar>
              <div>
                <h3 class="font-medium">Michal Jack</h3>
                <p class="text-sm text-gray-500">28 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonAvatar
  } from '@ionic/vue';
  </script>
  
  <style scoped>
  ion-segment {
    --background: white;
  }
  
  ion-segment-button {
    --color: #666;
    --color-checked: #000;
    --indicator-color: #000;
  }
  
  ion-toolbar {
    --background: #f3f4f6;
  }
  </style>