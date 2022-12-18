<template>
  <a :href="$props.iconLink" target="_blank" class="dot-icon-wrapper">
    <div class="dot-container">
      <fa class="dot-icon" :icon="$props.iconType" />
    </div>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    iconType: {
      type: Array,
      required: true,
    },
    iconLink: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/icon/roundDot.css';
</style>
