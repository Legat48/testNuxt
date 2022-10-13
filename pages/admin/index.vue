<template>
  <div class="admin">
    <h1 class="admin__title">
      Панель администрирования страницы.
    </h1>
    <p class="admin__text">
      Для изменения списка услуг нажмите на карточку
    </p>
    <BaseServices :services="services" />
    <portal-target name="destination" />
  </div>
</template>

<script>
import BaseServices from '~/components/BaseServices.vue'
export default {
  components: { BaseServices },
  middleware: ['checkAuth', 'services'],
  asyncData ({ store }) {
    const servicesData = store.getters['services/getServices']
    return { servicesData }
  },
  computed: {
    services () {
      return this.$store.getters['services/getServices'] || this.servicesData
    }
  }
}
</script>

<style lang="scss" scoped>
.admin {
  padding-top: 15px;
  &__title {
    margin-bottom: 15px;
    text-align: center;
  }
  &__text {
    margin-bottom: 46px;
    text-align: center;
  }
}
</style>
