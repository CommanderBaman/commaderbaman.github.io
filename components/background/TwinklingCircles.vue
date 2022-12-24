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
        :color="'var(--clr-on-bg)'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { getRandomInteger } from '~/tools/DataHandler'

const SUM_OF_ALL_AREAS = 550
const MAX_RADII = 4
// to increase area density for shorter areas
const SLOPE = -1
const CONSTANT = 1 - SLOPE // fixed 550 for 1920x1080 screens

export default {
  data() {
    // making it so that the total is smaller for smaller screens
    const areaRatio =
      (window.screen.height * window.screen.width) / (1920 * 1080)
    let total = SUM_OF_ALL_AREAS * areaRatio * (SLOPE * areaRatio + CONSTANT)
    const circleRadii = []
    const positionXArray = []
    const positionYArray = []
    const animationDurationArray = []
    while (total > 0) {
      const radii = getRandomInteger(1, Math.min(total, MAX_RADII))
      const positionX = getRandomInteger(0, 100)
      const positionY = getRandomInteger(0, 100)
      const animationDuration = getRandomInteger(100, 1000) / 100
      total -= radii * radii
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
