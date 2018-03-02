<template>
    <v-flex xs12>
      <v-flex class="mx-auto" lg4 md6 xs12 v-for="user in checkedUsers">
        <v-btn block >
          {{ user.username }} {{ user.isValid }}
        </v-btn>  
      </v-flex>
    </v-flex>
</template>

<script>
export default {
  methods: {
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

