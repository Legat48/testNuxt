export const state = () => ({
  // servicesData: null,
  services: [
    {
      id: 1,
      img: 'services-1.svg',
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
      img: 'services-2.svg',
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
      img: 'services-3.svg',
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
      img: 'services-4.svg',
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
      img: 'services-5.svg',
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
      img: 'services-6.svg',
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
})

export const getters = {
  getServices: state => state.services
  // services: state => state.servicesData ? state.servicesData : []
}

export const mutations = {
  setServices (state, value) {
    state.servicesData = value
  }
}

export const actions = {
  getServices (state, commit) {
    let services = localStorage.getItem('services')
    if (!services) {
      services = state.services
    }
    commit('setServices', services)
  }
}
