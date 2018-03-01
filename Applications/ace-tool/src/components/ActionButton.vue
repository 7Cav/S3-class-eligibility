<template>
  <v-flex class="mx-auto" lg4 md6 xs12>
    <v-btn block v-if="item">
      {{ item.name }}
    </v-btn>  
    <v-btn block v-if="name">
      {{ name }}
    </v-btn>  
  </v-flex>
    
</template>

<script>
export default {
  props: ['item', 'name']
}
</script>

<style lang="scss">
.action-button{
  background-color:black !important;
  padding:2em;
  margin:2em; 
  margin-left:auto;
  margin-right:auto;
}
</style>
