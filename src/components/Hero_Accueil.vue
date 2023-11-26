<script setup>
import button_Learn from './slots/button_Learn.vue'
</script>

<template>
    <div id="Hero_Accueil--img">
        <div class="card__Accueil">
            <h3 class="ss_titre">SUMMER IS HERE</h3>
            <h2 class="titre">BIKINI EVERYWHERE</h2>
           
                <p class="para__Accueil">
                    <v-divider :thickness="3" class="border-opacity-25"></v-divider>
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandat!
                </p>
                <br>
            <button_Learn/>

        </div>
    </div>
</template>
<style scoped>
#Hero_Accueil--img{
   background-image: url('src/assets/img/Piscine.webp');
   height: 850px;
}

.card__Accueil {
    padding-top: 300px;
    padding-left: 200px;
}

.para__Accueil {
    max-width: 500px;
    font-weight: 500;
}
.ss_titre {
    font-size: 30px;
    font-weight: 700;
    color: white;
}
.titre {
    font-size: 80px;
    font-weight: 700;
    color: black;
}
</style>
