<template>
  <div class="app">
    <BaseHeader />
    <main>
      <BaseHero />
      <BaseServices :services="services" />
      <BaseAction />
      <BaseAbout />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import smoothScroll from '@/helpers/smoothScroll'
export default {
  asyncData ({ store }) {
    const services = store.getters['services/getServices']
    return { services }
  },
  // computed: {
  //   services () {
  //     console.log(this.$store.getters['services/getServices'])
  //     return this.$store.getters['services/getServices']
  //   }
  // }
  mounted () {
    smoothScroll()
  }
}
</script>
