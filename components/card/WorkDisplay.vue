<template>
  <NuxtLink class="work-display-card-wrapper" :to="$props.destinationLink">
    <div class="cover-image-section">
      <NuxtImg
        :src="$props.coverImageLink"
        loading="lazy"
        class="cover-image"
      />
    </div>
    <div class="display-text-section">
      <h3 class="work-heading">{{ $props.workTitle }}</h3>
      <p class="work-description">{{ $props.workDescription }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    coverImageLink: {
      type: String,
      required: true,
    },
    destinationLink: {
      type: String,
      required: true,
    },
    workDescription: {
      type: String,
      required: true,
    },
    workTitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/card/workDisplay.css';
</style>
