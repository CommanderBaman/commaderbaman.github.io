<template>
  <div class="blog-page">
    <div class="heading-section">
      <h1 class="back-heading">Blog</h1>
      <h2 class="main-heading">
        My
        <span class="heading-highlight">Posts</span>
      </h2>
    </div>
    <div class="content-section">
      <div
        v-for="blog in allBlogData"
        :key="blog[BLOG_CONTENT_TITLES.TITLE]"
        class="blog-wrapper"
      >
        <CardWorkDisplay
          :cover-image-link="blog[BLOG_CONTENT_TITLES.COVER_IMAGE]"
          :destination-link="blog.path"
          :work-description="blog[BLOG_CONTENT_TITLES.DESCRIPTION]"
          :work-title="blog[BLOG_CONTENT_TITLES.TITLE]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import Vue from 'vue'
import { BLOG_CONTENT_ROUTE, BLOG_CONTENT_TITLES } from '~/assets/constants'

export default Vue.extend({
  name: 'BlogPage',
  async asyncData({ $content }: Context) {
    const allBlogData = await $content(BLOG_CONTENT_ROUTE)
      .only([
        BLOG_CONTENT_TITLES.TITLE,
        BLOG_CONTENT_TITLES.DESCRIPTION,
        BLOG_CONTENT_TITLES.COVER_IMAGE,
      ])
      .fetch()
    return { allBlogData }
  },
  data() {
    return { BLOG_CONTENT_TITLES }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/blog.css';
</style>
