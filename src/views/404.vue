<template>
  <div class="err1 container">
    <div class="errtext font-medium">
      <h1>Упс! Страница не существует.</h1>
    </div>
    <button class="btn-primary btn">Вернуться на главную</button>
    <img class="err404" src="img/background/err404.svg" alt="" />
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

.err404 {
  width: 1120px;
  height: 524px;
}
</style>