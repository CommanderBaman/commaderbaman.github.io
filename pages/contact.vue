<template>
  <div class="contact-page">
    <div class="heading-section">
      <h1 class="back-heading">Contact</h1>
      <h2 class="main-heading">
        Drop a
        <span class="heading-highlight">Line</span>
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactPage',
  data() {
    const envVariables = {
      service: process.env.FORM_SERVICE_ID,
      template: process.env.FORM_TEMPLATE_ID,
      user: process.env.FORM_USER_ID,
    }
    return { envVariables }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/contact.css';
</style>
