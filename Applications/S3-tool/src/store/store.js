import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  currentModule: {},
  selectedAttendees: [],
  checkedAttendees: [],
  classes: [
    {
      "id": "4",
      "name": "FAC",
      "category": "The Cavalry School",
      "MilpacEntryName": "Graduated ARMA3 Forward Air Controller Course",
      "requirements": [
        {
          "MilpacEntryName": "Graduated ARMA3 Aviation Ground School"
        }
      ]
    }
  ],
  users: [],
  milpacs: []
}

const mutations = {
  setCurrentModule(state, moduleD) {
    state.currentModule = moduleD
  },
  removeCurrentModule(state) {
    state.currentModule = {}
  },
  storeSelectedAttendees(state, attendees) {
    state.selectedAttendees = attendees
  },
  setUsers(state, users) {
    state.users = users;
  },
  storeCheckedAttendees(state, attendees){
    state.checkedAttendees = attendees;
  }
}

const actions = {
  retrieveUsers(context) {
    return new Promise((resolve, reject) => {
      axios.get('/users/active')
        .then(function (response) {
          context.commit('setUsers',
            response.data.data.users
          );
          resolve();
        })
        .catch(function (error) {
          console.log(error);
          reject();
        })
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})