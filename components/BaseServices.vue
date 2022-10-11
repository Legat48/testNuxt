<!-- Please remove this file from your project -->
<template>
  <section id="services" class="services">
    <ul class="services__list">
      <li
        v-for="service in services"
        :key="service.id"
        class="services__item"
      >
        <button class="services__btn btn">
          <img :src="require(`~/assets/svg/${service.img}`)" :alt="service.title" class="services__icon">
          <h3 class="services__title">
            {{ service.title }}
          </h3>
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
