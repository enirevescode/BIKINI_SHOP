<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { productService } from '@/_services'
//import { useProductStore } from '../../stores/products';

export default {
  name: 'Collection',
  mounted() {
    productService.getAllproducts()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}

</script>

<template>
    <v-card
      class="mx-auto"
      max-width="271"
      height="407"
      image="src/assets/img/20e-odalis_romeo_jai77-dev1.webp"
      theme="dark">
    <v-card-title>
      category
    </v-card-title>
    </v-card>
  </template>