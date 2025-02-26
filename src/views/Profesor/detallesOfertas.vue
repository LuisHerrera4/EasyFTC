<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="medium">
          <ion-title class="ion-text-center">VIEW OFFERS</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content class="ion-padding">
        <div class="offer-card">
          <div class="offer-title">
            <ion-label>Title of offer</ion-label>
          </div>
          
          <div class="offer-section">
            <ion-label class="section-title">Description</ion-label>
            <ion-label class="section-content">Lorem ipsum dolor sit amet, consectetur</ion-label>
          </div>
          
          <div class="offer-section">
            <ion-label class="section-title">Schedule</ion-label>
            <ion-label class="section-content">Lorem ipsum dolor sit amet, consectetur</ion-label>
          </div>
          
          <div class="offer-section">
            <ion-label class="section-title">Skills required</ion-label>
            <ion-label class="section-content">Lorem ipsum dolor sit amet, consectetur</ion-label>
          </div>
          
          <div class="offer-actions">
            <ion-button expand="block" color="success" class="accept-button">
              Accept project
            </ion-button>
            <ion-label class="estimated-date">Estimated date</ion-label>
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
    IonLabel,
    IonButton
  } from '@ionic/vue';
  </script>
  
  <style scoped>
  .offer-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-top: 16px;
  }
  
  .offer-title {
    background-color: #f0f5ff;
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .offer-section {
    padding: 12px 16px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .section-title {
    color: #3880ff;
    font-weight: 500;
    display: block;
    margin-bottom: 4px;
  }
  
  .section-content {
    color: #666;
    font-size: 14px;
    display: block;
  }
  
  .offer-actions {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .accept-button {
    width: 80%;
    max-width: 200px;
    margin: 0 auto;
    --border-radius: 20px;
  }
  
  .estimated-date {
    color: #999;
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
  }
  </style>