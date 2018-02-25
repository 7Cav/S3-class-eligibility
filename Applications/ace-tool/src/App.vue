<template>
  <v-app>
    <v-content>
      <router-view/>
      <rotate-square2></rotate-square2>
    </v-content>
  </v-app>
</template>

<script>
import {RotateSquare2} from 'vue-loading-spinner'
export default {
  components: {
    RotateSquare2
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>
