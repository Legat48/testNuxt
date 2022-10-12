<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="header__box container">
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
