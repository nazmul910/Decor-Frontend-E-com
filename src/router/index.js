import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component:()=> import('@/components/Home.vue')
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: ()=> import('@/views/pages/DashBoard.vue')
    },
    {
      path: '/orderedProduct',
      name: 'orderedProduct',
      component: ()=> import('@/views/pages/orderedProduct.vue')
    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: ()=> import('../components/AddProduct.vue')
    },
    {
      path: '/allproducts',
      name: 'allproducts',
      component: ()=> import('../components/AllProducts.vue')
    },


  ],
})

export default router
