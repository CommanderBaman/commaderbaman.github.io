<template>
  <nav class="navbar">
    <ul class="links-container">
      <li v-for="route in routes" :key="route.id" class="link-wrapper">
        <!--
          the active link would also be active if its children are opened
          example: blog will light up if /blog or /blog/23/46534 is there
        -->
        <NavigationDotIcon
          :currently-opened="route.path === '/' + $route.path.split('/')[1]"
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
@import '~/assets/styles/components/navigation/dotBar.css';
</style>
