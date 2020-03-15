const MENU = document.querySelectorAll('li.menu-items');
MENU.forEach(el => {
  el.addEventListener('click', (event) => {
    MENU.forEach(el => el.classList.remove('item-active'));
    event.target.parentNode.classList.add('item-active');
    document.querySelectorAll('nav.header__menu>ul')[0].classList.remove('item-active');
  })
});

const BUTTON1 = document.querySelectorAll('div.iphone-button')[0];
const BUTTON2 = document.querySelectorAll('div.iphone-button')[1];

const SCREEN1 = document.querySelectorAll('div.screen')[0];
const SCREEN2 = document.querySelectorAll('div.screen')[1];

BUTTON1.addEventListener('click', (event) => {
  if (SCREEN1.getAttribute('status')=='ON'){
    SCREEN1.classList.add('screen-black');
    SCREEN1.classList.remove('screen');
    SCREEN1.setAttribute('status','OFF');
    }
  else {
    SCREEN1.classList.add('screen');
    SCREEN1.classList.remove('screen-black');
    SCREEN1.setAttribute('status','ON');
  };
});


BUTTON2.addEventListener('click', (event) => {
  if (SCREEN2.getAttribute('status')=='ON'){
    SCREEN2.classList.add('screen-hor-black');
    SCREEN2.classList.remove('screen-hor');
    SCREEN2.setAttribute('status','OFF');
    }
  else {
    SCREEN2.classList.add('screen-hor');
    SCREEN2.classList.remove('screen-hor-black');
    SCREEN2.setAttribute('status','ON');
  };
});

// блок Portfolio: при нажатии на картинку - рамка

const PORT_PICS = document.querySelectorAll('div.portfolio__pics>img');
PORT_PICS.forEach(el => {
  el.addEventListener('click', (event) => {
    PORT_PICS.forEach(el => el.classList.remove('portfolio__pic-active'));
    event.target.classList.add('portfolio__pic-active');
  })
});

// переключение Portfolio
const PORT_BTNS = document.querySelectorAll('div.portfolio__button');

function rand_img () {
  let selector = '';
  let temp = Math.round(rand = 1 - 0.5 + Math.random() * (12 - 1 + 1));
  switch (temp) {
    case 1: selector = '[alt="pic01"]'; break;
    case 2: selector = '[alt="pic02"]'; break;
    case 3: selector = '[alt="pic03"]'; break;
    case 4: selector = '[alt="pic04"]'; break;
    case 5: selector = '[alt="pic05"]'; break;
    case 6: selector = '[alt="pic06"]'; break;
    case 7: selector = '[alt="pic07"]'; break;
    case 8: selector = '[alt="pic08"]'; break;
    case 9: selector = '[alt="pic09"]'; break;
    case 10: selector = '[alt="pic10"]'; break;
    case 11: selector = '[alt="pic11"]'; break;
    case 12: selector = '[alt="pic12"]'; break;
  }
  return document.querySelector(selector);
}

PORT_BTNS.forEach(el => {
  el.addEventListener('click', (event) => {
    PORT_BTNS.forEach(el => el.classList.remove('button-active'));
    event.target.classList.add('button-active');

    for (let i=0; i<20; i++){
      let first = rand_img ();
      let second = rand_img ();
      second.after(first);
    }
  })
});

// слайдер

const BUTTON_LEFT = document.querySelectorAll('div.slider__arrows')[0];
const BUTTON_RIGHT = document.querySelectorAll('div.slider__arrows')[1];

let slides = document.querySelectorAll('div.slider__content>div'); // выбрали оба слайда

const BG = document.querySelectorAll('section.slider')[0];

//console.log(slides);

let slider = [];

for (let i=0; i<slides.length; i++) {
  slider[i] = slides[i];
  slides[i].remove();
}

let step = 0;
//let offset = 0;

function draw(offset) {
  //alert('Смещение: ' + offset * 810 + 'px');
  slider[step].style.left = offset * 810 + 'px';
  document.querySelector('div.slider__content').appendChild(slider[step]);
  if (step+1 == slider.length) step = 0;
    else step++;
  offset = 1;
}

function right() {
  BUTTON_RIGHT.onclick = null;
  //offset = 1;
  draw(1);
  let slides2 = document.querySelectorAll('div.slider__content>div');
  for (let i=0; i<slides2.length; i++) {
    slides2[i].offsetWidth = slides2[i].offsetWidth;
    slides2[i].style.left = i * 810 - 810 + 'px';
  }

  if (BG.classList.contains('slider-blue')) BG.classList.remove('slider-blue');
  else BG.classList.add('slider-blue');
  
  setTimeout(function(){
    slides2[0].remove();
    BUTTON_RIGHT.onclick = right;
  },700);
}

function left() {
  BUTTON_RIGHT.onclick = null;
  //offset = 1;
  draw(-1);
  let slides2 = document.querySelectorAll('div.slider__content>div');
  for (let i=0; i<slides2.length; i++) {
    slides2[i].offsetWidth = slides2[i].offsetWidth;
    slides2[i].style.left = 810 - (i * 810) + 'px';
  }

  if (BG.classList.contains('slider-blue')) BG.classList.remove('slider-blue');
  else BG.classList.add('slider-blue');

  setTimeout(function(){
    slides2[0].remove();
    BUTTON_RIGHT.onclick = right;
  },700);
}

draw(0); // рисуем первый слайд
BUTTON_LEFT.onclick = left;
BUTTON_RIGHT.onclick = right;

// отправка формы

const WID_SEND = document.querySelectorAll('.m_window')[0]; // окно
const BTN_SEND = document.querySelectorAll('.form-button')[0]; // кнопка SEND
const BTN_OK = document.querySelectorAll('.m_window__submit-btn')[0]; // кнопка OK

const NAME = document.querySelectorAll('.quote__form>input')[0]; // поле NAME
const EMAIL = document.querySelectorAll('.quote__form>input')[1]; // поле EMAIL
const SUBJECT = document.querySelectorAll('.quote__form>input')[2]; // поле SUBJECT
const DESCRIBE = document.querySelectorAll('.quote__form>textarea')[0]; // поле DESCRIBE

const FORM = document.querySelector('.quote__form'); // вся форма
FORM.addEventListener('submit', (el) => el.preventDefault()); // перехватываем отправку формы

const MODAL_SUBJECT = document.querySelectorAll('.m_window__subject')[0]; // Тема: ...
const MODAL_DESCRIBE = document.querySelectorAll('.m_window__describe')[0]; // Описание: ...


function formClean () {
  NAME.value = '';
  EMAIL.value = '';
  SUBJECT.value = '';
  DESCRIBE.value = '';
  MODAL_SUBJECT.textContent = 'Без темы';
  MODAL_DESCRIBE.textContent = 'Без описания';
}

BTN_SEND.addEventListener('click', (event) => {
  if (NAME.value != '' && EMAIL.value != '' ) {
    WID_SEND.classList.remove('m_window-none');
    // берём значения из формы
    if (SUBJECT.value!='') {MODAL_SUBJECT.textContent = 'Тема: ' + SUBJECT.value;}
    if (DESCRIBE.value != '') {MODAL_DESCRIBE.textContent = 'Описание: ' + DESCRIBE.value;}    
  }
});


BTN_OK.addEventListener('click', (event) => {
  WID_SEND.classList.add('m_window-none');
  formClean ();
});
 