<template>
  <div class="err1 container">
    <div class="errtext font-medium">
      <h1 class="errtext-h">Упс! Страница не существует.</h1>
    </div>
    <router-link to="/" class="btn-primary btn sizea">Вернуться на главную</router-link>
    <img class="err404" src="/img/background/err404.svg" />
  </div>
</template>



<script>
export default {

}
</script>

<style lang="scss" scoped>
.err1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  width: 1120px;
  height: 712px;
}

.sizea {
  width: 228px;
  height: 52px;
}

.err404 {
  width: 930px;
  height: 524px;
}

@media screen and (max-width:768px) {
  .err1 {
    width: 960px;
    height: 712px;
  }

  .err404 {
    width: 796px;
    height: 492px;
  }
}

@media screen and (max-width:1024px) {
  .err1 {
    width: 704px;
    height: 603px;
  }

  .errtext-h {
    font-size: var(--sizeH2);
    line-height: var(--heightH2);
  }

  .sizea {
    width: 200px;
    height: 40px;
  }

  .err404 {
    width: 704px;
    height: 428px;
  }
}

@media screen and (max-aspect-ratio:2/3) {
  .err1 {
    width: 343px;
    height: 408px;
  }

  .errtext-h {
    font-size: var(--sizeH3);
    line-height: var(--heightH3);
  }

  .sizea {
    width: 192px;
    height: 36px;
  }

  .err404 {
    width: 343px;
    height: 211px;
  }
}
</style>