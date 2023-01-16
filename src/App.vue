<script>
    
    import axios from 'axios';
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import AppLoader from './components/AppLoader.vue';
    import { store } from './store.js';
    

    
    export default {
        components: {
            AppHeader,
            AppMain,
            AppLoader
        },

        data() {
          return {
              store,
          }
        },

        created(){
          
          this.getCards();
          this.getArchetypes();
          this.sortArray();
        },

        methods:{
          getCards(){
            axios.get(store.url).then((response) => {
              store.cardsList = response.data.data
              store.cardsNumber = response.data.data.length;
              store.isLoaded = true;
            })
          },
          getArchetypes(){
            axios.get(store.archetypesUrl).then((response) => {
              store.archetypesList = response.data
            })
          },
          sortArray(){
            store.archetypesList.sort((a, b) => {
            const nameA = a.archetype_name.toUpperCase();
            const nameB = b.archetype_name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
            });

          }
        }
        

    }

</script>

<template>
  
  
  <AppHeader></AppHeader>
  <div v-if="store.isLoaded">
    <AppMain></AppMain>
  </div>
  <div v-else>
    <AppLoader></AppLoader>
  </div>

</template>

<style lang="scss">
  @use './styles/generals.scss' as *;


</style>

