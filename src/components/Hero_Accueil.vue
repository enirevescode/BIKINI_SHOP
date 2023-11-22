<script setup>
import button_Learn from './slots/button_Learn.vue'
</script>

<template>
    <div id="Hero_Accueil--img">
        <div class="card__Accueil">
            <h3 class="ss_titre">SUMMER IS HERE</h3>
            <h2 class="titre">BIKINI EVERYWHERE</h2>
            
                <p class="para__Accueil">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat!
                </p>
        
       <button_Learn/>
       <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="xl" size="x-large">Rounded xl</v-btn>
      </v-col>
        </div>
    </div>
</template>
<style scoped>
#Hero_Accueil--img{
   background-image: url('src/assets/img/Piscine.webp');
   height: 800px;
}

.card__Accueil {
    padding-top: 400px;
    padding-left: 200px;
}

.para__Accueil {
    max-width: 400px;
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
    
}
</style>
