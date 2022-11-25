<template>
  <section>
    <div class="infoblock container">
      <div class="infoblock-logo">
        <img src="/img/background/company_page.svg" alt="" />
      </div>
      <div class="infoblock-text">
        <div class="infoblock-text1">
          <h2>
            Чтобы разместить на сайте свой продукт, напишите нам через форму
            ниже
          </h2>
        </div>
        <div class="infoblock-text2 large">
          Мы обязательно с вами свяжемся и уточним детали!
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="form-callback">
      <form action="">
        <div class="form container">
          <div class="form-nameapp">
            <input
              class="nameapp-area"
              type="text"
              name="nameapp"
              placeholder="Наименование ПО"
              required-placeholder=""
            />
            <span class="icon-edit 20px input-left-icon"></span>
          </div>
          <div class="form-email">
            <input
              class="mail-area"
              type="email"
              name="mail"
              placeholder="Ваш E-mail"
              required-placeholder=""
            />
            <span class="icon-mail 20px input-left-icon"></span>
          </div>
          <div class="form-infoproduct">
            <textarea
              placeholder="Краткая информация о продукте"
              name=""
              class="form-infoproduct-textarea"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="btn-send">
            <a class="btn-primary btn btn-form" href="">Отправить</a>
          </div>
        </div>
      </form>
    </div>
  </section>

  <section>
    <div class="copyright container">
      <div class="copyright-title">
        <h3>Информация для правообладателей:</h3>
      </div>
      <div class="copyright-text">
        <div class="copyright-text-left">
          <div class="copyright-text-left-one">
            Все права на материалы, представленные на нашем сайте, принадлежат
            их законным владельцам и предназначены только для ознакомления.
          </div>
          <div class="copyright-text-left-two">
            Наличие материалов на сайте никаким образом не претендует на
            обозначение нашего авторского права на данные материалы. Авторы не
            несут ответственности за возможные последствия использования их в
            целях, запрещенных Уголовным Кодексом Российской Федерации.
            Посетитель обязуется не применять полученные здесь ссылки и
            информацию в целях, запрещённых УК РФ. Если вы соглашаетесь с
            указанными условиями, то можете приступить к просмотру материалов.
            Иначе вы должны немедленно покинуть сайт.
          </div>
        </div>
        <div class="copyright-text-right">
          <div class="copyright-text-right-one">
            <h5>
              Все материалы, размещенные на сайте, взяты с открытых
              (общедоступных) источников.
            </h5>
          </div>
          <div class="copyright-text-right-two">
            Если Вы являетесь правообладателем какого-либо материала,
            размещённого на этом сайте, и не хотели бы, чтобы данная информация
            распространялась без Вашего на то согласия, то мы будем рады оказать
            Вам содействие, удалив соответствующие страницы.
          </div>
          <div class="copyright-text-right-three">
            Для этого достаточно, чтобы вы прислали нам письмо (в электронном
            виде) с E-mail официального почтового домена компании
            правообладателя, в котором указали ссылки на страницы сайта, которые
            необходимо удалить. После этого, в течение 48 часов, мы удалим
            интересующую вас информацию.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mail container">
      <div class="mail-text-one">
        <h4>У вас остались вопросы? Скорее напишите их нам!</h4>
      </div>
      <div class="mail-text-two">
        <h2>hello@softmain.ru</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
