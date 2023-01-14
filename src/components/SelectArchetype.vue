<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store
            }
        },
        methods: {
            getCurrentArchetype(){
                store.currentArchetype = document.getElementById('archetype').value
                store.url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype='+store.currentArchetype
                console.log(store.url)
                this.getCards();
            },
            getCards(){
                axios.get(store.url).then((response) => {
                store.cardsList = response.data.data
                store.cardsNumber = response.data.data.length;
                })
            },
        }
    }
</script>

<template>
  
    <select name="archetype" id="archetype">
        <option value="" selected disabled hidden>Scegli l'archetipo</option>
        <option v-for="(item, index) in store.archetypesList" :key="index" :value="archetype_name" @click="getCurrentArchetype()">{{ item.archetype_name }}</option>
    </select>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    select{
            width: 150px;
            margin: 3vh 11vw;
        }

</style>