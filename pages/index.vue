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
    <portal-target name="destination" />
  </div>
</template>

<script>
import smoothScroll from '@/helpers/smoothScroll'
export default {
  middleware: ['services'],
  asyncData ({ store }) {
    const servicesData = store.getters['services/getServices']
    return { servicesData }
  },
  computed: {
    services () {
      return this.$store.getters['services/getServices'] || this.servicesData
    }
  },
  mounted () {
    smoothScroll()
  }
}
</script>
