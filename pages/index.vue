<template>
  <div class="index-page">
    <div class="moon">
      <div class="text-container">
        <h2 class="greeting">Hello There!</h2>
      </div>
      <div class="skiing-man">
        <fa :icon="['fas', 'person-skiing']" />
      </div>

      <div class="spot spot-1" />
      <div class="spot spot-2" />
      <div class="spot spot-3" />
      <div class="spot spot-4" />
      <!-- <div class="spot spot-5" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped>
@import '~/assets/styles/pages/index.css';
</style>
