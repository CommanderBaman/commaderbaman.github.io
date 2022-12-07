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
        v-for="project in allProjectData"
        :key="project[PROJECT_CONTENT_TITLES.TITLE]"
        class="project-wrapper"
      >
        <CardWorkDisplay
          :cover-image-link="project[PROJECT_CONTENT_TITLES.COVER_IMAGE]"
          :destination-link="project.customPath"
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
  ProjectRoute,
  PROJECT_CONTENT_ROUTE,
  PROJECT_CONTENT_TITLES,
} from '~/assets/constants'

export default Vue.extend({
  name: 'ProjectsPage',
  async asyncData({ $content }: Context) {
    const allProjectData = await $content(PROJECT_CONTENT_ROUTE)
      .without(['body', 'toc', 'dir'])
      .fetch()
    allProjectData.forEach(
      // taking only the types which are required
      (projectData: { customPath: string; path: string }) => {
        projectData.customPath =
          ProjectRoute.path +
          '/' +
          // remove the first two parts as they are just folder structure
          projectData.path.split('/').slice(2).join('/')
      }
    )
    return { allProjectData }
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
