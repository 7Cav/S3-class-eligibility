<template>
  <v-app>
    <v-content>
       <transition name="fade">
      <testje v-if="!HasBeenLoaded()"/>
       </transition>
        <transition name="fade">
      <router-view v-if="HasBeenLoaded()" />
        </transition>
    </v-content>
  </v-app>
</template>

<script>
import {RotateSquare2} from 'vue-loading-spinner'
import Testje from './components/Testje'

export default {
  components: {
    Testje
  },
  data () {
    return{
      isLoaded: false
    }
  },
  methods: {
    HasBeenLoaded()
    {
      return this.isLoaded;
    },
    ShowMain()
    {
      setTimeout(() => {
        console.log("main called");
        this.isLoaded = true;
      }, 2000);
    }
  },
  mounted()
  {
    this.ShowMain();
  }
}


</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
