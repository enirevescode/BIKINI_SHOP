<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header_Nav from './components/Header_Nav.vue';




</script>
<template>
<header>
  <Header_Nav/>
</header>

      <nav>
        <img alt="Logo" src="blogo.webp" class="w-full md:w-10rem border-round shadow-4" aria-haspopup="true"/>
        <div class="left">
        <RouterLink to="/HOME">HOME</RouterLink>
        <RouterLink to="/">OUR COLLECTION</RouterLink>
        <RouterLink to="/">OUR NEWS</RouterLink>
        <RouterLink to="/">CONTACT US</RouterLink>
        </div>
      </nav>
 
  
  <RouterView />

</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.left {
  display: flex;
  float: inline-end;

}
</style>
