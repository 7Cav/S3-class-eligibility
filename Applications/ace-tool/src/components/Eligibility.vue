<template>
  <h1>This just in, nope</h1>
</template>

<script>
export default {
  mounted () {
        this.$store.commit('setCurrentModule', { 'header': 'ATTENDEES'})
    },
  destroyed() {
      this.$store.commit('removeCurrentModule')
  }
}
</script>

