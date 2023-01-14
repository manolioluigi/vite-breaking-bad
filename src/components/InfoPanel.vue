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
  
  <span>This archetype contains {{ store.cardsNumber }} cards</span>

</template>

<style>

</style>