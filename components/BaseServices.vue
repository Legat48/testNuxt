<!-- Please remove this file from your project -->
<template>
  <section id="services" class="services">
    <div class="services__box container">
      <ul class="services__list">
        <li
          v-for="service in services"
          :key="service.id"
          class="services__item"
        >
          <ModalBtn class="services__btn">
            <img
              :src="require(`~/assets/svg/${service.img}`)"
              :alt="service.title"
              class="services__icon"
            >
            <h3 class="services__title">
              {{ service.title }}
            </h3>
            <p class="services__text">
              Подробнее об услуге
            </p>
            <template #modalContent>
              <ul>
                <li v-for="item in service.items" :key="item.id">
                  {{ item.title }} {{ item.price }}
                </li>
              </ul>
            </template>
          </ModalBtn>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ModalBtn from '@/components/ModalBtn.vue'
export default {
  components: { ModalBtn },
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
