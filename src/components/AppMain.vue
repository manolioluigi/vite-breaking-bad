<script>

    import CardsList from './CardsList.vue';
    import InfoPanel from './InfoPanel.vue'
    export default {
        name: 'AppMain',
        data() {
            return {
                
            }
        },
        components: {
            CardsList,
            InfoPanel
        },
    }
</script>

<template>
  
    <div class="container-fluid">

        <div class="row">

            <div class="col-12">

                <select name="select" id="select" class="form-select">
                    <option value="alien">Alien</option>
                </select>
                
            </div>

        </div>

        <div class="row">

            <div class="col">

                <div class="content">

                    <div class="info-panel">
                        <InfoPanel></InfoPanel>
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

    #select{
        width: 150px;
        margin: 3vh 11vw;
    }

    .info-panel{
        background-color: $black;
        color: $white;
        padding: 15px;
        text-align: left;
    }


</style>