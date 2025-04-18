<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="mt-20">
    <div class="relative">
      <img src="/img/hero.webp" alt="" class="md:w-full">
    <p class="uppercase absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:font-bold md:text-2xl md:font-oswald lg:text-3xl xl:text-6xl ">new collection</p>
    <RouterLink to="/allproducts">
      <button class=" absolute top-1/3 lg:top-2/4 left-1/2 transform -translate-x-1/2 translate-y-1/3 lg:-translate-x-2/4 lg:translate-y-1/4 xl:-translate-y-7 lg:px-6 lg:text-3xl bg-[#1e1a1ad8] text-white p-2 lg: font-oswald hidden md:block">
        Shop Here
      </button>
    </RouterLink>
    </div>
  </section>
  <section>
    <div class="gird p-4 space-y-5 md:flex md:space-y-0 md:space-x-5">
      <div class="relative">
        <img src="/img/dear.webp" alt="">
        <p class="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 font-oswald text-xl sm:text-4xl text-[#6D8467] md:text-4xl">Wall Decor</p>
      </div>
      <div class="relative">
        <img src="/img/chair.webp" alt="">
        <p class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 font-oswald text-xl sm:text-4xl text-[#E09E61] md:text-4xl">Chair</p>
      </div>
      <div class="relative">
        <img src="/img/light.webp" alt="">
        <p class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 font-oswald text-xl sm:text-4xl text-[#666666] md:text-4xl">Lighting</p>
      </div>
    </div>
  </section>
  <section class="px-4 pb-10 md:mt-16 lg:mt-10">
    <div class="flex items-center justify-between md:justify-evenly">
      <div class="grid space-y-10">
        <div class="flex justify-center items-center space-x-2">
          <div>
            <i class="pi pi-truck text-[25px]  text-[#ebc489]"></i>
          </div>
          <div class="grid">
            <h1 class="uppercase font-semibold">free</h1>
            <h1 class="uppercase font-semibold">delivery</h1>
            <p class=" text-gray-400 font-thin">form 99tk</p>
          </div>
        </div>
        <div class="flex justify-center items-center space-x-2">
          <div>
            <i class="pi pi-phone text-[25px] text-[#ebc489]"></i>
          </div>
          <div class="grid">
            <h1 class="uppercase font-semibold">customer</h1>
            <h1 class="uppercase font-semibold">support</h1>
            <p class=" text-gray-400 font-thin">24/7 feedback</p>
          </div>
        </div>
      </div>
      <div class="grid space-y-10">
        <div class="flex justify-center items-center space-x-2">
          <div>
            <i class="pi pi-credit-card text-[25px] text-[#ebc489]"></i>
          </div>
          <div class="grid">
            <h1 class="uppercase font-semibold">save</h1>
            <h1 class="uppercase font-semibold">payment</h1>
            <p class=" text-gray-400 font-thin">save credit cards</p>
          </div>
        </div>
        <div class="flex justify-center items-center space-x-2">
          <div>
            <i class="pi pi-box text-[25px] text-[#ebc489]"></i>
          </div>
          <div class="grid">
            <h1 class="uppercase font-semibold">free</h1>
            <h1 class="uppercase font-semibold">return</h1>
            <p class=" text-gray-400 font-thin">don't like it</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
