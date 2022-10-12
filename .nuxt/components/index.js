export { default as BaseAbout } from '../..\\components\\BaseAbout.vue'
export { default as BaseAction } from '../..\\components\\BaseAction.vue'
export { default as BaseFooter } from '../..\\components\\BaseFooter.vue'
export { default as BaseHeader } from '../..\\components\\BaseHeader.vue'
export { default as BaseHero } from '../..\\components\\BaseHero.vue'
export { default as BaseModal } from '../..\\components\\BaseModal.vue'
export { default as BaseServices } from '../..\\components\\BaseServices.vue'
export { default as ModalBtn } from '../..\\components\\ModalBtn.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
