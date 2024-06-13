<template>
  <div
    v-if="alertState.isAlertVisible"
    class="z-10 fixed top-4 min-w-40 left-1/3"
  >
    <div
      v-if="alertState.type === 'Info'"
      class="p-4 mb-4 text-sm border-2 border-blue-800 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <span v-html="alertState.message"></span>
    </div>
    <div
      v-if="alertState.type === 'Danger'"
      class="p-4 mb-4 text-sm border-2 border-red-800 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span v-html="alertState.message"></span>
    </div>
    <div
      v-if="alertState.type === 'Success'"
      class="p-4 mb-4 text-sm border-2 border-green-800 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <span v-html="alertState.message"></span>
    </div>
    <div
      v-if="alertState.type === 'Warning'"
      class="p-4 mb-4 text-sm border-2 border-yellow-800 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
      role="alert"
    >
      <span v-html="alertState.message"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAlert } from '@/store/useAlert';
const alertState = useAlert();
</script>
