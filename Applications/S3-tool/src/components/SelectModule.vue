<template>
    <v-flex>
        <router-link to="/SelectClass">
            <action-button-vue name="Class" />
        </router-link>
        <action-button-vue name="Evaluation" />
    </v-flex>   
</template>

<script>
import ActionButtonVue from './UI/ActionButton';

export default {
    components: {
        ActionButtonVue
    },
    mounted () {
        this.$store.commit('setCurrentModule', { 'header': 'SELECT AN ACTIVITY'})
    },
    destroyed() {
        this.$store.commit('removeCurrentModule')
    }
}
</script>


