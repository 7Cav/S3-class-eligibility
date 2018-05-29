<template>
    <v-flex >
        <v-flex xs12 >
            <router-link to="/SelectAttendees">
                <action-button-vue :item="item" v-for="item in classesData" v-on:click.native="handleClassClick(item)"></action-button-vue>
            </router-link>
        </v-flex>
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
    },
    methods: {
        setCurrentModule(data)
        {
            this.$store.commit('setCurrentModule', data)
        },
        destroyCurrentModule()
        {
            this.$store.commit('removeCurrentModule')
        },
        handleClassClick: function (item) 
        {
            this.setCurrentModule({ 'header': item.name, 'class': item })
        }
    },
    mounted () {
        this.setCurrentModule({ 'header': "SELECT A CLASS" })
    },
    destroyed() {
        if(this.$store.state.currentModule.header === "SELECT A CLASS")
        {
            this.destroyCurrentModule()
        }
    }
}
</script>

<style lang="scss" scoped>
    h1{
        color:black !important;
    }
</style>

