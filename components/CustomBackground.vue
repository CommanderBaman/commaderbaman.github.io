<template>
  <div class="custom-background-wrapper">
    <div
      v-for="(radius, index) in circleRadii"
      :key="index"
      class="circle-container"
    >
      <ShapeColoredCircle
        :radius="radius"
        :color="'white'"
        :position-x="positionXArray[index]"
        :position-y="positionYArray[index]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { getRandomInteger } from '~/tools/DataHandler'

export default {
  data() {
    let total = 100
    const circleRadii = []
    const positionXArray = []
    const positionYArray = []
    while (total > 0) {
      const radii = getRandomInteger(0, total)
      const positionX = getRandomInteger(0, 100)
      const positionY = getRandomInteger(0, 100)
      total -= radii
      circleRadii.push(radii)
      positionXArray.push(positionX)
      positionYArray.push(positionY)
    }
    return {
      circleRadii,
      positionXArray,
      positionYArray,
    }
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/customBackground.css';
</style>
