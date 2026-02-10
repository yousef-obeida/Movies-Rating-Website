
<template>
  <v-container fluid class="fill-height pa-0">
    <v-row class="fill-height" no-gutters>
      <!-- Left Side: Form -->
      <v-col cols="12" md="6" class="d-flex align-center justify-center bg-black">
        <v-container style="max-width: 480px;">
          <div class="mb-10">
            <v-img
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              height="40"
              width="40" 
              class="mb-6"
              style="margin-left: 0;"
              position="left center"
              alt="Your Company"></v-img>
            <h2 class="text-h4 font-weight-bold mb-2 text-white">Sign in to your account</h2>
            <p class="text-body-2 text-grey-lighten-1">
              Only for Movie Rating members.</p>
          </div>

          <v-form @submit.prevent="signin">
            <div class="mb-4">
              <label class="text-caption font-weight-medium text-grey-lighten-1 mb-1 d-block">Email address</label>
              <v-text-field
                v-model="email"
                variant="outlined"
                density="compact"
                single-line
                hide-details="auto"
                rounded="lg"
                color="red-accent-4"
                bg-color="grey-darken-4"
                theme="dark"
              ></v-text-field>
            </div>

            <div class="mb-4">
              <div class="d-flex justify-space-between mb-1">
                <label class="text-caption font-weight-medium text-grey-lighten-1">Password</label>
              </div>
              <v-text-field
                v-model="password"
                type="password"
                variant="outlined"
                density="compact"
                single-line
                hide-details="auto"
                rounded="lg"
                color="red-accent-4"
                bg-color="grey-darken-4"
                theme="dark"
              ></v-text-field>
            </div>

            <v-btn
              block
              color="red-accent-4"
              size="large"
              rounded="lg"
              class="text-none font-weight-bold text-white mb-8"
              elevation="0"
              type="submit"
            >
              Sign in
            </v-btn>

            <div class="text-center">
              <a href="/" class="text-red-accent-4 text-decoration-none font-weight-bold">Go back to home</a>
            </div>
          </v-form>

        </v-container>
      </v-col>

      <!-- Right Side: Image -->
      <v-col cols="12" md="6" class="hidden-sm-and-down pa-0">
        <v-img
          src="/RegisterWallpaper.jpg"
          class="fill-height"
          cover
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const email = ref(import.meta.env.VITE_ADMIN_EMAIL);
const password = ref(import.meta.env.VITE_ADMIN_PASSWORD);
const router = useRouter();

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Successfully signed in!", userCredential.user);
    router.push('/dashboard');
  } catch (error) {
    console.error("Error signing in:", error.code, error.message);
    alert("Failed to sign in: " + error.message);
  }
};
</script>

<style scoped>
:deep(input:-webkit-autofill),
:deep(input:-webkit-autofill:hover),
:deep(input:-webkit-autofill:focus),
:deep(input:-webkit-autofill:active) {
  -webkit-box-shadow: 0 0 0 30px #212121 inset !important;
  -webkit-text-fill-color: white !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
