<template>
  <div class="w-4/5 m-auto">
    <div class="flex content-evenly justify-evenly">
      <button
        class="mt-5 mr-4 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        Profile
      </button>
      <button
        class="mt-5 mr-4 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        Categories
      </button>
      <button
        class="mt-5 mr-4 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        Menu Items
      </button>
      <button
        class="mt-5 mr-4 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        Users
      </button>
      <button
        class="mt-5 mr-4 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
      >
        Orders
      </button>
    </div>
    <AddMenu />
  </div>
</template>
<script setup>
import AddMenu from '@/components/organisms/AddMenu.vue';
</script>
<style></style>
