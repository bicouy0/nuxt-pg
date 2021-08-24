import {
  TInput,
  TButton, TToggle
} from 'vue-tailwind/dist/components'
import LibrarySettings from 'vue-tailwind/dist/types/LibrarySettings'

export const config: LibrarySettings = {
  't-input': {
    component: TInput,
    props: {}
  },
  't-button': {
    component: TButton,
    props: {}
  },
  't-toggle': {
    component: TToggle,
    props: {
      variants: {
        bg: {

        }
      }
    }
  }
}
