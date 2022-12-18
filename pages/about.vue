<template>
  <div class="about-page">
    <div class="heading-section">
      <h1 class="back-heading">Intro</h1>
      <h2 class="main-heading">
        <span class="heading-highlight"> About</span> Me
      </h2>
    </div>
    <div class="about-card">
      <div class="photo-section">
        <img
          src="/images/about/portrait.jpg"
          alt="Shubham Ojha's portrait"
          class="photo"
        />
        <h3 class="name">Shubham Ojha</h3>
        <div class="tagline">Student @IITB</div>
      </div>
      <div class="about-description">
        <p class="about-description-text">
          Hello! I am a student currently pursuing Dual Degree (B.Tech. +
          M.Tech.) in Electrical Engineering from IIT Bombay
        </p>
        <div class="resume-link-container">
          <a href="/documents/resume/11-2022.pdf" target="_blank" class="resume"
            >See Resume</a
          >
        </div>
        <div class="contact-icons">
          <div class="contact-description">Contact me via...</div>
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
          <div class="contact-form">
            Or you can fill up this
            <NuxtLink class="contact-form-link" :to="ContactRoute.path">
              contact form
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="skills-section">
      <h2>Skills</h2>
    </div>
    <div class="education-section">
      <h2>Education</h2>
    </div>
    <div class="intern-section">
      <h2>Work Experience</h2>
    </div>
    <div class="por-section">
      <h2>Positions held</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ContactRoute } from '~/assets/constants'

export default Vue.extend({
  name: 'AboutPage',
  data() {
    return {
      ContactRoute,
    }
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/about.css';
</style>
