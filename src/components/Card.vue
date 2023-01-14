<script>
    export default {
        props:{
            card: Object
        }
    }
</script>

<template>
    <div class="card text-center">
        <img class="img-fluid" :src="card.card_images[0].image_url" alt="">
    </div>
</template>

<style>

</style>