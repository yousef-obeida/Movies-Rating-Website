<template>
  <sidebar></sidebar>

  <v-container class="fill-height d-flex justify-center align-center">
    <div class="text-center">
      <h1 class="text-h3 font-weight-bold mb-4">Dashboard</h1>
      <p class="text-h5 text-grey-lighten-1">Welcome to your dashboard!</p>
      <v-btn class="mt-6" color="red-accent-4" to="/">Go Home</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import Sidebar from '@/layouts/Sidebar.vue'

  // Dashboard logic here
</script>
