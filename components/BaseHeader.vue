<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="header__wrap">
      <button
        id="burger"
        class="burger header__burger"
        aria-label="открыть или закрыть меню"
        :class="{ 'burger--active': nohidden }"
        @click="hidden()"
      >
        <div class="burger__body">
          <span class="burger__line" />
        </div>
      </button>

      <a href="#index.html" class="header__logo logo" aria-label="32 карата" />
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <a href="#services" class="header__link js-scroll-link">
              Услуги
            </a>
          </li>
          <li class="header__item">
            <a href="#action" class="header__link js-scroll-link">
              Клиника
            </a>
          </li>
          <li class="header__item">
            <a href="#footer" class="header__link js-scroll-link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <div class="header__plug" aria-hidden="true" />
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      nohidden: false
    }
  },
  methods: {
    hidden () {
      if (this.nohidden === true) {
        this.nohidden = false
      } else {
        this.nohidden = true
      }
    }
  }
}
</script>
