<script>
    import { store } from '../store.js';

    export default {
        data() {
            return {
                store,
                selectValue: ''
            }
        },
    }
</script>

<template>
  
    <select name="archetype" id="archetype" v-model="selectValue" @change="$emit('selection', selectValue)">
        <option value="" selected disabled hidden>Scegli l'archetipo</option>
        <option v-for="(item, index) in store.archetypesList" :key="index" :value="item.archetype_name">{{ item.archetype_name }}</option>
    </select>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables.scss' as *;
    @use '../styles/partials/mixins.scss' as *;

    select{
            width: 150px;
            margin: 3vh 11vw;
        }

</style>