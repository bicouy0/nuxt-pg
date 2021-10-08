import Vue from 'vue'

interface Onesignal {
  showNativePrompt(): Promise<void>
  showSlidedownPrompt(): Promise<void>
}

declare module 'vue/types/vue' {
    interface Vue {
        $OneSignal: OneSignal;
    }
}
