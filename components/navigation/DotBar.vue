<template>
  <nav class="navbar">
    <transition name="rise-fade">
      <ul v-show="navOpen" class="links-container">
        <li
          v-for="(route, index) in routes"
          :key="route.id"
          class="link-wrapper"
          :style="`transition-delay: ${index * 0.1}s`"
        >
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
    </transition>
    <div class="navbar-handler-wrapper">
      <transition-group name="fader" mode="out-in">
        <!-- <fa
        :class="`navbar-handler ${
          navOpen ? 'navbar-closer' : 'navbar-opener'
        }`"
        :icon="['fas', navOpen ? 'xmark' : 'grip-lines']"
        @click="navOpen = !navOpen"
      /> -->
        <fa
          v-if="navOpen"
          :key="0"
          class="navbar-handler navbar-closer"
          :icon="['fas', 'xmark']"
          @click="navOpen = false"
        />
        <fa
          v-else
          :key="1"
          class="navbar-handler navbar-opener"
          :icon="['fas', 'grip-lines']"
          @click="navOpen = true"
        />
      </transition-group>
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
@import '~/assets/styles/transitions.css';
@import '~/assets/styles/components/navigation/dotBar.css';
</style>
