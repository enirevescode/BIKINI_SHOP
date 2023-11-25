<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header_Nav from './components/Header_Nav.vue';

</script>
<template>
<header>
  <Header_Nav/>
</header>

    <nav>
      <v-container>
        <img alt="Logo" src="./assets/img/blogo.webp" class="w-full md:w-5rem border-round shadow-4" aria-haspopup="true"/>
        <div class="left ml-n16">
            <RouterLink active-class="active" to="/">HOME</RouterLink>
            <RouterLink active-class="active" to="/">OUR COLLECTION</RouterLink>
            <RouterLink active-class="active" to="/">OUR NEWS</RouterLink>
            <RouterLink active-class="active" to="/">CONTACT US</RouterLink>
        </div>
      </v-container>
    </nav>
 
  <RouterView />

</template>

<style scoped>
.v-container {
  height: 90px;
}
.logo {
  /* display: block;
  margin: 0 auto 2rem; */
  float: right;
}

.left{
  display: inline-flex;
  vertical-align: auto;
  text-decoration: none;
  float: inline-end;
  position: relative;
}
.active, a {
  font-weight: 500;
  color: #48dbfb;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1.4;
  
}

</style>
