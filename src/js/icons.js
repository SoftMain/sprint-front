let icons = document.querySelectorAll("svg"); //ищем все svg
let reg_exp = /^(\d{2}px)$/; //регулярное выражение

for (let icon of icons) {
  //перебираем по каждому svg
  if (icon.classList[1] && reg_exp.test(icon.classList[1])) {
    //если существует второй параметр класса и он соответствует регулярке то,размеры вводятся динамически из класса
    icon.style.cssText = `
        width: ${icon.classList[1]};
        height: ${icon.classList[1]};                                                       
        background: url(./img/icons/${icon.classList[0]}.svg) center center/cover no-repeat;
        `;
  } else {
    //если второго параметра нет или на его месте какой-то пользовательский класс, то размеры шаблонные
    icon.style.cssText = `
        width: 24px;
        height: 24px;
        background: url(./img/icons/${icon.classList[0]}.svg) center center/cover no-repeat;
        `;
  }
}
