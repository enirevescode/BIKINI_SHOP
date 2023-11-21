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
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/">OUR COLLECTION</RouterLink>
        <RouterLink to="/">OUR NEWS</RouterLink>
        <RouterLink to="/">CONTACT US</RouterLink>
      </nav>


  <RouterView />
</template>

<style scoped>


.logo {
  /* display: block; */
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
