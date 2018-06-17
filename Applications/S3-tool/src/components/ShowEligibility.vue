<template>
    <v-flex xs12>
      <v-flex class="mx-auto" lg4 md6 xs12 v-for="user in checkedUsers" :key="user.user_id">
        <v-btn block @click="redirectToMilpac(user)">
          <v-icon class="user-valid" v-if="user.isValid">check_circle</v-icon>
          <v-icon class="user-not-valid" v-if="!user.isValid">check_circle</v-icon>
          <v-flex class="" >
          {{ retrieveUserName(user.user_id) }}
          </v-flex>
        </v-btn>  
      </v-flex>
    </v-flex>
</template>

<script>
import axios from 'axios';
import EligibilityService from './../services/eligibilityService';

export default {
  methods: {
    redirectToMilpac(user)
    {
      window.open('https://7cav.us/rosters/profile?uniqueid=' + user.id);
    },
    retrieveUserName(user_id)
    {
      let users = this.$store.state.users;
      let completeUser = users.filter(user => user.user_id === user_id)[0];
      return completeUser.username;
    }
  },
  mounted () {
    let eligibilityService = new EligibilityService();
    let attendees = this.$store.state.selectedAttendees;
    let requirements = this.$store.state.currentModule.class.requirements;
    let checkedAttendees = eligibilityService.CheckUserRequirements(attendees, requirements);    
    this.$store.commit("storeCheckedAttendees", checkedAttendees);
  },
  computed:{
    checkedUsers()
    {
      return this.$store.state.checkedAttendees;
    }
  }
}
</script>

<style lang="scss">
.user-valid,
.user-not-valid {
  position: absolute !important;
  left: 0;
  margin-left: 1em;
}

.user-not-valid {
  color: red !important;
}
</style>


