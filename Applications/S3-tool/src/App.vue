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
              <transition name="fade" mode="out-in">
              <v-toolbar-title class="hack-center">{{ currentModuleHeader }}</v-toolbar-title>
              </transition>
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
import axios from "axios";

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
        this.isLoaded = true;
      }, 2000);
    }
  },
  created() {
    axios.defaults.baseURL = "https://api.7cav.us/v1";
    axios.defaults.headers.common["Authorization"] = "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM5NTJkNTIyOGI1Zjk1YzA5ZWM3Zjk3Y2FmYTllODI4ZThkNDY5YzdmNDIwNTdhZGU2OTI4ZDhlODJjNWVmNzA5OWJjYjk3NDdjYTM0MzE4In0.eyJhdWQiOiIzIiwianRpIjoiYzk1MmQ1MjI4YjVmOTVjMDllYzdmOTdjYWZhOWU4MjhlOGQ0NjljN2Y0MjA1N2FkZTY5MjhkOGU4MmM1ZWY3MDk5YmNiOTc0N2NhMzQzMTgiLCJpYXQiOjE1Mjc2MTcxODksIm5iZiI6MTUyNzYxNzE4OSwiZXhwIjoxNTU5MTUzMTg5LCJzdWIiOiIzIiwic2NvcGVzIjpbInVzZXJzIiwibWlscGFjcyIsInJlY29yZHMiXX0.JwGAKHxRUcvFMsnp7LNGKC22GF03RfHXd9j2paqbH-evyMBk2gJ4a3omLDuaY1VjmAU6P3ZbsT4Wy7HdBafqJ0ThdyH9xW1COHBtnjwFOCv0sUHfmxTaQPyLSKYwHJkmwhKM-GgqdWTSpZ4KwSoyWMXAZUHzot6DQkUfmPk0q5I1zDIo5ADAJlZbKUNvsZxEpqw8VJseWcSsKSCjzT1TGQmJtmXOO_NheC5oyBRU4eF5zzyStmDi7Z7dal01cvAMt07wFtfaBwLfJXPahiaCilcZK5SpIsmkAPp5qd47OiIBguYPRMdJZn8Fv_zwkkPevGRo_gmMNZNHv15Q-GE4PjeWLl4pPluqGwb3f7rlUd2sRPIDbDnHzjuauA5FlGd6GuFVfqiSqpMcj4decwBFthIbj4iiWyzUNyo-m8dp7_SxJSHnZ_a4ldFgX8hAmhkAHhkS7dz283wDTrkiy-TU-gLQ3JD75EH23mrtb7cmHKFuujIu8S6mgnGOCFcgafk8wevCWdd7FYi1UdIjd5SD5icTm-22SOyuXJ7E2n4hsbM2eNNGwiIsB4EoahN6DVWetK880xycBRMrpRHMFBikXO-AAxDNs9GArj2oN5FUOhuF_KUVuVXivmH4pdLFU38_YIAMMYKIRDTIgz6iFSF5ppfIm--QfahaQPJqatt6yfQ";
    axios.defaults.headers.common["Accept"] = "application/json";

    axios.get('/user/13/records')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
  },
  mounted() {
    this.ShowMain();
  },
  computed: {
    currentModuleHeader: function() {
      return this.$store.state.currentModule.header;
    }
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

.main {
  background-color: #bbbbbb !important;
}

.hack-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0px;
}

.problem {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: white !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
