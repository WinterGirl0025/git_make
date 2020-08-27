<template>
  <div class="circle">
    <CirclePage></CirclePage>
  </div>
</template>

<script>
import CirclePage from '../components/CirclePage'

export default {
  components: { CirclePage },
  data() {
    return {}
  }
}
</script>

<style scoped>
.circle {
  height: 40%;
}
</style>
