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
            <span class="title">{{ card.name }}</span>
            <div>
                <div>
                    <span>{{ card.type }} / </span>
                    <span>{{ card.race }}</span>
                </div>
                <span>Avg. price: {{ card.card_prices[0].cardmarket_price }} $</span>
            </div>
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
        margin-bottom: 20px;
        .text{
            height: 100%;
            padding: 10px 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title{
                color: $white;
                font-weight: bold;
                display: block;
                font-size: 16px;
            }
            span{
                font-size: 14px;
            }
        }
        img:hover{
            transform: scale(1.1);
        }
    }

</style>