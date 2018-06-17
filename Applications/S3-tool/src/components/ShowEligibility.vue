<template>
  <v-flex xs12 lg6>
  <!-- <v-flex class="mx-auto" lg4 md6 xs12 v-for="user in checkedUsers" :key="user.user_id">
  <v-btn block @click="redirectToMilpac(user)">
  <v-icon class="user-valid" v-if="user.isValid">check_circle</v-icon>
  <v-icon class="user-not-valid" v-if="!user.isValid">check_circle</v-icon>
  <v-flex class="" >
  {{ retrieveUserName(user.user_id) }}
  </v-flex>
  </v-btn>  
  </v-flex> -->

    <v-expansion-panel
      expand = true
      popout = true
      >
      <v-expansion-panel-content v-for="user in checkedUsers" :key="user.user_id">
        <div slot="header"> 
          <v-flex xs12>
            <v-icon class="user-valid item-header" v-if="user.isValid">check_circle</v-icon>
            <v-icon class="user-not-valid" v-if="!user.isValid">report_problem</v-icon>
            <v-flex class="user-info" >
              {{ retrieveUserName(user.user_id) }}
            </v-flex>
          </v-flex>
          
        </div>
        <v-card>
          <v-card-text v-for="requirement in user.missingRequirements" :key="requirement">
            {{requirement}}
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
.user-not-valid, .user-info {
  display: inline;
}

.user-not-valid {
  color: red !important;
}
</style>


