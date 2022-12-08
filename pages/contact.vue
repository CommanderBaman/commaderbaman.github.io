<template>
  <div class="contact-page">
    <div class="heading-section">
      <h1 class="back-heading">Contact</h1>
      <h2 class="main-heading">
        Drop a
        <span class="heading-highlight">Line</span>
      </h2>
    </div>
    <div class="content-section">
      <div class="form-section">
        <p class="form-description">{{ formHelpMessage }}</p>
        <form class="form-container" @submit.prevent="sendEmail">
          <div class="name-input form-input-container">
            <label class="form-input-label" for="name">Name</label>
            <input
              id="name"
              v-model="name"
              class="form-input"
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div class="email-input form-input-container">
            <label class="form-input-label" for="email">Email</label>
            <input
              id="email"
              v-model="email"
              class="form-input"
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              :class="`${isEmailCorrect ? '' : 'email-error-input'}`"
              @change="checkEmailCorrectness"
            />
            <div
              :class="`email-error-message ${
                isEmailCorrect ? 'email-error-hidden' : ''
              }`"
            >
              Incorrect email
            </div>
          </div>
          <div
            class="message-input form-input-container form-input-container-2"
          >
            <label class="form-input-label" for="message">Message</label>
            <textarea
              id="message"
              v-model.trim="message"
              class="form-input"
              type="text"
              name="message"
              placeholder="Enter your Message"
              rows="5"
              required
            />
          </div>
          <input
            class="form-input submit-button form-input-container-2"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div class="links-section">
        <div class="link-description">
          Or you can just contact me via the links below
        </div>
        <div class="contact-row">
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const FORM_BLANK = 0
const FORM_SUBMITTING = 1
const FORM_ERROR = 2
const FORM_SUCCESS = 3

export default Vue.extend({
  name: 'ContactPage',
  data() {
    return {
      email: '',
      formStatus: FORM_BLANK,
      message: '',
      name: '',
      isEmailCorrect: true,
    }
  },
  computed: {
    // isEmailCorrect() {
    //   // for some reason due to v-model
    //   // below part is giving error
    //   return this.email.match(/(^$|^.*@.*\..*$)/)
    // },
    formHelpMessage() {
      if (this.formStatus === FORM_BLANK) {
        return 'Here is a form to directly contact me'
      }
      if (this.formStatus === FORM_SUBMITTING) {
        return 'Sending message...'
      }
      if (this.formStatus === FORM_ERROR) {
        return 'Some error occured. Sorry for the inconvenience'
      }
      if (this.formStatus === FORM_SUCCESS) {
        return 'We recieved your message, Thank you.'
      }
      return 'Code is going bonkers in here! Contact the developer quickly'
    },
  },
  methods: {
    checkEmailCorrectness() {
      // email can either be empty or an email
      // this fires only when it goes out of focus
      this.isEmailCorrect = /(^$|^.*@.*\..*$)/.test(this.email)
    },
    sendEmail(e: any) {
      if (!this.isEmailCorrect) return
      this.formStatus = FORM_SUBMITTING
      // sendForm(
      //   process.env.FORM_SERVICE_ID || '',
      //   process.env.FORM_TEMPLATE_ID || '',
      //   e.target,
      //   process.env.FORM_USER_ID
      // ).then(
      //   (result: any) => {
      //     // eslint-disable-next-line no-console
      //     console.info(`Form successfully submitted\nMessage: ${result.text}`)
      //     this.formStatus = FORM_SUCCESS
      //   },
      //   (error: any) => {
      //     // eslint-disable-next-line no-console
      //     console.error(
      //       `Form submission encountered error\nMessage: ${error.text}`
      //     )
      //     this.formStatus = FORM_ERROR
      //   }
      // )
      e.target.reset()
    },
  },
})
</script>

<style scoped>
@import '~/assets/styles/pages/heading-section.css';
@import '~/assets/styles/pages/contact.css';
</style>
