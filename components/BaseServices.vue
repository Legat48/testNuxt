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
              <div class="services__modal">
                <h3 class="services__title">
                  {{ service.title }}
                </h3>
                <ul class="services__modal-list">
                  <li
                    v-for="item in service.items"
                    :key="item.id"
                    class="services__modal-item"
                  >
                    <div
                      v-if="pages !== '/admin'"
                    >
                      {{ item.title }}
                    </div>
                    <div
                      v-if="pages !== '/admin'"
                    >
                      {{ item.price }}
                    </div>
                    <input
                      v-if="pages === '/admin'"
                      type="text"
                      :value="item.title"
                    >
                    <input
                      v-if="pages === '/admin'"
                      type="text"
                      :value="item.price"
                    >
                    <button v-if="pages === '/admin'" @click.prevent="saveService">
                      Сохранить
                    </button>
                    <button v-if="pages === '/admin'" @click.prevent="delService">
                      Удалить
                    </button>
                  </li>
                  <form
                    v-if="pages === '/admin'"
                    @submit.prevent="addService"
                  >
                    <input v-model="addTitle" placeholder="Название услуги">
                    <input v-model="addPrice" placeholder="цена">
                    <button type="submit">
                      Добавить
                    </button>
                  </form>
                </ul>
              </div>
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
  },
  computed: {
    pages () {
      return this.$route.path
    }
  },
  methods: {
    addService () {
      // нужно прописать функционал
    },
    delService () {
      // нужно прописать функционал
    },
    saveService () {
      // нужно прописать функционал
    }

  }
}
</script>
