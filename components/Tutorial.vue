<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-200 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <a class="flex justify-center pt-8 sm:pt-0" href="https://nuxtjs.org" target="_blank">
        <NuxtLogo />
      </a>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to your <span class="test"><span class="blop">Nuxt</span></span> Application
        </h2>
        <p class="mt-3 text-gray-600">
          We recommend you take a look at the <a href="https://nuxtjs.org" target="_blank" class="text-green-500 hover:underline">Nuxt documentation</a>, whether you are new or have previous experience with the framework.<br>
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
        </p>
        <div class="btn">
          button
        </div>
        <div class="btn btn--green">
          green button
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.test {
  .blop {
    @apply text-green-700 bg-green-100 hover:underline;
  }
}

.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md cursor-pointer;

  &--green {
    @apply text-white bg-green-500 hover:bg-green-700;
  }
}

</style>
