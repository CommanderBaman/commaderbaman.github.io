<template>
  <div class="nav-link-wrapper">
    <h3 class="nav-link">
      <fa :icon="$props.icon" />
      <NuxtLink :to="$props.routeLink">{{ $props.routeName }}</NuxtLink>
    </h3>
  </div>
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
@import '~/assets/styles/components/navigation/mainIcon.css';
</style>
