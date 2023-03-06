<template>
  <div>
    vue 3 app;

    <button @click="test_alert">$alert</button>
    
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  },
  methods: {
    test_alert() {
      this.$alert("test_alert");
    }
  },
}
</script>

<style lang="scss" scoped>

</style>