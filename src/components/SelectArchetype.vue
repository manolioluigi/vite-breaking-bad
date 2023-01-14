<script>
    import { store } from '../store.js'

    export default {
        data() {
            return {
                store
            }
        },
        
    }
</script>

<template>
  
    <select name="archetype" id="archetype">
        <option v-for="(item, index) in store.archetypesList" :key="index" :value="archetype_name">{{ item.archetype_name }}</option>
    </select>

</template>

<style lang="scss" scoped>

    select{
            width: 150px;
            margin: 3vh 11vw;
        }

</style>