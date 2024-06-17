<template lang="">
  <div
    data-accordion="collapse"
    data-active-classes="bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-white"
  >
    <h2>
      <button
        @click="toggle"
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-800 dark:border-gray-700 dark:text-gray-400 hover:bg-orange-100 dark:hover:bg-gray-800 gap-3"
        :class="{ 'rounded-b-xl': expand }"
        data-accordion-target="#accordion-color-body-1"
        aria-expanded="true"
        aria-controls="accordion-color-body-1"
      >
        <span>{{ header }}</span>
        <svg
          data-accordion-icon
          class="w-3 h-3 shrink-0"
          :class="{ 'rotate-180': !expand }"
          aria-horangeden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      :class="{ hidden: !expand }"
      aria-labelledby="accordion-color-heading-1"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineProps({ header: String });
const expand = ref(false);
const toggle = () => {
  expand.value = !expand.value;
};
</script>
<style lang=""></style>
