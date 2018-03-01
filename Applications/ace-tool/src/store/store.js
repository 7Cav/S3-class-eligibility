import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentModule: '',
  classes: [
    {
      "id": "0",
      "name": "Ground School",
      "category": "Shared",
      "MilpacEntryName": "blabla",
      "requirements": [
        {
          "MilpacEntryName": "blablabla"
        }
      ]
    },
    {
      "id": "1",
      "name": "Basic Rotary",
      "category": "Rotary",
      "MilpacEntryName": "blabla",
      "requirements": [
        {
          "MilpacEntryName": "blablabla"
        }
      ]
    },
    {
      "id": "2",
      "name": "Advanced Rotary",
      "category": "Rotary",
      "MilpacEntryName": "blabla",
      "requirements": [
        {
          "MilpacEntryName": "blablabla"
        }
      ]
    },
    {
      "id": "3",
      "name": "Basic Fixed Wing",
      "category": "Fixed",
      "MilpacEntryName": "blabla",
      "requirements": [
        {
          "MilpacEntryName": "blablabla"
        }
      ]
    }
  ],
}

const mutations = {
  setCurrentModule(state, text)
  {
    state.currentModule = text
  },
  removeCurrentModule(state)
  {
    state.currentModule = ''
  }
}

export default new Vuex.Store({
  state,
  mutations
})