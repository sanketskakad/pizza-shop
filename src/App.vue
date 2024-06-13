<template>
  <AlertComponent />
  <!-- <SignupComponent /> -->
  <LoginComponent />
</template>
<script setup lang="ts">
import SignupComponent from '@/pages/Signup.vue';
import LoginComponent from '@/pages/Login.vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import AlertComponent from '@/components/Alert.vue';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</script>
