<script>
    export default {
        props: {
            card: Object
        }
    }
</script>

<template lang="">
    <div class="card text-center">
        <img class="img-fluid" :src="card.card_images[0].image_url" alt="">
        <div class="text">
            <span>{{ card.name }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    img{
        width: 100%;
    }

    .card{
        width: 19%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: $orange;
        text{
            height: 100px;
            span{
                color: $white;
            }
        }
    }

</style>