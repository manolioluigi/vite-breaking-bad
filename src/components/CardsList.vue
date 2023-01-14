<script>
    import Card from './Card.vue';
    import { store } from '../store.js'
    export default {
        components: {
            Card
        },
        data() {
            return {
                store
            }
        },
    };
</script>

<template>
  
    <div>
        <Card v-for="(item, index) in store.cardsList" :key="index" :card="item" />
    </div>
  
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;



</style>