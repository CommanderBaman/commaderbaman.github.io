<template>
  <div class="skill-display-card-wrapper">
    <div class="skill-circle-wrapper">
      <img :src="$props.coverImageLink" loading="lazy" class="cover-image" />
    </div>
    <div class="display-text-section">
      <p class="skill-description">{{ $props.skillName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    skillName: {
      type: String,
      required: true,
    },
    skillProficiency: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/card/skillDisplay.css';
</style>
