<template>
  <div class="app">
    <BaseHeader />
    <main>
      <BaseHero />
      <BaseServices :services="services" />
      <!-- :services="services"  -->
      <BaseAction />
      <BaseAbout />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  asyncData ({ store }) {
    store.dispatch('services/getServices')
    const services = store.getters['services/services']
    return { services }
  }
  // computed: {
  //   services () {
  //     console.log(this.$store.getters['services/getServices'])
  //     return this.$store.getters['services/getServices']
  //   }
  // }
}
</script>
