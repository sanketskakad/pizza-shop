<template>
  <HeaderComponent></HeaderComponent>
  <AlertComponent />
  <RouterView />
</template>
<script setup lang="ts">
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import AlertComponent from '@/components/Alert.vue';
import HeaderComponent from '@/components/Header.vue';
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
getDatabase(app);
// const analytics = getAnalytics(app);
</script>
