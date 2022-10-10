<template>
  <main>
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>

export default {
  async asyncData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
      users
    }
  },
  data () {
    return {
      users: []
    }
  }
  // async fetch ({ store }) {
  //   store
  // }
}
</script>
