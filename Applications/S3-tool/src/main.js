// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VSelect,
  VSubheader,
  VCard
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import store from './store/store';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VSelect,
    VSubheader,
    VCard
  },
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});




// axios
//   .get("/user/13/records", "", { })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });




// //var reqData = "username=ganesh&password=123456&grant_type=password";
// axios({
//     method: 'get',
//     url: 'https://api.7cav.us/v1/user/13/records',
//     withCredentials: false,
//     crossdomain: true,   
// headers: { 
//   "Content-Type": "application/x-www-form-urlencoded",
//   "Cache-Control": "no-cache",
//   "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM5NTJkNTIyOGI1Zjk1YzA5ZWM3Zjk3Y2FmYTllODI4ZThkNDY5YzdmNDIwNTdhZGU2OTI4ZDhlODJjNWVmNzA5OWJjYjk3NDdjYTM0MzE4In0.eyJhdWQiOiIzIiwianRpIjoiYzk1MmQ1MjI4YjVmOTVjMDllYzdmOTdjYWZhOWU4MjhlOGQ0NjljN2Y0MjA1N2FkZTY5MjhkOGU4MmM1ZWY3MDk5YmNiOTc0N2NhMzQzMTgiLCJpYXQiOjE1Mjc2MTcxODksIm5iZiI6MTUyNzYxNzE4OSwiZXhwIjoxNTU5MTUzMTg5LCJzdWIiOiIzIiwic2NvcGVzIjpbInVzZXJzIiwibWlscGFjcyIsInJlY29yZHMiXX0.JwGAKHxRUcvFMsnp7LNGKC22GF03RfHXd9j2paqbH-evyMBk2gJ4a3omLDuaY1VjmAU6P3ZbsT4Wy7HdBafqJ0ThdyH9xW1COHBtnjwFOCv0sUHfmxTaQPyLSKYwHJkmwhKM-GgqdWTSpZ4KwSoyWMXAZUHzot6DQkUfmPk0q5I1zDIo5ADAJlZbKUNvsZxEpqw8VJseWcSsKSCjzT1TGQmJtmXOO_NheC5oyBRU4eF5zzyStmDi7Z7dal01cvAMt07wFtfaBwLfJXPahiaCilcZK5SpIsmkAPp5qd47OiIBguYPRMdJZn8Fv_zwkkPevGRo_gmMNZNHv15Q-GE4PjeWLl4pPluqGwb3f7rlUd2sRPIDbDnHzjuauA5FlGd6GuFVfqiSqpMcj4decwBFthIbj4iiWyzUNyo-m8dp7_SxJSHnZ_a4ldFgX8hAmhkAHhkS7dz283wDTrkiy-TU-gLQ3JD75EH23mrtb7cmHKFuujIu8S6mgnGOCFcgafk8wevCWdd7FYi1UdIjd5SD5icTm-22SOyuXJ7E2n4hsbM2eNNGwiIsB4EoahN6DVWetK880xycBRMrpRHMFBikXO-AAxDNs9GArj2oN5FUOhuF_KUVuVXivmH4pdLFU38_YIAMMYKIRDTIgz6iFSF5ppfIm--QfahaQPJqatt6yfQ",
//   "Accept": "application/json"
// }
// }).then(function (response) {
// console.log("Heade With Authentication :" + response);
// })
// .catch(function (error) {
// console.log("Post Error : " +error);
// }); 