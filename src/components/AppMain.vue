<script>
    import axios from 'axios';
    import CardsList from './CardsList.vue';
    import InfoPanel from './InfoPanel.vue'
    import SelectArchetype from './SelectArchetype.vue'
    import { store } from '../store.js';
    export default {
        name: 'AppMain',
        data() {
            return {
                
            }
        },
        components: {
            CardsList,
            InfoPanel,
            SelectArchetype
        },
        methods: {
            getCurrentArchetype(selectValue){
                store.url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype='+selectValue
                console.log(selectValue)
                store.archetypeName = selectValue
                this.getCards();
            },
            getCards(){
                axios.get(store.url).then((response) => {
                store.cardsList = response.data.data
                store.cardsNumber = response.data.data.length;
                })
            }
        }
    }
</script>

<template>
  
    <div class="container-fluid">

        <div class="row">

            <div class="col-12">

                <SelectArchetype @selection="getCurrentArchetype"></SelectArchetype>
                
            </div>

        </div>

        <div class="row">

            <div class="col">

                <div class="content">

                    <div class="info-panel">
                        <div>
                            <InfoPanel></InfoPanel>
                        </div>
                        <img src="../assets/img/kuriboh.png" alt="">
                    </div>

                    <div class="cards">
                        <CardsList></CardsList>
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .container-fluid{
        background-color: $orange;
        height: 93vh;
        width: 100vw;
        overflow-y: auto;
    }

    .content{
        background-color: $white;
        margin: 0 10vw;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .info-panel{
        background-color: $black;
        color: $white;
        padding: 15px;
        text-align: left;
        display: flex;
        justify-content: space-between;
        img{
            max-height: 30px;
        }
    }


</style>