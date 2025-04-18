<script setup>

import {  onMounted, reactive, ref, computed} from 'vue';
import { useRouter } from 'vue-router';
import { useSate } from '@/composables/store';
import BlogSlider from './shared/BlogSlider.vue';


const { state } = useSate();
const router = useRouter();

const states = reactive({
  data: [],
  topData:[]
});



const topProducts = computed(() => {
  if (states.topData?.products?.length) {
    return states.topData.products.slice(0, 4);
  }
  return [];
});

async function getProductFromTop() {
  const url = "https://decor-backend-e-commerce.onrender.com/client";

  try{
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Response status: ${data.status || 400}`);
    }
    const json = await data.json();

    const productArray = Object.values(json);
    if(productArray.length > 0){
      states.topData = productArray[0];
    }
    console.log('state: ',states.topData)
  }catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

console.log('to',topProducts)

const buyProduct = (prod) => {
  if (state.atToCart.length !== 0) {
    const findProductFromAtToCart = state.atToCart.find((pd) => pd._id === prod._id);
    if (findProductFromAtToCart === undefined) {
      state.atToCart = [...state.atToCart, prod];
    }
    if (findProductFromAtToCart) {
      return alert(`${findProductFromAtToCart.title} is already added!`);
    }
  } else {
    state.atToCart = [...state.atToCart, prod];
  }

  router.push('/addproduct');
}



  onMounted(async () =>{
    await getProductFromTop();

  });



</script>

<template>
  <section class="">
    <div class="px-4">
      <div class="">
        <div class="text-center font-oswald text-3xl my-5">
          <h1>FEATURED PRODUCTS</h1>
        </div>

      </div>
      <section class="mt-16">
        <div class="px-2">
          <div class="text-center font-oswald text-3xl my-5">
            <h1>Top Seller</h1>
          </div>

          <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 2xl:mx-40">
            <div v-for="prod in topProducts" :key="prod._id">
              <div class="mb-5 space-y-2">
                <img :src="prod.imgUrl" alt="" class="h-[200px] object-cover w-full">
                <h1 class="truncate text-sm font-thin text-black">{{ prod.title }}</h1>
                <div class="space-y-2">
                  <h1 class="text-gray-500">TK {{ prod.price }}</h1>
                  <div class="text-center bg-slate-700 py-1 text-white">
                    <button @click="buyProduct(prod)">Buy Now <i class="pi pi-shopping-bag"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Blog start -->

    <div class="mb-20">

      <BlogSlider/>

    </div>
    <!-- Blog end -->
  </section>
</template>

<style>
input {
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;
}
</style>
