<template>
  <div class="colored-circle-container">
    <div
      class="circle"
      :style="{
        width: `${$props.radius * 2}px`,
        height: `${$props.radius * 2}px`,
        backgroundColor: $props.color,
        color: $props.color,
      }"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    radius: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/shape/coloredCircle.css';
</style>
