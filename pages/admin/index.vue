<template>
  <main />
</template>

<script>
export default {
  middleware: ['checkAuth'],
  data () {
    return {
      login: 'admin',
      pass: '1234',
      passType: 'password',
      showPass: false,
      publicPath: process.env.BASE_URL
    }
  },
  created () {
    console.log('test3')
  },
  methods: {
    hidingPass () {
      if (this.passType === 'password') {
        this.passType = 'text'
      } else {
        this.passType = 'password'
      }
    }
  },
  beforeCreated () {
    console.log('test2')
  }
}
</script>
