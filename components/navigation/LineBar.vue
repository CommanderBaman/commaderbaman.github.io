<template>
  <nav class="navbar">
    <ul class="links-container">
      <li v-for="route in routes" :key="route.id" class="link-wrapper">
        <NavigationLineIcon
          :icon="route.icon"
          :route-link="route.path"
          :route-name="route.name"
        />
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

<style scoped>
@import '~/assets/styles/components/navigation/lineBar.css';
</style>
