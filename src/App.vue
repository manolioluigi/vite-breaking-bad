<script>
    
    import axios from 'axios';
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import CardsList from './components/CardsList.vue';
    import { store } from './store.js'
    import * as bootstrap from 'bootstrap';
    
    export default {
        components: {
            AppHeader,
            AppMain,
        },

        data() {
          return {
              store
          }
        },

        created(){
          this.getCards();
        },

        methods:{
          getCards(){
            axios.get(store.url).then((response) => {
              store.cardsList = response.data.data
            })
          }
        }
    }

</script>

<template>
  
  <div>
    <AppHeader></AppHeader>
    <AppMain>
      <CardsList/>
    </AppMain>
    <AppFooter></AppFooter>
  </div>

</template>

<style lang="scss">
  @use './styles/generals.scss' as *;


</style>

