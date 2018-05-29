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
export default {
  methods: {
    redirectToMilpac(user)
    {
      window.open('https://7cav.us/rosters/');
    },
    retrieveMilpac(userID)
    {
      let milpacs = this.$store.state.milpacs
      let milpac = {}
      milpacs.forEach(data => {
        if(data.user_id == userID)
        {
          milpac = data;
        }
      })
      return milpac;
    },
    hasRequirements(user, requirements)
    {
      let milpac = this.retrieveMilpac(user)
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
        if(req.MilpacEntryName == record.details)
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
      let requirements = this.$store.state.currentModule.class.requirements
      users.forEach(user => {
        if(this.hasRequirements(user.user_id, requirements))
        {
          user.isValid = true;
        }
        else
        {
          user.isValid = false;
        }
      });
      return users;
    }
  }
}
</script>

<style lang="scss">
.user-valid, .user-not-valid{
  position: absolute !important;
  left:0;
  margin-left:1em;
}

.user-not-valid{
  color:red !important;
}
</style>


