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
export default {
  asyncData ({ store }) {
    const services = store.getters['services/getServices']
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
