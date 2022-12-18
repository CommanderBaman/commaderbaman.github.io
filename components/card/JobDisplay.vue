<template>
  <div class="job-display-card-wrapper">
    <div class="job-heading-section">
      <h4 class="job-title">{{ $props.jobTitle }}</h4>
      <p class="job-place">{{ $props.jobPlace }}</p>
    </div>
    <div class="job-duration">
      {{ getJobDurationString($props.startDate, $props.endDate) }}
    </div>
    <p class="job-description">
      {{ $props.jobDescription }}
    </p>
    <IconRoundDot
      class="job-icon"
      icon-link=""
      :icon-type="$props.jobIcon"
      disabled
    />
  </div>
</template>

<script lang="ts">
import { MONTHS } from '~/assets/constants'
export default {
  props: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      default: new Date(),
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobPlace: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobIcon: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    getJobDurationString(startDate: Date, endDate: Date) {
      const startString = `${
        MONTHS[startDate.getMonth()]
      }, ${startDate.getFullYear()}`
      let endString
      const currentDate = new Date()
      if (currentDate > endDate) {
        endString = `${MONTHS[endDate.getMonth()]}, ${endDate.getFullYear()}`
      } else {
        endString = 'Present'
      }
      return `${startString} - ${endString}`
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/card/jobDisplay.css';
</style>
