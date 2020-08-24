<template>
  <h1>{{name}}</h1>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    this.name = this.$route.params.name
    console.log(this.$route.params.name)
  }
}
</script>
