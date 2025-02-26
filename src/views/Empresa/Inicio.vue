<template>
  <div class="container">
    <header class="header">
      <h1 class="header-title">OFFERS</h1>
    </header>

<nav class="nav">
  <div class="nav-container">
    <div class="nav-buttons">
      <button class="nav-button active" @click="navigateTo('offers')">
        <img src="/paper.png" alt="Offers" class="nav-icon"/>
        <span class="nav-text">Offers</span> <!-- Texto debajo del icono -->
      </button>
      
      <button class="nav-button" @click="navigateTo('students')">
        <img src="/users.png" alt="Students" class="nav-icon"/>
        <span class="nav-text">Students</span> <!-- Texto debajo del icono -->
      </button>
      
      <button class="nav-button" @click="navigateTo('help')">
        <img src="/question.png" alt="Help" class="nav-icon"/>
        <span class="nav-text">Help</span> <!-- Texto debajo del icono -->
      </button>
    </div>
  </div>
</nav>


    <main class="main">
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-fields">
          <input
            type="text"
            v-model="form.title"
            placeholder="Title of offer"
            class="input"
          />

          <div class="form-group">
            <label class="label">Label</label>
            <textarea
              v-model="form.value"
              placeholder="Value"
              rows="4"
              class="textarea"
            ></textarea>
          </div>

          <input
            type="text"
            v-model="form.skills"
            placeholder="Skills Required"
            class="input"
          />

          <input
            type="text"
            v-model="form.direction"
            placeholder="Direction"
            class="input"
          />

          <button type="button" class="select-button">
            <span>Vacancies</span>
            <img src="/arrowDown.png" alt="Expand" class="select-icon"/>
          </button>
        </div>

        <button type="submit" class="submit-button">
          Published
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  title: '',
  value: '',
  skills: '',
  direction: '',
  vacancies: ''
})

const navigateTo = (route) => {
  router.push(`/${route}`)
}

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<style>
/* Variables */
:root {
  --color-primary: #1d4ed8;
  --color-primary-hover: #1e40af;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-500: #6b7280;
  --color-gray-700: #374151;
  --color-blue-50: #eff6ff;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  --border-radius: 0.5rem;
  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
}

/* Base styles */
.container {
  min-height: 100vh;
  background-color: var(--color-gray-50);
}

/* Header */
.header {
  background-color: var(--color-gray-200);
  padding: var(--spacing-8) 0;
}

.header-title {
  text-align: center;
  font-size: 1.875rem;
  font-weight: 600;
}

/* Navigation */
.nav {
  border-bottom: 1px solid var(--color-gray-200);
}

.nav-container {
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

.nav-buttons {
  display: flex;
  gap: var(--spacing-6);
  padding: var(--spacing-4) 0;
}

.nav-button {
  display: flex;
  flex-direction: column; /* Apila el icono y el texto */
  align-items: center; /* Centra todo */
  gap: 4px; /* Espaciado entre el icono y el texto */
  padding: var(--spacing-2) var(--spacing-4);
  color: var(--color-gray-500);
  border: none;
  background: none;
  cursor: pointer;
}

.nav-button.active {
  background-color: var(--color-blue-50);
  color: var(--color-blue-600);
  border-radius: var(--border-radius);
}

.nav-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}



/* Main content */
.main {
  max-width: 42rem;
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-4);
}

/* Form */
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

/* Form controls */
.input,
.textarea,
.select-button {
  width: 100%;
  padding: var(--spacing-2) var(--spacing-4);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius);
  outline: none;
}

.input:focus,
.textarea:focus {
  border-color: var(--color-blue-600);
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.label {
  color: var(--color-gray-700);
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.select-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: var(--color-gray-500);
  cursor: pointer;
}

.select-icon {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
}

/* Submit button */
.submit-button {
  width: 10rem;
  margin: 0 auto;
  padding: var(--spacing-2) var(--spacing-6);
  background-color: var(--color-blue-600);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: var(--color-blue-700);
}

/* Responsive adjustments */
@media (max-width: 640px) {

  .nav-buttons {
    justify-content: space-around;
  }
  
  .submit-button {
    width: 100%;
  }
}
</style>