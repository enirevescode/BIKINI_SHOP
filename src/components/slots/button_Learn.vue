<template>

<v-col cols="4" sm="3" md="2">
        <v-btn block rounded="xl" size="x-large" class="btn_base">LEARN MORE</v-btn>
        <slot></slot>
</v-col>


</template>
<style>
.btn_base {
   background-color: black;
   color: white;
}
</style>