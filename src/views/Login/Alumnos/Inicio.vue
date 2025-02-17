<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white">
      <div class="w-full max-w-md space-y-8">
        <!-- Logo container with responsive sizing -->
        <div class="flex flex-col items-center">
          <img 
            :src="logo" 
            alt="EasyFCT Logo" 
            class="w-16 h-16 md:w-20 md:h-20 mb-4"
          />
          <h1 class="text-xl font-semibold">EasyFCT</h1>
        </div>
  
        <!-- Buttons container -->
        <div class="mt-8 space-y-4">
          <button class="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Register
          </button>
          <button class="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Login
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Import your logo - you'll need to replace this path with your actual logo path
  import logo from '@/assets/logo.gif'
  </script>
  
  <style scoped>
  /* Add any additional custom styles here if needed */
  </style>