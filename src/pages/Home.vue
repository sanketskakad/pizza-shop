<template>
  <div class="w-10/12 m-auto flex">
    <div class="mt-12 flex-1">
      <h1 class="text-9xl">
        Everything is better with a <span class="text-orange-500">Pizza</span>
      </h1>
      <br />
      <div class="text-3xl">
        Pizza is the missing piece that makes every day complete, a simple yet
        delicious joy in life
      </div>
      <div class="flex w-full">
        <div class="flex-1">
          <button
            @click="loginHandler"
            class="mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            Order Now
          </button>
        </div>
        <div class="flex-1 ml-2">
          <button
            @click="loginHandler"
            class="mt-5 tracking-wide font-semibold bg-gray-100 text-orange-500 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <img src="@/assets/pizza.png" class="w-full" />
    </div>
  </div>
  <div class="mt-[200px] text-center w-1/2 m-auto" id="about-us">
    <h1 class="text-6xl text-orange-500">OUR STORY</h1>
    <h2 class="text-4xl">About us</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima odit
    recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos suscipit
    tempora? Aperiam esse fugiat inventore laboriosam officiis quam rem! At
    consectetur delectus ducimus est facere iure molestias obcaecati quaerat
    vitae voluptate? Aspernatur dolor explicabo iste minus molestiae pariatur
    provident quibusdam saepe? Laborum molestias neque nulla obcaecati odio quia
    quod reprehenderit sit vitae voluptates? Eos, tenetur.
  </div>

  <div class="mt-[200px] mb-[200px] text-center w-1/2 m-auto" id="contact">
    <h1 class="text-6xl text-orange-500">Contact us</h1>
    <h2 class="text-4xl">+65 123456</h2>
  </div>
</template>
<script setup></script>
<style></style>
