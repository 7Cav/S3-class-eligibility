<template>
<div>
  <ul>
      <li v-bind:key="item" v-for="item in classesData">
          <p>{{ item.name }}</p>
      </li>
  </ul>
</div>
  
</template>

<script>
export default {
    computed: {
        classesData: function(){
            return this.$store.state.classes
        }
    }
}
</script>

<style lang="scss">

</style>

