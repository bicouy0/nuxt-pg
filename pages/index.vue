<template>
  <section class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="bg-white overflow-hidden shadow sm:rounded-lg p-6">
      <h2 class="text-2xl leading-7 font-semibold">
        Welcome to your <span class="test"><span class="blop">Nuxt</span></span> Application
      </h2>
      <div class="pt-4">
        <p class="py-2">
          <nuxt-link :to="{name: 'cnt-slug', params: {slug: 'hello'}}">
            go to hello content
          </nuxt-link>
        </p>
        <t-input type="text" />
        <t-button type="button" @click="pop">
          OK
        </t-button>
      </div>
      <div>
        <t-toggle />
      </div>
      <test-para />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TestPara from '~/components/TestPara.vue'

export default Vue.extend({
  components: {
    TestPara
  },
  methods: {
    pop () {
      // console.log('pop')
    }
  }
})
</script>

<style lang="scss">
.test {
  .blop {
    @apply text-green-700 bg-green-100 hover:underline;
  }
}
</style>
