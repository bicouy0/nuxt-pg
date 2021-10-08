import Vue from 'vue';
import OneSignal from 'onesignal-web-sdk/src/OneSignal';

declare module 'vue/types/vue' {
    interface Vue {
        $OneSignal: typeof OneSignal;
    }
}
