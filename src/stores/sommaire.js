/* eslint-disable no-unused-vars */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSommaireStore = defineStore('sommaire', () => {
    const sommaire = ref([{
        id: 0,
        category: '1 PIECE SWIMSUIT',
        alt: 'maillot de bain 1 pièce',
        photos: 'src/assets/img/20e-odalis_romeo_jai77-dev1.webp'
    },
    // {
    //     id: 1,
    //     category: '2 PIECEs SWIMSUIT',
    //     alt: 'maillot de bain 2 pièces',
    //     photos: 'src/assets/img/71e-rubo_colorsun_17g97-wila_col-2.webp'
    // },
    // {
    //     id: 2,
    //     category: 'BIKINI',
    //     alt: 'BIKINI',
    //     photos: 'src/assets/img/21e-yero_romeo_jai39-dasia_romeo-2.webp'
    // },
    // {
    //     id: 3,
    //     category: 'TOP & TANKINI',
    //     alt: 'TOP & TANKINI',
    //     photos: 'src/assets/img/91e-elle_sunrib_hqs12-jama_sunri-3.webp'
    // },
]);
return {
    sommaire
}

    // getters: {
    //     getSommaire: (state) => state.category
    // }
})