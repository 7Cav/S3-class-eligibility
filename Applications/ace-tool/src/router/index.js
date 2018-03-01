import Vue from 'vue'
import Router from 'vue-router'
import LoadingScreen from '@/components/LoadingScreen'
import SelectClass from '@/components/SelectClass'

Vue.use(Router)

export default new Router({
  routes: [
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
