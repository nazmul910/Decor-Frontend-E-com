
<script setup>

import Navbar from './shared/Navbar.vue';
import Footer from './shared/Footer.vue';
import FilterProduct from './FilterProduct.vue';



</script>

<template>
  <Navbar/>
  <section class="mt-20">
    <div class="relative">
      <img src="/img/hero.webp" alt="" class="xl:w-full">
    <p class="uppercase absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:font-bold md:text-2xl md:font-oswald lg:text-3xl xl:text-6xl ">new collection</p>
    <RouterLink to="/allproducts">
      <button class=" absolute top-1/3 lg:top-2/4 left-1/2 transform -translate-x-1/2 translate-y-1/3 lg:-translate-x-2/4 lg:translate-y-1/4 xl:-translate-y-7 lg:px-6 lg:text-3xl bg-[#1e1a1ad8] text-white p-2 lg: font-oswald hidden md:block">
        Shop Now
      </button>
    </RouterLink>
    </div>
  </section>
  <section class="mt-16">
    <div class="px-4">
      <div class="">
        <div class="text-center font-oswald text-3xl my-5">
          <h1>All PRODUCTS</h1>
        </div>
      </div>
      <div>
          <FilterProduct/>
      </div>

    </div>
  </section>
  <Footer/>
</template>

<style>
input {
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;
}
</style>
