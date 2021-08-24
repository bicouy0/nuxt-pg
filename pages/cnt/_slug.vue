<template>
  <section class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="py-3">
      <nuxt-link to="/">
        back home
      </nuxt-link>
    </div>
    <div class="prose prose-sm">
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page
    }
  }
})
</script>
