import Vue from 'vue'
import Router from 'vue-router'
import LoadingScreen from '@/components/LoadingScreen'
import SelectClass from '@/components/SelectClass'
import SelectModule from '@/components/SelectModule'
import SelectAttendees from '@/components/SelectAttendees'
import ShowEligibility from '@/components/ShowEligibility'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SelectModule',
      component: SelectModule
    },
    {
      path: '/SelectClass',
      name: 'SelectClass',
      component: SelectClass
    },
    {
      path: '/test',
      name: 'LoadingScreen',
      component: LoadingScreen
    },
    {
      path: '/SelectAttendees',
      name: 'SelectAttendees',
      component: SelectAttendees
    },
    {
      path: '/ShowEligibility',
      name: 'ShowEligibility',
      component: ShowEligibility
    },
  ]
})
