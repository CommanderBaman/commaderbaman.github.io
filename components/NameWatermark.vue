<template>
  <div class="watermark-wrapper">
    <div class="name-row">
      <p class="sign">Made by</p>
      <h1 class="name">Shubham Ojha</h1>
    </div>
    <div class="contact-row">
      <!-- github -->
      <a
        href="https://github.com/CommanderBaman"
        target="_blank"
        class="github contact-link"
      >
        <fa class="contact-icon" :icon="['fab', 'github']" />
      </a>
      <!-- facebook -->
      <a
        href="https://www.facebook.com/shubham.ojha.90/"
        target="_blank"
        class="facebook contact-link"
      >
        <fa class="contact-icon" :icon="['fab', 'facebook']" />
      </a>
      <!-- linkedin -->
      <a
        href="https://www.linkedin.com/in/shubham-ojha-80b52a1a9/"
        target="_blank"
        class="linkedin contact-link"
      >
        <fa class="contact-icon" :icon="['fab', 'linkedin']" />
      </a>
      <!-- insta -->
      <a
        href="https://www.instagram.com/commander.baman/"
        target="_blank"
        class="insta contact-link"
      >
        <fa class="contact-icon" :icon="['fab', 'instagram']" />
      </a>
      <!-- mail -->
      <a
        href="mailto:shubhamojha18@gmail.com"
        target="_blank"
        class="mail contact-link"
      >
        <fa class="contact-icon" :icon="['far', 'envelope']" />
      </a>
    </div>
  </div>
</template>

<style scoped>
@import '~/assets/styles/components/nameWatermark.css';
</style>
