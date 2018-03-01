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
              <v-list-tile >
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
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
              <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
              <v-toolbar-title>Application</v-toolbar-title>
            </v-toolbar>
            <v-content>
              <v-container fluid fill-height>
              <v-layout justify-center align-center>
                <router-view />
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
  }
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
</style>
