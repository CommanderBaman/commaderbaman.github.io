<template>
  <div class="colored-circle-container">
    Radius: {{ $props.radius }} Color: {{ $props.color }} X:
    {{ $props.positionX }} Y: {{ $props.positionY }}
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
    positionX: {
      type: Number,
      required: true,
    },
    positionY: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/shape/coloredCircle.css';
</style>
