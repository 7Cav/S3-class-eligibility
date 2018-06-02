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

export default {
  methods: {
    redirectToMilpac(user)
    {
      window.open('https://7cav.us/rosters/');
    },
    retrieveMilpac(userID)
    {
      return new Promise((resolve, reject) => {
      axios.get('/user/' + userID + '/records')
        .then(function (response) {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(function (error) {
          reject(error);
        })
      });
    },
    async hasRequirements(user, requirements)
    {
      let milpac = await this.retrieveMilpac(user);
        
      
      console.log(milpac.user_id)
      //No requirements? --> always valid
      if(requirements.length === 0)
      {
        console.log("skipping")
        return true
      }
      let valids = []
      //Loop through requirements
      requirements.forEach(req => {
        //loop through user milpacs
        milpac.entries.forEach(record => {
        //if requirement is met
        if(record.details.includes(req.MilpacEntryName))
        {
          valids.push(true)
          //TODO: implement break + for loop for better performance.
        }
        })
      }) 
      return valids.length == requirements.length;
    },
  },
  computed:{
    checkedUsers: function()
    {
      let users = this.$store.state.selectedAttendees;
      console.log("selected users: " + users[0]);
      let requirements = this.$store.state.currentModule.class.requirements
      users.forEach(async user => {
        let hasRequirements = await this.hasRequirements(user.user_id, requirements);
        if(hasRequirements)
        {
          user.isValid = true;
          debugger;
        }
        else
        {
          user.isValid = false;
          debugger;
        }
      });
      return users;
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


