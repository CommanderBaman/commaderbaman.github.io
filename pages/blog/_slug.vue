<template>
  <article class="article-wrapper">
    <h1 class="article-title">
      {{ blogData[BLOG_CONTENT_TITLES.TITLE] }}
    </h1>
    <p class="article-description">
      {{ blogData[BLOG_CONTENT_TITLES.DESCRIPTION] }}
    </p>
    <NuxtImg
      :src="blogData[BLOG_CONTENT_TITLES.COVER_IMAGE]"
      loading="lazy"
      class="article-cover-image"
    />
    <div class="article-content-wrapper">
      <NuxtContent :document="blogData" />
    </div>
  </article>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { BLOG_CONTENT_TITLES } from '~/assets/constants'

export default Vue.extend({
  async asyncData({ $content, route, redirect }: Context) {
    const blogData = await $content(route.path)
      .fetch()
      .catch((_) => {
        // TODO: change to a variable from constants
        redirect('/blog')
      })
    return { blogData }
  },
  data() {
    return { BLOG_CONTENT_TITLES }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/blog.css';
</style>

<style>
@import '~/assets/styles/nuxt-content.css';
</style>
