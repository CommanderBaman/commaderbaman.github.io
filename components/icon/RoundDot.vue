<template>
  <a
    :href="`${$props.disabled ? '' : $props.iconLink}`"
    target="_blank"
    :class="`${$props.disabled ? 'link-disabled' : ''} dot-icon-wrapper`"
  >
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/icon/roundDot.css';
</style>
