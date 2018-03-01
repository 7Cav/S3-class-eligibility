import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoadingScreen from '@/components/LoadingScreen'
import SelectClass from '@/components/SelectClass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'SelectClass',
      component: SelectClass
    },
    {
      path: '/test',
      name: 'LoadingScreen',
      component: LoadingScreen
    }
  ]
})
