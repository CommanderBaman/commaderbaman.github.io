<template>
  <div>
    <h1>{{ slug }}</h1>
    <p>Path: {{ $route.path }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ params }) {
    // adding dummy await to remove errors
    const slug = await params.slug
    console.log(slug)
    return { slug }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/projects.css';
</style>
