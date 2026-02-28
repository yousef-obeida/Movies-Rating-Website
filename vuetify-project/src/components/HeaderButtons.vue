<script setup>
import { useAuthStore } from '@/stores/Dashboard'
import { signOut } from 'firebase/auth';
import { auth as firebaseAuth } from '@/services/firebase';
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
  try {
    await signOut(firebaseAuth);
    authStore.logout();
    router.push('/');
  } catch (error) {
    console.error('Logout error:', error);
  }
};
</script>

<template>
  <div class="d-flex align-center mr-16">
    <v-btn class="text-white text-uppercase font-weight-bold" to="/" variant="text">Home</v-btn>
    <v-btn class="text-white text-uppercase font-weight-bold" to="/Movies" variant="text">Movies</v-btn>
    <v-btn v-if="authStore.isAdmin" class="text-white text-uppercase font-weight-bold" to="/dashboard" variant="text">Dashboard</v-btn>
    <v-btn v-if="!authStore.isAdmin" to="/register" color="red-accent-4">Login</v-btn>
    <v-btn v-if="authStore.isAdmin" color="red-accent-4" @click="logout">Logout</v-btn>
  </div>
</template>