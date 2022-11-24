let icons = document.querySelectorAll("span"); //ищем все svg
let reg_exp = /^(\d{2}px)$/; //регулярное выражение

for (let icon of icons) {
  //перебираем по каждому svg
  let css = `font-size: ${icon.classList[1]};`;
  
  if (icon.classList[1] && reg_exp.test(icon.classList[1])) {
    switch(icon.classList[1]){
      case '64px':
        icon.style.cssText = css;
        break;
      case '48px':
        icon.style.cssText = css;
        break;
      case '32px':
        icon.style.cssText = css;
        break;
      case '24px':
        icon.style.cssText = css;
        break;
      case '20px':
        icon.style.cssText = css;
        break;
      case '16px':
        icon.style.cssText = css;
        break;
      case '14px':
        icon.style.cssText = css;
        break;
      default:{
        icon.style.cssText = `
        width: 24px;
        height: 24px;
        background: url(img/icons/error.svg) center center/cover no-repeat;
        `;
      }
      
    }
    
  } else {
    //если второго параметра нет или на его месте какой-то пользовательский класс, то размеры шаблонные
    icon.style.cssText = `
        width: 24px;
        height: 24px;
        background: url(img/icons/${icon.classList[0]}.svg) center center/cover no-repeat;
        `;
  }
}
