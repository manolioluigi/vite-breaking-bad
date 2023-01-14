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

<template lang="">
  
    <div class="container-cards">
        <Card v-for="(item, index) in store.cardsList" :key="index" :card="item" />
    </div>
  
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .container-cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>