<script setup>
import { onMounted, reactive, computed,ref } from 'vue';
import Navbar from './shared/Navbar.vue';
import { RouterLink } from 'vue-router';
import Footer from './shared/Footer.vue';
import { useSate } from '@/composables/store';

const {state} = useSate();

const localState = reactive({
  buyToCart: [],
  localTotalPrice:'',
})

const selectedImage = ref(null);
const showModal = ref(false);

const openImageModal = (imgUrl) => {
  selectedImage.value = imgUrl;
  showModal.value = true;
};

const closeImageModal = () => {
  showModal.value = false;
  selectedImage.value = null;
};


const incre = (product) => {
  product.quantity++;
};

const decre = (product) =>{
  if(product.quantity >1){
    product.quantity--;
  }
}
const deleteCartProduct = (product) =>{
  if(product){
    if(confirm(`Are you sure you want to remove ${product.title} product?`)){
      const filterCartProduct = state.atToCart.filter((prod) => prod._id !== product._id);

      state.atToCart = filterCartProduct;
    }
  }
}
const totalPrice = computed(() => {
  return state.atToCart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);
});



state.atToCart.forEach(product => {
  if (product.quantity) {
    product.quantity = 1;
  }
});

const oderProduct = (state) =>{

  localState.buyToCart = [...state.atToCart];
  localState.localTotalPrice = totalPrice.value;

  state.orderedProduct = {
    products: localState.buyToCart,
    total: localState.localTotalPrice
  };
  // state.atToCart= []
  console.log('buyProduct:',state.orderedProduct)

}

const sendOrder = async () =>{
  const url = `https://decor-backend-e-commerce.onrender.com/client`;

  const response = await fetch(url,
  {method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify(state.orderedProduct)}
)
 if(!response.ok){
    throw new Error(`Response status:${response.status || 400}`)
  }
  state.atToCart = []
  state.orderedProduct = []
}
</script>

<template>

<Navbar />
  <section class="my-20 px-4">
    <div class=" mb-10 ">
     <RouterLink to="/allproducts">
      <button class="border border-black w-full lg:w-[20%] py-2"><i class="pi pi-angle-left"></i> Continue Shopping</button>
     </RouterLink>
    </div>
    <div class="">
      <div v-if="state.atToCart && state.atToCart.length > 0">
        <div>
          <div v-for="state in state.atToCart" :key="state._id" class="mb-2">
            <div class="flex gap-x-4 lg:justify-evenly md:mb-36">
              <div class="w-[50%] md:hidden">
                <img class="md:h-[100px] md:w-[200px] md:object-cover" :src="state.imgUrl" alt="">
              </div>
              <div class="w-[50%] hidden md:block">
                <img @click="openImageModal(state.imgUrl)" class="md:h-[100px] md:w-[200px] md:object-cover cursor-pointer " :src="state.imgUrl" alt="">
              </div>
              <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-15 flex justify-center items-center z-50">
                <div class="relative">
                  <img :src="selectedImage" class=" xl:w-[350px] h-[250px] object-contain" />
                  <button @click="closeImageModal" class="bg-black p-2 absolute top-0 right-0 xl:top-2 text-white text-xl">✕</button>
                </div>
              </div>
              <div class="grid">
                <div >
                  <h1 class="uppercase">{{state.title}}</h1>
                  <p class="text-gray-500 font-thin"> Quantity : {{state.quantity}} </p>
                  <p class="font-thin">Tk {{state.price * state.quantity}}</p>
                </div>
                <div class="flex gap-x-2 justify-center items-center md:justify-start">
                  <div class="flex gap-x-2">
                    <button @click="decre(state)" class="border border-black px-3 text-xl text-center">-</button>
                    <h1>{{state.quantity}}</h1>
                    <button @click="incre(state)" class="border border-black px-3 text-xl text-center ">+</button>
                  </div>
                  <div class="bg-red-600 text-white px-2 py-1">
                    <button @click="deleteCartProduct(state)"><i class="pi pi-trash"></i></button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <hr class="mt-4">
          <div class="text-right mt-3 lg:text-center">
            <h1 class="md:text-xl font-semibold">Total Price: Tk {{ totalPrice }}</h1>
          </div>
          <div>
            <button @click="{oderProduct(state); sendOrder();}" class="bg-gray-600 rounded-md text-white px-3 py-1 font-bold">Order</button>
          </div>
        </div>
      </div>



      <div v-else>
        <div class="md:text-2xl text-center md:h-[35vh]">
          <h1 class="">There is no product </h1>
          <i class="pi pi-cloud-download"></i>
        </div>
      </div>
    </div>
  </section>
  <section>
    <Footer/>
  </section>

</template>
