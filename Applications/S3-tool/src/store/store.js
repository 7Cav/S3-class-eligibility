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
      "id": "0",
      "name": "Ground School",
      "category": "Shared",
      "MilpacEntryName": "blabla",
      "requirements": [
      ]
    },
    {
      "id": "1",
      "name": "Basic Rotary",
      "category": "Rotary",
      "MilpacEntryName": "blabla",
      "requirements": [
        {
          "MilpacEntryName": "Graduated ARMA3 Aviation Ground School"
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
          "MilpacEntryName": "Ground School"
        },
        {
          "MilpacEntryName": "Basic Rotary"
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
          "MilpacEntryName": "Ground School"
        }
      ]
    },
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
  users: [
    {
      "user_id": 11,
      "username": "Kleinman.H",
      "timezone": "Europe/Amsterdam",
      "message_count": 414,
      "like_count": 509,
      "register_date": "2015-12-13 18:45:45"
    },
    {
      "user_id": 12,
      "username": "Blackburn.J",
      "timezone": "Europe/Amsterdam",
      "message_count": 414,
      "like_count": 509,
      "register_date": "2015-12-13 18:45:45"
    },
    {
      "user_id": 13,
      "username": "Jarvis.A",
      "timezone": "Europe/Amsterdam",
      "message_count": 414,
      "like_count": 509,
      "register_date": "2015-12-13 18:45:45"
    },
    {
      "user_id": 14,
      "username": "Walsh.D",
      "timezone": "Europe/Amsterdam",
      "message_count": 414,
      "like_count": 509,
      "register_date": "2015-12-13 18:45:45"
    },
    {
      "user_id": 15,
      "username": "Wiese.M",
      "timezone": "Europe/Amsterdam",
      "message_count": 414,
      "like_count": 509,
      "register_date": "2015-12-13 18:45:45"
    }
  ],
  milpacs: [
    {
      "user_id": 11,
      entries: [
        {
          "record_id": 199,
          "details": "Ground School",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        },
        {
          "record_id": 200,
          "details": "Basic Rotary",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        }
      ]
    },
    {
      "user_id": 12,
      entries: [
        {
          "record_id": 201,
          "details": "Ground School",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        },
      ]
    },
    {
      "user_id": 13,
      entries: [
        {
          "record_id": 201,
          "details": "Ground School",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        },
        {
          "record_id": 200,
          "details": "Basic Rotary",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        },
        {
          "record_id": 200,
          "details": "Advanced Rotary",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        }
      ]
    },
    {
      "user_id": 14,
      entries: [
        {
          "record_id": 201,
          "details": "Ground School",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        },
      ]
    },
    {
      "user_id": 15,
      entries: [
        {
          "record_id": 201,
          "details": "Ground School",
          "record_date": "2009-07-11 04:00:00",
          "citation_date": "1970-01-01 00:00:00"
        },
      ]
    },
  ]
}

const mutations = {
  setCurrentModule(state, moduleD) {
    state.currentModule = moduleD
  },
  removeCurrentModule(state) {
    state.currentModule = {}
  },
  storeSelectedAttendees(state, attendees) {
    debugger;
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
          console.log(response.data.data.users);
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