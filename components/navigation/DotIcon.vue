<template>
  <NuxtLink class="nav-icon-wrapper" :to="$props.routeLink">
    <div class="nav-icon">
      <fa class="nav-icon-icon" :icon="$props.icon" />
      <h2 class="nav-link">{{ $props.routeName }}</h2>
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

<style>
@import '~/assets/styles/components/navigation/dotIcon.css';
</style>
