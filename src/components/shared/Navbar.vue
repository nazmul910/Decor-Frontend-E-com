<script setup>
import 'primeicons/primeicons.css'
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSate } from '@/composables/store';

const state = useSate();

const isToggle = ref(false)
const isNotification = ref(false);

const notification = () =>{
  if(state.state.atToCart.length = 0){
    isNotification.value = false
  }
  else{
    isNotification.value = true
  }
}

const toggle = () =>{
  isToggle.value = !isToggle.value
}


</script>

<template>

  <!-- Mobile to Tab device start -->
  <section class="md:hidden">
    <section class="flex justify-between items-center px-4 py-4 fixed z-50 top-0 left-0 right-0 bg-white" :class="{'blur-[1px]' : isToggle}">
      <div class="flex items-center text-2xl space-x-4">
        <i @click="toggle" class="pi pi-align-left cursor-pointer"></i>
        <h1 class="uppercase font-oswald font-bold">decor</h1>
      </div>
      <div class="flex items-center justify-center space-x-4">
        <i class="pi pi-search"></i>
        <i class="pi pi-user rounded-full p-1 text-white bg-black"  ></i>
        <div class="relative ">
          <RouterLink to="/addproduct">
            <i class="pi pi-shopping-cart">
              <p v-if="!isNotification" class="absolute -top-2 -right-3 px-2 rounded-full py-1 text-white bg-red-500 text-[10px]">{{state.state.atToCart.length}}</p>
            </i>
          </RouterLink>
        </div>

      </div>
    </section>

    <section class="fixed right-0 top-14 h-full w-full mt-2   text-white  z-20 transition-transform duration-300 " :class="{'translate-y-0' : isToggle,'translate-y-full' : !isToggle}">
      <div class="bg-black py-3">
        <i @click="isToggle = false" class="pi pi-times text-white text-2xl px-4"></i>
      </div>
      <div class="bg-white z-40 h-screen">
        <div class="flex justify-between items-center border-b py-4 px-4">
          <RouterLink to="/">
            <a href="" class="text-gray-600">Home</a>
          </RouterLink>
          <i class="pi pi-chevron-right text-[12px] text-gray-600"></i>
        </div>
        <div class="flex justify-between items-center border-b py-4 px-4">
          <RouterLink to="/allproducts">
            <a href="" class="text-gray-600">Products</a>
          </RouterLink>
          <i class="pi pi-chevron-right text-[12px] text-gray-600"></i>
        </div>
        <div class="flex justify-between items-center border-b py-4 px-4">
          <a href="" class="text-gray-600">Collections</a>
          <i class="pi pi-chevron-right text-[12px] text-gray-600"></i>
        </div>
        <div class="flex justify-between items-center border-b py-4 px-4">
          <RouterLink to="/addproduct">
            <a href="" class="text-gray-600">Shop</a>
          </RouterLink>
          <i class="pi pi-chevron-right text-[12px] text-gray-600"></i>
        </div>
        <div class="flex justify-between items-center border-b py-4 px-4">
          <a href="#blog" class="text-gray-600">Blog</a>
          <i class="pi pi-chevron-right text-[12px] text-gray-600"></i>
        </div>
        <div class="flex justify-between items-center border-b py-4 px-4">
          <a href="" class="text-gray-600">Pages</a>
          <i class="pi pi-chevron-right text-[12px] text-gray-600"></i>
        </div>

      </div>

      <div class="fixed bottom-16 right-0 left-0 bg-black font-thin">
        <div class="py-2 px-4 flex items-center justify-between md:justify-around ">
          <div class="text-center ">
            <i class="pi pi-phone"></i>
            <p>Call</p>
          </div>
          <div class="text-center">
            <i class="pi pi-envelope"></i>
            <p>Contact</p>
          </div>
          <div class="text-center">
            <i class="pi pi-map-marker"></i>
            <p>Directions</p>
          </div>

        </div>
      </div>
    </section>
  </section>
  <!-- Mobile to Tab device end -->

  <!-- Lapton to Desktop Device start -->

 <section class="hidden md:block">
  <section class=" md:flex justify-between xl:justify-evenly items-center px-4 py-4 fixed z-50 top-0 left-0 right-0 bg-white" >
    <div class="flex items-center text-2xl space-x-4">
      <RouterLink to="/">
        <h1 class="uppercase font-oswald font-bold">decor</h1>
      </RouterLink>
    </div>
    <div class="bg-white flex space-x-7 lg:text-xl lg:space-x-11 font-oswald ">
      <div class="flex justify-between items-center  ">
        <RouterLink to="/">
          <a href="" class="text-gray-600">Home</a>
        </RouterLink>
      </div>
      <div class="flex justify-between items-center  ">
        <RouterLink to="/allproducts">
          <a href="" class="text-gray-600">Products</a>
        </RouterLink>
      </div>
      <div class="flex justify-between items-center  ">
        <a href="" class="text-gray-600">Collections</a>
      </div>
      <div class="flex justify-between items-center  ">
        <RouterLink to="/addproduct">
          <a href="" class="text-gray-600">Shop</a>
        </RouterLink>
      </div>
      <div class="flex justify-between items-center  ">
          <a href="#blog" class="text-gray-600">Blog</a>
      </div>
    </div>
    <div class="flex items-center justify-center space-x-4">
      <i class="pi pi-user rounded-full p-1 text-white bg-black"  ></i>
      <div class="relative ">
        <RouterLink to="/addproduct">
          <i class="pi pi-shopping-cart p-1 text-2xl">
            <p v-if="!isNotification" class="absolute -top-2 -right-3 px-2 rounded-full py-1 text-white bg-red-500 text-[10px]">{{state.state.atToCart.length}}</p>
          </i>
        </RouterLink>
      </div>

    </div>
  </section>
 </section>


  <!-- Lapton to Desktop Device end -->
</template>
