<template>
  <button @click.prevent="isModalOpenData = true">
    <slot />
    <BaseModal :open.sync="isModalOpenData" :close-btn="closeBtn">
      <slot name="modalContent" />
    </BaseModal>
  </button>
</template>
<script>
import BaseModal from '@/components/BaseModal.vue'

export default {
  components: { BaseModal },
  props: {
    closeBtn: {
      type: Boolean
    },
    doClose: {
      type: Boolean
    }
  },
  data () {
    return {
      isModalOpenData: false
    }
  },
  watch: {
    doClose (value) {
      console.log('test')
      if (value) {
        this.isModalOpenData = !value
      }
    }
  },
  methods: {}
}
</script>
