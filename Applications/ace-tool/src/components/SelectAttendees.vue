<template>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card raised>
        <v-card-title primary-title>
          <div>
            <h3 class="headline">Select attendees</h3>
            <div>Select the attendees of your session...</div>
            <v-flex>
              <v-select
                :items="usersData"
                item-text="username"
                v-model="selected"
                chips
                multiple
                prepend-icon="people"
                hide-selected
                autocomplete
              ></v-select>
            </v-flex>
          </div>
        </v-card-title>
         <v-card-actions>
           <router-link to="/Eligibility">
              <v-btn flat>Continue</v-btn>
           </router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
   
</template>

<script>
export default {
  data: () => ({
    selected: []
  }),
  computed:{
    usersData: function()
    {
      return this.$store.state.users
    }
  }
}
</script>

<style lang="scss">

</style>


