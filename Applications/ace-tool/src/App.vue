<template>
  <v-app id="inspire" dark class="main">
    <v-content>
       <transition name="fade">
          <loading-screen v-if="!HasBeenLoaded()"/>
       </transition>
        <transition name="fade">
          <div  v-if="HasBeenLoaded()">
            <v-navigation-drawer
              clipped
              fixed
              v-model="drawer"
              app
            >
            <v-list dense>
              <v-list-tile to="/">
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
                <v-list-tile >
                <v-list-tile-action>
                  <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <span class="problem"><a href="https://github.com/redcrayonn/ACE/issues/new" >I have an issue!</a></span>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
              <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
              <v-toolbar-title class="hack-center">{{ currentModule }}</v-toolbar-title>
            </v-toolbar>
            <v-content>
              <v-container fluid fill-height>
              <v-layout justify-center align-center>
                <transition name="fade" mode="out-in">
                  <router-view />
                </transition>
              </v-layout>
              </v-container>
            </v-content>
            <v-footer app fixed>
            <span>&copy; 2018</span>
            </v-footer>
          </div>
        </transition>
    </v-content>
  </v-app>
</template>

<script>
import LoadingScreen from "./components/LoadingScreen";

export default {
  components: {
    LoadingScreen
  },
  data: () => ({
      isLoaded: false,
      drawer: false
  }),
  methods: {
    HasBeenLoaded() {
      return this.isLoaded;
    },
    ShowMain() {
      setTimeout(() => {
        console.log("main called");
        this.isLoaded = true;
      }, 2000);
    }
  },
  mounted() {
    this.ShowMain();
  },
  computed: {
        currentModule: function(){
            return this.$store.state.currentModule
        }
    },
};
</script>

<style lang="scss">
@import "style/_variables";

body {
  color: $pcolor;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

div,
h1,
h2,
h3,
h4,
button,
i {
  color: $pcolor !important;
}

.main{
  background-color: #BBBBBB !important;
}

.hack-center{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin:0px;
}

.problem{
  position:absolute;
  bottom:50px;
  left:50%;
  transform:translateX(-50%);

  a{
    color:white  !important;
  }
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .0;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
