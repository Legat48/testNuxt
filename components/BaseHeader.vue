<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <button id="burger" class="burger header__burger" aria-label="открыть или закрыть меню">
      <div class="burger__body">
        <span class="burger__line" />
      </div>
    </button>

    <a href="#index.html" class="header__logo logo" aria-label="32 карата" />
    <nav class="header__nav nav">
      <div class="nav__box">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#services" class="nav__link js-scroll-link">
              Услуги
            </a>
          </li>
          <li class="nav__item">
            <a href="#action" class="nav__link js-scroll-link">
              Клиника
            </a>
          </li>
          <li class="nav__item">
            <a href="#footer" class="nav__link js-scroll-link">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>
