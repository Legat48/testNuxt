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
            <svg
              class="services__arrow"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.3404 12.552L9.86441 24.028L7.97908 22.1427L19.4537 10.6667H9.34041V8H24.0071V22.6667H21.3404V12.552Z" fill="#9747FF" />
            </svg>
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
                    <form
                      v-if="pages === '/admin'"
                      @submit.prevent="saveService(service.id, item.id)"
                    >
                      <input
                        :value="item.title"
                        type="text"
                        name="title"
                      >
                      <input
                        :value="item.price"
                        name="price"
                        type="text"
                      >
                      <button>
                        Сохранить
                      </button>
                    </form>
                    <button v-if="pages === '/admin'" @click.prevent="delService(service.id, item.id)">
                      Удалить
                    </button>
                  </li>
                  <form
                    v-if="pages === '/admin'"
                    @submit.prevent="addService(service.id)"
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
  data () {
    return {
      addTitle: '',
      addPrice: ''
    }
  },
  computed: {
    pages () {
      return this.$route.path
    }
  },
  methods: {
    addService (id) {
      let oldServices = Array.from(this.services)
      oldServices = JSON.parse(JSON.stringify(oldServices))
      const newItem = {
        title: this.addTitle,
        price: this.addPrice
      }
      const newservices = oldServices.map((e) => {
        if (e.id === id) {
          newItem.id = e.itemsNewId
          e.items.push(newItem)
          e.itemsNewId += 1
        }
        return e
      })
      this.$cookies.set('services', newservices, {
        path: '/'
      })
      this.$store.dispatch('services/getServices')
    },
    delService (id, itemId) {
      let oldServices = Array.from(this.services)
      oldServices = JSON.parse(JSON.stringify(oldServices))
      const newservices = oldServices.map((e) => {
        if (e.id === id) {
          e.items = e.items.filter(j => j.id !== itemId)
        }
        return e
      })
      this.$cookies.set('services', newservices, {
        path: '/'
      })
      this.$store.dispatch('services/getServices')
    },
    saveService (id, itemId) {
      let oldServices = Array.from(this.services)
      oldServices = JSON.parse(JSON.stringify(oldServices))
      const newservices = oldServices.map((e) => {
        if (e.id === id) {
          e.items = e.items.map((j) => {
            if (j.id === itemId) {
              j.title = event.target.elements.title.value
              j.price = event.target.elements.price.value
            }
            return j
          })
        }
        return e
      })
      this.$cookies.set('services', newservices, {
        path: '/'
      })
      this.$store.dispatch('services/getServices')
    }

  }
}
</script>
