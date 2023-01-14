<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                
            }
        },
    }
</script>

<template>
  
  <div class="container-fluid">

    <div class="row height-full">

        <div class="col-12 height-full d-flex align-items-center mx-3">

            <img src="../assets/img/logo.png" alt="">
            <h3 class="mx-3">Yu-gi-oh! API</h3>
            
        </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    .container-fluid{
        background-color: $white;
        height: 7vh;
    }

    .height-full{
        height: 100%;
    }

    img{
        max-height: 4vh;
    }

</style>