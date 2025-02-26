<template>
    <ion-content>
      <div class="header">
        <h1>HELP</h1>
      </div>
      
      <!-- Other content... -->
      
      <div class="section-title">
        Frequent questions
      </div>
      
      <ion-slides :options="slideOptions" class="help-slides">
        <ion-slide v-for="(item, index) in helpItems" :key="index" class="help-slide">
          <div class="slide-content">
            <div class="slide-title">{{ item.title }}</div>
            <ion-icon :icon="chevronForwardOutline"></ion-icon>
          </div>
        </ion-slide>
      </ion-slides>
      
      <!-- Other content... -->
    </ion-content>
  </template>
  
  <script>
  import { IonContent, IonSlides, IonSlide, IonIcon } from '@ionic/vue';
  import { chevronForwardOutline } from 'ionicons/icons';
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'IonicSlides',
    components: {
      IonContent,
      IonSlides,
      IonSlide,
      IonIcon
    },
    setup() {
      const slideOptions = {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true
      };
      
      const helpItems = ref([
        { title: 'How to modify schedules?' },
        { title: 'Can a student have two agreements?' },
        { title: 'How to modify the daily activities?' },
        // ... other items
      ]);
      
      return {
        slideOptions,
        helpItems,
        chevronForwardOutline
      };
    }
  });
  </script>
  
  <style scoped>
  /* Basic styling... */
  
  .help-slides {
    padding: 0 15px;
  }
  
  .help-slide {
    width: auto;
    max-width: 300px;
  }
  
  .slide-content {
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .slide-title {
    font-size: 14px;
  }
  </style>