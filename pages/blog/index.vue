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
          :destination-link="blog.customPath"
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
import {
  BlogRoute,
  BLOG_CONTENT_ROUTE,
  BLOG_CONTENT_TITLES,
} from '~/assets/constants'

export default Vue.extend({
  name: 'BlogPage',
  async asyncData({ $content }: Context) {
    const allBlogData = await $content(BLOG_CONTENT_ROUTE)
      .without(['body', 'toc', 'dir'])
      .fetch()
    allBlogData.forEach(
      // taking only the types which are required
      (blogData: { customPath: string; path: string }) => {
        blogData.customPath =
          BlogRoute.path +
          '/' +
          // remove the first two parts as they are just folder structure
          blogData.path.split('/').slice(2).join('/')
      }
    )
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
