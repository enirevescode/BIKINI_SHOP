<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { productService } from '@/_services'
import Card_Sommaire from '../../components/Card_Sommaire.vue';
//import { useProductStore } from '../../stores/products';

export default {
    name: 'Collection',
    mounted() {
        productService.getAllproducts()
            .then(res => console.log(res))
            .catch(err => console.log(err));
    },
    components: { Card_Sommaire }
}

</script>

<template>
    <div>
      <Card_Sommaire/>
    </div>
  </template>