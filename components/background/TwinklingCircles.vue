<template>
  <div class="custom-background-wrapper">
    <div
      v-for="(radius, index) in circleRadii"
      :key="index"
      class="circle-container"
    >
      <ShapeColoredCircle
        :style="{
          position: 'absolute',
          top: `${positionXArray[index]}%`,
          left: `${positionYArray[index]}%`,
          animationDuration: `${animationDurationArray[index]}s`,
        }"
        :radius="radius"
        :color="'var(--clr-primary)'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { getRandomInteger } from '~/tools/DataHandler'

export default {
  data() {
    let total = 700
    const circleRadii = []
    const positionXArray = []
    const positionYArray = []
    const animationDurationArray = []
    while (total > 0) {
      const radii = getRandomInteger(0, Math.min(total, 30))
      const positionX = getRandomInteger(0, 100)
      const positionY = getRandomInteger(0, 100)
      const animationDuration = getRandomInteger(100, 1000) / 100
      total -= radii
      circleRadii.push(radii)
      positionXArray.push(positionX)
      positionYArray.push(positionY)
      animationDurationArray.push(animationDuration)
    }
    return {
      circleRadii,
      positionXArray,
      positionYArray,
      animationDurationArray,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/background/twinklingCircles.css';
</style>
