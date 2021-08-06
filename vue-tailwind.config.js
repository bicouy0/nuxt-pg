import {
  TInput,
  TButton, TToggle
} from 'vue-tailwind/dist/components'

export const config = {
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
