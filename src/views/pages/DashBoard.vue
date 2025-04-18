<script setup>

import { onMounted, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import 'flowbite'
const states = reactive({
  data: [],

  fromData:{
    title:'',
    imgUrl:'',
    quantity:'',
    price: '',
    category: '',
    description:'',
    _id: ''

  }
})

const isUpdate = ref(false)

async function getProduct (){
  const url = "https://decor-backend-e-commerce.onrender.com/user";

  try {
    const data = await fetch(url);

    if(!data.ok){
      throw new Error(`Response status: ${data.status || 400}`);
    };
    const json = await data.json();
    console.log("data: ",json);

    return json || []

  } catch (error) {
    console.log('Add failed',error);
  }
}

const submitProduct = async () =>{
  const url = `https://decor-backend-e-commerce.onrender.com/user`;

  const response = await fetch(url,
  {method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify(states.fromData)}
)
 if(!response.ok){
    throw new Error(`Response status:${response.status || 400}`)
  }
  states.data = await getProduct();
  states.fromData = {
    title:'',
    imgUrl:'',
    quantity:'',
    price: '',
    category: '',
    description:''
  }

}

const deletProduct = async (id) =>{
  console.log('id:',id);
  const url = `https://decor-backend-e-commerce.onrender.com/${id}`;
  const response = await fetch(url,{method:'DELETE'});
  if(!response.ok){
    throw new Error(`Response status:${response.status || 400}`)
  }
  console.log('delte data: ',response);
  states.data = await getProduct();
}

const update = async (product) =>{
  isUpdate.value = true;

  console.log('PRoduct for update:',product);

  states.fromData.title = product.title;
  states.fromData.imgUrl = product.imgUrl;
  states.fromData.category = product.category;
  states.fromData.description = product.description;
  states.fromData.quantity = product.quantity;
  states.fromData.price = product.price;
  states.fromData._id = product._id;
}

const updateProduct =async () =>{
  const url = `https://decor-backend-e-commerce.onrender.com/user/${states.fromData._id}`;

try {
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(states.fromData),
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status || 400}`);
  }

  states.data = await getProduct();

  states.fromData = {
    title: '',
    imgUrl: '',
    quantity: '',
    price: '',
    category: '',
    description: '',
    _id: '',
  };

} catch (error) {
  console.log('Update failed:', error);
}
 isUpdate.value = false;

}

onMounted(async ()=>{
  states.data = await getProduct();
})

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
          <a href="" class="flex ms-2 md:me-24">
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

  <div class="p-4 bg-gray-300 sm:ml-64">
     <div class="p-4  dark:border-gray-700 mt-14">
        <div class=" flex flex-col-reverse md:grid md:grid-cols-2 gap-9  ">
          <div v-if="states.data.length === 0">

              <div role="status" class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
  <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
      <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
      </svg>
  </div>
  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
  <div class="flex items-center mt-4">
     <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
      <div>
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
  </div>
  <span class="sr-only">Loading...</span>
              </div>

          </div>
          <div v-else class="">
            <h1 class="font-bold text-xl">All Product</h1>
            <hr class="py-2">
              <div class="grid lg:grid-cols-2 xl:gap-6">
                <div v-for="product in states.data" :key="product._id" class="max-w-sm border  rounded-lg shadow-sm bg-gray-800 ">
                  <img class="rounded-t-lg h-[250px] w-full object-cover" :src="product.imgUrl" alt="" />
               <div class="px-5 py-4 text-white">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.title}}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{product.description}}</p>
                <p >Category : <span class="t uppercase">{{product.category}}</span></p>
                <p> Quantity : {{product.quantity}}</p>
                <p> Price : {{product.price}} BDT</p>
                <div class="flex justify-between lg:grid lg:gap-y-2 lg:mt-3 xl:flex  ">
                  <button @click="update(product)" class="bg-green-500 py-1 px-4 rounded-md">Update</button>
                  <button @click="deletProduct(product._id)" class="bg-red-600 py-1 px-4 rounded-md">Delete</button>
                </div>
              </div>
              </div>
              </div>
          </div>
          <div class="p-4">
            <h1 v-if="!isUpdate" class="text-center text-2xl">Product Add</h1>
            <h1 v-else class="text-center text-2xl">Product Update</h1>
            <div class="grid space-y-2">
              <label class="text-xl" for="name">Name</label>
              <input class="border-2 py-1 px-3" v-model="states.fromData.title" type="text" id="name">

              <label class="text-xl" for="price">Price</label>
              <input v-model="states.fromData.price" class="border-2 py-1 px-3" id="price" type="number">

              <label class="text-xl" for="quantity">Quantity</label>
              <input v-model="states.fromData.quantity" class="border-2 py-1 px-3" id="quantity" type="number">

              <label class="text-xl" for="url">Product Url</label>
              <input v-model="states.fromData.imgUrl" class="border-2 py-1 px-3" id="url" type="text">

              <label class="text-xl" for="category">Category</label>
              <input v-model="states.fromData.category" class="border-2 py-1 px-3" id="category" type="text">
              <label class="text-xl" for="des">Description</label>
              <input v-model="states.fromData.description" class="border-2 py-1 px-3" id="des" type="text">


                <button v-if="!isUpdate" @click="submitProduct()" class="bg-green-500 text-white py-2 rounded-xl ">Submit</button>
                <button v-else @click="updateProduct()" class=" bg-teal-500 text-white py-2 rounded-xl ">Update</button>

            </div>
          </div>
        </div>
     </div>
  </div>


</template>
