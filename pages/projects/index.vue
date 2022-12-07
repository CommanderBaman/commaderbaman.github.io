<template>
  <div class="projects-page">
    <div class="heading-section">
      <h1 class="back-heading">Projects</h1>
      <h2 class="main-heading">
        My
        <span class="heading-highlight">Work</span>
      </h2>
    </div>
    <div class="content-section">
      <div
        v-for="project in projectData"
        :key="project[PROJECT_CONTENT_TITLES.TITLE]"
        class="project-wrapper"
      >
        <CardWorkDisplay
          :cover-image-link="project[PROJECT_CONTENT_TITLES.COVER_IMAGE]"
          :destination-link="project.path"
          :work-description="project[PROJECT_CONTENT_TITLES.DESCRIPTION]"
          :work-title="project[PROJECT_CONTENT_TITLES.TITLE]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import {
  PROJECT_CONTENT_ROUTE,
  PROJECT_CONTENT_TITLES,
} from '~/assets/constants'

export default Vue.extend({
  name: 'ProjectsPage',
  async asyncData({ $content }: Context) {
    const projectData = await $content(PROJECT_CONTENT_ROUTE)
      .only([
        PROJECT_CONTENT_TITLES.TITLE,
        PROJECT_CONTENT_TITLES.DESCRIPTION,
        PROJECT_CONTENT_TITLES.COVER_IMAGE,
      ])
      .fetch()
    return { projectData }
  },
  data() {
    return { PROJECT_CONTENT_TITLES }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/projects.css';
</style>
