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
  middleware: ['checkAuth'],
  asyncData ({ store }) {
    const services = store.getters['services/getServices']
    return { services }
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
