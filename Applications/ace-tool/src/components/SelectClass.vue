<template>
<transition name="fade">
    <v-flex >
        <v-flex xs12>
            <action-button-vue :item="item" v-for="item in classesData"></action-button-vue>
        </v-flex>
    </v-flex>    
</transition>
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
    },
    mounted () {
        this.$store.commit('setCurrentModule', 'SELECT A CLASS')
    },
    destroyed() {
        this.$store.commit('removeCurrentModule')
    }
}
</script>

<style lang="scss" scoped>
    h1{
        color:black !important;
    }
</style>

