<template>
  <article class="article-wrapper">
    <h1 class="article-title">
      {{ projectData[PROJECT_CONTENT_TITLES.TITLE] }}
    </h1>
    <p class="article-description">
      {{ projectData[PROJECT_CONTENT_TITLES.DESCRIPTION] }}
    </p>
    <img
      :src="projectData[PROJECT_CONTENT_TITLES.COVER_IMAGE]"
      loading="lazy"
      class="article-cover-image"
    />
    <div class="article-content-wrapper">
      <NuxtContent :document="projectData" />
    </div>
  </article>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import {
  PROJECT_CONTENT_ROUTE,
  ProjectRoute,
  PROJECT_CONTENT_TITLES,
} from '~/assets/constants'

export default Vue.extend({
  async asyncData({ $content, route, redirect }: Context) {
    const pagePath =
      PROJECT_CONTENT_ROUTE + '/' + route.path.split('/').slice(2).join('/')
    const projectData = await $content(pagePath)
      .fetch()
      .catch((_) => {
        redirect(ProjectRoute.path)
      })
    return { projectData }
  },
  data() {
    return { PROJECT_CONTENT_TITLES }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/projects.css';
</style>

<style>
@import '~/assets/styles/nuxt-content.css';
</style>
