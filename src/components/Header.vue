<template>
  <div class="text-orange-600 flex justify-between mt-4 w-10/12 m-auto">
    <div class="ml-4">
      <div class="text-orange-500 font-semibold text-3xl">
        <RouterLink to="/">Pizza Shop</RouterLink>
      </div>
    </div>
    <div class="flex">
      <div class="pl-4 pr-4 text-primary font-semibold text-xl align-middle">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="pl-4 pr-4 text-primary font-semibold text-xl">
        <RouterLink to="/menu-list">Menu</RouterLink>
      </div>
      <div class="pl-4 pr-4 text-primary font-semibold text-xl">
        <RouterLink to="/#about-us">About</RouterLink>
      </div>
      <div class="pl-4 pr-4 text-primary font-semibold text-xl">
        <RouterLink to="/#contact">Contact</RouterLink>
      </div>
    </div>
    <div class="pl-4 pr-4 text-primary font-semibold text-xl">
      <RouterLink to="/profile">Hello Sanket</RouterLink>
    </div>
    <div
      class="pl-4 pr-4 text-primary font-semibold text-xl"
      @click="userState.logout"
    >
      Logout
    </div>

    <div class="mr-10">
      <RouterLink to="/cart">
        <svg
          class="h-8 w-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ea580c"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { useUser } from '@/store/useUser';
const userState = useUser();
</script>
<style></style>
