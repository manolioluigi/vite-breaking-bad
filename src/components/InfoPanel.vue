<script>
    import { store } from '../store.js'

    export default {
        data() {
            return {
                store
            }
        },
        
    }
</script>

<template>
  
  <span class="title">{{ store.currentArchetype }}</span>
  <span class="mx-2">archetype contains {{ store.cardsNumber }} cards</span>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .title{
        font-size: 20px;
        color: $orange;
    }

</style>