<template>
    <v-flex xs12>
      <v-flex class="mx-auto" lg4 md6 xs12 v-for="user in checkedUsers" :key="user.user_id">
        <v-btn block @click="redirectToMilpac(user)">
          <v-icon class="user-valid" v-if="user.isValid">check_circle</v-icon>
          <v-icon class="user-not-valid" v-if="!user.isValid">check_circle</v-icon>
          <v-flex class="" >
          {{ user.username }} {{ user.isValid }}
          </v-flex>
        </v-btn>  
      </v-flex>
    </v-flex>
</template>

<script>
import axios from 'axios';
import eligibility from './../services/eligibilityService';

export default {
  methods: {
    redirectToMilpac(user)
    {
      window.open('https://7cav.us/rosters/profile?uniqueid=' + user.id);
    },
    retrieveMilpac(userID)
    {
      
    },
  },
  mounted () {
    eligibility.test();
  },
  computed:{
    checkedUsers: () => 
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


