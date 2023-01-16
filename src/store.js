import { reactive } from 'vue';

export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    archetypesUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardsList: [],
    archetypesList: [],
    cardsNumber: null,
    isLoaded: false,
    archetypeName: 'Alien'
});

