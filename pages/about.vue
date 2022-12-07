<template>
  <div class="about-page">
    <div class="heading-section">
      <h1 class="back-heading">Introduction</h1>
      <h2 class="main-heading">
        <span class="heading-highlight"> About</span> Me
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/about.css';
</style>
