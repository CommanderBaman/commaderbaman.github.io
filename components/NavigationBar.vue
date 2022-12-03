<template>
  <nav class="navbar">
    <ul class="links-container">
      <li v-for="route in routes" :key="route.id" class="link-wrapper">
        <h3 class="link">
          <fa :icon="route.icon" />
          <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </h3>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { routes } from '~/assets/constants'

export default {
  data() {
    return {
      routes,
    }
  },
}
</script>

<style>
@import '~/assets/styles/components/navigationBar.css';
</style>
