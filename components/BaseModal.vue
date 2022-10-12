<template>
  <portal v-if="open" to="destination">
    <div class="teleport-blackout" />
    <div
      class="teleport-modal"
      @click="doOnOutsideClick"
      @keyup="doOnOutsideClick"
    >
      <div ref="contentElement" class="teleport-modal__content">
        <button
          v-if="!closeBtn"
          type="button"
          class="teleport-modal__close"
          @click="docloseModal"
          @keyup="doOnOutsideClick"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L14 14" stroke="#191820" stroke-opacity="0.6" stroke-linecap="round" />
            <path d="M1 14L14 1" stroke="#191820" stroke-opacity="0.6" stroke-linecap="round" />
          </svg>
        </button>
        <slot />
      </div>
    </div>
  </portal>
</template>

<script>
const openModalsCount = new Set()

export default {
  props: {
    open: {
      type: Boolean
    },
    closeBtn: {
      type: Boolean
    }
  },
  data () {
    return {
      contentElement: null,
      isOpen: false
    }
  },
  computed: {
    isSomeOpen () {
      return !!this.isOpen
    }
  },
  watch: {
    open (value) {
      if (value) {
        this.doOpen()
      } else {
        this.doClose()
      }
    },
    isSomeOpen () {
      this.doCheckBlackoutState()
    }
  },
  methods: {
    doOnOutsideClick (event) {
      this.contentElement = event.target
        .closest('.teleport-modal')
        .querySelector('.teleport-modal__content')
      if (
        event.target !== this.contentElement &&
        event.target.contains(this.contentElement)
      ) {
        this.docloseModal()
      }
    },
    docloseModal () {
      this.$emit('update:open', false)
    },
    doOpen () {
      this.isOpen = true
      openModalsCount.add(this.uid)
    },
    doClose () {
      this.isOpen = false
      openModalsCount.delete(this.uid)
    },
    doCheckBlackoutState () {
      if (!this.isSomeOpen) {
        document.body.style.overflow = null
        document.body.style.paddingRight = null
      } else {
        document.body.style.paddingRight = `${
          window.innerWidth - document.documentElement.innerWidth
        }px`
        document.body.style.overflow = 'hidden'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.teleport-blackout {
  z-index: 1010;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  background: rgba(25, 24, 32, 0.6);
  backdrop-filter: blur(2px);

}
.teleport-modal {
  z-index: 1010;
  overflow: auto;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;

}
.teleport-modal__content {
  position: relative;
  max-width: 1000px;
  margin-top: auto;
  margin-bottom: auto;
}
.teleport-modal__close {
  position: absolute;
  top: -1.5em;
  right: -1.5em;
  padding: 10px;
  border: none;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  line-height: 1;
  background: #fff;
}
</style>
