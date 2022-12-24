<template>
  <nav class="navbar">
    <ul class="links-container">
      <li v-for="route in routes" :key="route.id" class="link-wrapper">
        <!--
          the active link would also be active if its children are opened
          example: blog will light up if /blog or /blog/23/46534 is there
        -->
        <NavigationDotIcon
          v-show="navOpen"
          :currently-opened="route.path === '/' + $route.path.split('/')[1]"
          :icon="route.icon"
          :route-link="route.path"
          :route-name="route.name"
        />
      </li>
    </ul>
    <div class="navbar-handler-wrapper">
      <!-- <fa
        :class="`navbar-handler ${
          navOpen ? 'navbar-closer' : 'navbar-opener'
        }`"
        :icon="['fas', navOpen ? 'xmark' : 'grip-lines']"
        @click="navOpen = !navOpen"
      /> -->
      <fa
        v-if="navOpen"
        class="navbar-handler navbar-closer"
        :icon="['fas', 'xmark']"
        @click="navOpen = false"
      />
      <fa
        v-else
        class="navbar-handler navbar-opener"
        :icon="['fas', 'grip-lines']"
        @click="navOpen = true"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { routes } from '~/assets/constants'

export default {
  data() {
    const navOpen = true
    return {
      navOpen,
      routes,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/navigation/dotBar.css';
</style>
