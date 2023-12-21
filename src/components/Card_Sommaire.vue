<script setup>

//import { mapGetters } from 'pinia'
import { useSommaireStore } from '@/stores/sommaire'

const store = useSommaireStore()

</script>

<template>
    <v-card
      class="mx-auto"
      max-width="271"
      height="407"
      image="src/assets/img/20e-odalis_romeo_jai77-dev1.webp"
      theme="dark">
    <v-card-title>
      {{ store.sommaire.category }}
    </v-card-title>
    </v-card>
  </template>