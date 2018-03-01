<template>
    <v-flex>
        <router-link to="/SelectClass">
            <action-button-vue name="Class" />
        </router-link>
        <action-button-vue name="Evaluation" />
    </v-flex>   
</template>

<script>
import ActionButtonVue from './ActionButton.vue';

export default {
    components: {
        ActionButtonVue
    }
}
</script>


