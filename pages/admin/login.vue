<template>
  <main>
    <div class="login">
      <form class="login__form" action="#" @submit.prevent="authorization()">
        <div class="login__logo" />
        <label class="login__label" for="input-login">
          <input
            id="input-login"
            v-model="login"
            class="login__input login-input"
            type="text"
            placeholder="Логин"
            name="login"
          >
        </label>
        <label class="login__label" for="input-password">
          <input
            id="input-password"
            v-model="pass"
            class="login__input"
            :type="passType"
            placeholder="Пароль"
            name="password"
          >
          <button class="login__show knob" @click.prevent="hidingPass()">
            <svg
              v-if="!showPass"
              class="login__view"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0
            -8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
            <svg
              v-if="showPass"
              class="login__view"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96
              11.49.2 10a11 11 0 0 1
            12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.
            78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3
            .99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
              />
            </svg>
          </button>
        </label>
        <div v-if="errorLogin" class="login__error">
          Неверный логин или пароль
        </div>
        <button class="login__knob knob knob_alt-2" type="submit">
          Войти
        </button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  middleware: ['checkAuth'],
  data () {
    return {
      login: '',
      pass: '',
      corrLogin: 'admin',
      corrPass: '1234',
      passType: 'password',
      errorLogin: false,
      showPass: false,
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    hidingPass () {
      if (this.passType === 'password') {
        this.passType = 'text'
      } else {
        this.passType = 'password'
      }
    },
    authorization () {
      if (this.login === this.corrLogin && this.pass === this.corrPass) {
        this.$cookies.set('login', 'true', {
          path: '/'
        })
        this.$router.push({ path: '/admin' })
      }
    }
  }
}
</script>
