//const { reactive } = require("vue");

import { reactive } from "vue";

const state = reactive({
  atToCart:[],
  orderedProduct:[]
});

export function useSate() {
  return {state};
}
