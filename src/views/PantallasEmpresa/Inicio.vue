<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-gray-200 py-8">
        <h1 class="text-center text-3xl font-semibold">OFFERS</h1>
      </header>
  
      <!-- Navigation -->
      <nav class="border-b">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex space-x-6 py-4">
            <button 
              class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600"
            >
              <FileText class="w-5 h-5" />
              <span>Offers</span>
            </button>
            
            <button class="flex items-center space-x-2 text-gray-600">
              <Users class="w-5 h-5" />
              <span>Students</span>
            </button>
            
            <button class="flex items-center space-x-2 text-gray-600">
              <HelpCircle class="w-5 h-5" />
              <span>Help</span>
            </button>
          </div>
        </div>
      </nav>
  
      <!-- Form -->
      <main class="max-w-2xl mx-auto px-4 py-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="space-y-4">
            <input
              type="text"
              v-model="form.title"
              placeholder="Title of offer"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
  
            <div class="space-y-2">
              <label class="block text-gray-700">Label</label>
              <textarea
                v-model="form.value"
                placeholder="Value"
                rows="4"
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              ></textarea>
            </div>
  
            <input
              type="text"
              v-model="form.skills"
              placeholder="Skills Required"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
  
            <input
              type="text"
              v-model="form.direction"
              placeholder="Direction"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
  
            <button
              type="button"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-500 flex justify-between items-center"
            >
              <span>Vacancies</span>
              <ChevronDown class="w-5 h-5" />
            </button>
          </div>
  
          <button
            type="submit"
            class="w-40 mx-auto block px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Published
          </button>
        </form>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { FileText, Users, HelpCircle, ChevronDown } from 'lucide-vue-next'
  
  const form = ref({
    title: '',
    value: '',
    skills: '',
    direction: '',
    vacancies: ''
  })
  
  const handleSubmit = () => {
    console.log('Form submitted:', form.value)
  }
  </script>
  
  <style>
  /* Add any custom styles here if needed */
  </style>