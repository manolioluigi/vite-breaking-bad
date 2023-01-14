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
        <div class="hover-container">
            <p>{{ card.name }}</p>
            <hr>
            <p>{{ card.type}} / {{ card.race }}</p>
            <hr>
            <div v-if="card.attribute">
                <p>{{ card.attribute }} / {{ card.level }} ★</p>
                <hr>
            </div>
            <div class="effect-container">
             <p class="effect">
                {{ card.desc }}
            </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .card{
        width: 19%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: $orange;
        margin-bottom: 20px;
        position: relative;

        img{
            width: 100%;
        }

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
            filter: blur(7px);
            
        }


        .hover-container{
            position: absolute;
            top: 0;
            display: none;
            pointer-events: none;

            hr{
                color: $white;
                opacity: 1;
                margin: 5px;
            }

            p{
                font-size: 1.8vh;
                color: $white;
                text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                margin: 0;
                
            }


            .effect-container::-webkit-scrollbar {
                display: none;
            }

            .effect-container{
                height: 15vh;
                overflow-y: auto;
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
                .effect{
                    font-size: 1.5vh;
                      /* animation properties */
                    -moz-transform: translateY(100%);
                    -webkit-transform: translateY(100%);
                    transform: translateY(100%);
                    
                    -moz-animation: my-animation 10s linear infinite;
                    -webkit-animation: my-animation 10s linear infinite;
                    animation: my-animation 10s linear infinite;
                    }

                    /* for Firefox */
                    @-moz-keyframes my-animation {
                    from { -moz-transform: translateY(100%); }
                    to { -moz-transform: translateY(-100%); }
                    }

                    /* for Chrome */
                    @-webkit-keyframes my-animation {
                    from { -webkit-transform: translateY(100%); }
                    to { -webkit-transform: translateY(-100%); }
                    }

                    @keyframes my-animation {
                    from {
                        -moz-transform: translateY(10%);
                        -webkit-transform: translateY(10%);
                        transform: translateY(10%);
                    }
                    to {
                        -moz-transform: translateY(-100%);
                        -webkit-transform: translateY(-100%);
                        transform: translateY(-100%);
                    }

                }
            }

        }

        img:hover ~ .hover-container{
            display: block;
        }
    }
    
    
</style>