import ChoiceComponent from './src/component.vue'

const Options = {}

const install = Vue => {
  Vue.component('choice-component', ChoiceComponent)
}

const setup = options => {
  for (let key in options) {
    if (!(key in Options)) return
    Options[key] = options[key]
  }
}

export default {
  install,
}

export { ChoiceComponent, install as ChoiceComponentInstaller, setup, Options }
