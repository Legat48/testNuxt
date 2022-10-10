<!-- Please remove this file from your project -->
<template>
  <section id="services" class="services">
    <ul class="services__list">
      <li
        v-for="service in service"
        :key="service.id"
        class="services__item"
      >
        <button class="services__btn btn">
          <img :src="service.img" :alt="service.title" class="services__icon">
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
  data () {
    return {
      services: [
        {
          id: 1,
          img: '../assets/svg/services-1.svg',
          title: 'Лечение зубов',
          items: [
            {
              id: 1,
              title: 'услуга №1',
              price: '100р'
            },
            {
              id: 2,
              title: 'услуга №2',
              price: '200р'
            }
          ]
        },
        {
          id: 2,
          img: '../assets/svg/services-2.svg',
          title: 'Протезирование',
          items: [
            {
              id: 1,
              title: 'услуга №1',
              price: '100р'
            },
            {
              id: 2,
              title: 'услуга №2',
              price: '200р'
            }
          ]
        },
        {
          id: 3,
          img: '../assets/svg/services-3.svg',
          title: 'Художественная реставрация',
          items: [
            {
              id: 1,
              title: 'услуга №1',
              price: '100р'
            },
            {
              id: 2,
              title: 'услуга №2',
              price: '200р'
            }
          ]
        },
        {
          id: 4,
          img: '../assets/svg/services-4.svg',
          title: 'Имплантация',
          items: [
            {
              id: 1,
              title: 'услуга №1',
              price: '100р'
            },
            {
              id: 2,
              title: 'услуга №2',
              price: '200р'
            }
          ]
        },
        {
          id: 5,
          img: '../assets/svg/services-5.svg',
          title: 'Хирургия и удаление',
          items: [
            {
              id: 1,
              title: 'услуга №1',
              price: '100р'
            },
            {
              id: 2,
              title: 'услуга №2',
              price: '200р'
            }
          ]
        },
        {
          id: 6,
          img: '../assets/svg/services-6.svg',
          title: 'Отбеливание и чистка',
          items: [
            {
              id: 1,
              title: 'услуга №1',
              price: '100р'
            },
            {
              id: 2,
              title: 'услуга №2',
              price: '200р'
            }
          ]
        }
      ]
    }
  }
}
</script>
