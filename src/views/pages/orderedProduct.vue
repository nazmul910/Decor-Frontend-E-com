<script setup>
import { onMounted, reactive } from 'vue';
import 'flowbite'
const states = reactive({
  data: []
})


async function getProductFromTop() {
  const url = "https://decor-backend-e-commerce.onrender.com/client";
  try{
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error(`Response status: ${data.status || 400}`);
    }
    const json = await data.json();
    console.log('Top',json);
    const productArray = Object.values(json);
    states.data = productArray;
  }catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

onMounted(async () =>{
    await getProductFromTop();

  });

</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                 <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
           </button>
          <a href="" class="flex  ms-2 md:me-24">

            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Decor</span>
          </a>
        </div>

      </div>
    </div>
  </nav>

  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
     <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
           <li>
              <RouterLink to="/dashboard-admin">
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span class="ms-3">Dashboard</span>
               </a>
              </RouterLink>
           </li>
           <li>
              <RouterLink to="/orderedProduct">
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                  <span class="flex-1 ms-3 whitespace-nowrap">Orderd Product</span>
               </a>
              </RouterLink>
           </li>

        </ul>
     </div>
  </aside>

  <div class="p-4 sm:ml-64 ">
  <div class=" mt-14 ">
    <div v-for="prod in states.data" :key="prod._id" class="border p-2 border-red-500 mb-4 gird  md:flex justify-center xl:justify-around gap-5 ">
      <div v-for="order in prod.products" :key="order._id" class=" " >
            <h1 class="truncate uppercase text-sm  text-black">Name: {{ order.title }}</h1>
              <img :src="order.imgUrl" alt="" class="h-[100px] w-[100px] object-cover ">
              <p>Per pics: {{order.price}}</p>
              <p>quantity: {{order.quantity}}</p>
              <h1 class="text-gray-500">TK {{ order.price * order.quantity }}</h1>
      </div>
      <div class=" border-t-2 md:border-t-0 md:border-l-2 px-2 justify-center items-center flex">
        <div>
          <h1>Total Price: {{ prod.total }} Tk</h1>
         <p>Order-Date: {{ new Date(prod.orderDate).toDateString() }}</p>
         <button class="bg-green-500 text-white px-2 py-1 rounded-md font-bold">Confirm</button>
        </div>
      </div>
    </div>
  </div>
  </div>


</template>

