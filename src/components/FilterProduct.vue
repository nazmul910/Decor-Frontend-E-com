<script setup>
import { computed, onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSate } from '@/composables/store';

const {state} = useSate();



const router = useRouter();

const states = ref([]);

  async function getProducts (){
    const url = "https://decor-backend-e-commerce.onrender.com/user";
    try {
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`Response status: ${response.status || 400}`);
      }
      const json = await response.json()


      const productArray = Object.values(json);

       states.value = productArray;

    } catch (error) {
      console.error('Error fetching data:', error);

    }
  }



  const selectedCategory = ref('all');

  const filterProducts = computed(() =>{
  if (!Array.isArray(states.value)) return [];
  return states.value.filter((prod) => {
    if (selectedCategory.value === 'all') return true;
    return prod.category?.toLowerCase() === selectedCategory.value.toLowerCase();
  });
  });



const buyProduct = (prod) =>{

if(state.atToCart.length !== 0){
  const findProductFromAtToCart = state.atToCart.find((pd) => pd._id === prod._id);
  if(findProductFromAtToCart === undefined){
    state.atToCart = [...state.atToCart,prod];
  }
  if(findProductFromAtToCart){
   return alert(`${findProductFromAtToCart.title} is already added!`);
  }
}else{
  state.atToCart = [...state.atToCart,prod]
}

router.push('/addproduct');

}

  onMounted(async () =>{
   await getProducts();
  })
</script>

<template>

  <section class="2xl:mx-40">
    <div>
      <div class="flex justify-center md:justify-start space-x-4 pb-6">
        <button
          class="uppercase font-semibold px-2 py-2 lg:px-6 bg-gray-200 hover:bg-gray-400 rounded"
          @click="selectedCategory = category"
          v-for="category in ['all','Lighting','Gift','Bath','Window']"
          :key="category">
          {{ category }}
        </button>
      </div>
      <div>
        <div class="px-2 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4 ">
          <div v-for="prod in filterProducts" :key="prod._id">
            <div class="mb-5 space-y-2">
              <img :src="prod.imgUrl" alt="" class="h-[200px] md:w-full object-cover md:object-fill">
              <h1 class="truncate uppercase text-sm font-thin text-black">{{ prod.title }}</h1>
              <div class=" space-y-2">
                <h1 class="text-gray-500">TK {{ prod.price }}</h1>
                <div class="text-center bg-slate-700 py-1 text-white">
                  <button @click="buyProduct(prod)">Buy Now <i class="pi pi-shopping-bag"></i></button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>
