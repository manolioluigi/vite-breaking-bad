<script>
    
    import axios from 'axios';
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import { store } from './store.js';

    
    export default {
        components: {
            AppHeader,
            AppMain
        },

        data() {
          return {
              store,
          }
        },

        created(){
          this.getCards();
        },

        methods:{
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
  
  <div>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>

</template>

<style lang="scss">
  @use './styles/generals.scss' as *;


</style>

