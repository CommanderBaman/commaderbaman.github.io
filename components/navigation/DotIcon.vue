<template>
  <NuxtLink class="nav-icon-wrapper" :to="$props.routeLink">
    <div class="nav-container">
      <h2 class="nav-link">{{ $props.routeName }}</h2>
      <div class="nav-icon-container">
        <fa class="nav-icon" :icon="$props.icon" />
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    icon: {
      type: Array,
      required: true,
    },
    routeLink: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/navigation/dotIcon.css';
</style>
