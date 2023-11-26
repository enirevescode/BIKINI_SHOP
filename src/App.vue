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
        <div class="nav_left--content">
        <img alt="Logo" src="./assets/img/blogo.webp" class="w-full md:w-5rem border-round shadow-4" aria-haspopup="true"/>
        </div>
        <div class="nav_right--content ml-n16">
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
  display: flex;
  justify-content: space-between;
}

.nav_left--content{
  display: flex;
  align-items: center;
}
.nav_right--content{
  display: flex;
  align-items: center;
}
.active, a {
  font-weight: 500;
  color: #48dbfb;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 1.4;
  margin-right: 15px;
}

</style>
