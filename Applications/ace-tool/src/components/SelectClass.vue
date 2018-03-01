<template>
    <v-flex xs12>
        <action-button-vue :item="item" v-for="item in classesData"></action-button-vue>
    </v-flex>
    
</template>

<script>
import ActionButtonVue from './ActionButton.vue';
export default {
    computed: {
        classesData: function(){
            return this.$store.state.classes
        }
    },
    components: {
        ActionButtonVue
    }
}
</script>

<style lang="scss">

</style>

