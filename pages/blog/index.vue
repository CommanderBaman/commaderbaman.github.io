<template>
  <div class="blog-page">
    <div class="heading-section">
      <h1 class="back-heading">Blog</h1>
      <h2 class="main-heading">
        My
        <span class="heading-highlight">Posts</span>
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BlogPage',
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/blog.css';
</style>
