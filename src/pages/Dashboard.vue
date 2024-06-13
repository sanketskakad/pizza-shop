<template>
  <div>Dashboard</div>
  <button @click="userState.logout">Logout</button>
</template>
<script setup>
import { useUser } from '../store/useUser';
import axios from 'axios';
const userState = useUser();
</script>
<style></style>
