<script setup>

 import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';



const modules = [FreeMode, Pagination];


</script>

<template>

  <div class="mt-10" >
    <div class="mb-5" id="blog">
      <h1 class="text-center uppercase font-oswald text-2xl">From the blog</h1>
    </div>
    <!--
    :pagination="{
      clickable: true,
    }"
    -->
   <div class="md:hidden">
    <swiper
    :slidesPerView="1"
    :spaceBetween="20"
    :freeMode="true"

    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
       <a href="#">
         <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
       </a>
       <div class="px-4 py-2">
            <h1 class="font-semibold">Inspiration for New Bloggers</h1>
            <div class="flex space-x-3">
              <p>Arena Tech</p>
              <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
            </div>
       </div>
     </div>

    </swiper-slide>
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3">
               <p>Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3">
               <p>Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3">
               <p>Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
   </div>
   <div class="hidden md:block lg:hidden">
    <swiper
    :slidesPerView="2"
    :spaceBetween="20"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper "
  >
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
       <a href="#">
         <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
       </a>
       <div class="px-4 py-2">
            <h1 class="font-semibold ">Inspiration for New Bloggers</h1>
            <div class="flex space-x-3">
              <p>Arena Tech</p>
              <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
            </div>
       </div>
     </div>

    </swiper-slide>
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold ">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3">
               <p>Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold ">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3">
               <p>Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3 md:space-x-1">
               <p >Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
   </div>
   <div class="hidden lg:block">
    <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper "
  >
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
       <a href="#">
         <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
       </a>
       <div class="px-4 py-2">
            <h1 class="font-semibold ">Inspiration for New Bloggers</h1>
            <div class="flex space-x-3">
              <p>Arena Tech</p>
              <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
            </div>
       </div>
     </div>

    </swiper-slide>
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold ">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3">
               <p>Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold ">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3">
               <p>Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="max-w-sm bg-white shadow-sm hover:opacity-80 hover:border-b-2 hover:shadow-2xl duration-100">
        <a href="#">
          <img class="rounded-t-lg" src="/img/dear.webp" alt="" />
        </a>
        <div class="px-4 py-2">
             <h1 class="font-semibold">Inspiration for New Bloggers</h1>
             <div class="flex space-x-3 md:space-x-1">
               <p >Arena Tech</p>
               <p class="border-l-2 px-2 text-gray-500">Jan 08,2024</p>
             </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
   </div>
  </div>

</template>


<style scoped>



.swiper {
  width: 90%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

::v-deep(.swiper-pagination) {
  bottom: 1px;
  left: -10px;

}
</style>
