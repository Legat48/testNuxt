<template>
  <main>
    <h1>Обертка для страниц  users</h1>
    <nuxt-child />
  </main>
</template>

<script>
export default {
  middleware: ['checkAuth']

}
</script>
