// Сайдбар на мобилке
const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu__icon');
const sidebarToggleBtn = document.querySelector('.menu__icon__wrapper');

// Обработчик нажатия вне сайдбара
document.addEventListener('click', e => {
  const inBondaries = e.composedPath().includes(sidebar);
  const inSidebarBtn = e.composedPath().includes(sidebarToggleBtn);

  if (sidebar.classList.contains('sidebar__mobile__active') && !inSidebarBtn && !inBondaries) {
    toggleSidebar();
    document.body.style = '';
  }
});

// Обработчик нажатия на кнопку сайдбара
sidebarToggleBtn.addEventListener('click', () => {
  console.log('123');
  toggleSidebar();
  if (sidebar.classList.contains('sidebar__mobile__active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style = '';
  }
});

// Функция открытия и закрытия сайдбара
const toggleSidebar = () => {
  menuIcon.classList.toggle('menu__icon__active');
  sidebar.classList.toggle('sidebar__mobile__active');
};


// Swiper departments
const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// Scroll buttons
const peopleFtiBtn = document.querySelector('.people__fti__btn');
const departmentsBtn = document.querySelector('.departments__btn');
const partnersBtn = document.querySelector('.partners__btn');

peopleFtiBtn.addEventListener('click', () => {
  const peopleFtiBtnPosition =
    document.querySelector('#people__fti').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, peopleFtiBtnPosition);
});

departmentsBtn.addEventListener('click', () => {
  const departmentsBtnPosition =
    document.querySelector('.departments__header').getBoundingClientRect().y + window.pageYOffset - 100;
  window.scrollTo(0, departmentsBtnPosition);
});

partnersBtn.addEventListener('click', () => {
  const partnersBtnPosition =
    document.querySelector('.partners__header').getBoundingClientRect().y + window.pageYOffset - 150;
  window.scrollTo(0, partnersBtnPosition);
});

// Btn to top
const btnToTop = document.querySelector('.btn__to__top');

document.addEventListener('scroll', () => {
  if (window.scrollY >= 150) {
    btnToTop.classList.remove('btn__to__top__hidden');
  } else {
    btnToTop.classList.add('btn__to__top__hidden');
  }
});

btnToTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// Slider departments
const sliderLeftBtn = document.querySelector('#btn__1');
const sliderRightBtn = document.querySelector('#btn__2');
const cardsSwiper = document.querySelector('.department__cards');
let sliderPosition = 0;

sliderLeftBtn.addEventListener('click', () => {
  if (sliderPosition === -400) {
    sliderLeftBtn.classList.add('no__color__btn');
    sliderLeftBtn.style.cursor = 'auto';
  }

  if (sliderPosition <= -2400) {
    sliderRightBtn.classList.remove('no__color__btn');
    sliderRightBtn.style.cursor = 'pointer';
  }

  if (sliderPosition < 0) {
    countTranslateSlider(400);
  }
});

sliderRightBtn.addEventListener('click', () => {
  if (sliderPosition <= 0) {
    sliderLeftBtn.classList.remove('no__color__btn');
    sliderLeftBtn.style.cursor = 'pointer';
  }

  if (sliderPosition === -2400) {
    sliderRightBtn.classList.add('no__color__btn');
    sliderRightBtn.style.cursor = 'auto';
  }

  if (sliderPosition > -2800) {
    countTranslateSlider(-400);
  }
});

const countTranslateSlider = function (translateValue) {
  sliderPosition += translateValue;
  cardsSwiper.style.transform = 'translateX(' + sliderPosition + 'px';
};
