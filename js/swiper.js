// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 20,
  allowTouchMove: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove: true,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      allowTouchMove: false,
    },
  },

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

// Bakalavr/magistr swiper
const bakalavrBtn = document.querySelector('.bakalavr__button');
const magistrBtn = document.querySelector('.magistr__button');
const slidersBakalavr = document.querySelectorAll('.slider__bakalavr');

console.log(slidersBakalavr);

bakalavrBtn.addEventListener('click', () => {
  if (magistrBtn.classList.contains('button__checked')) {
    toggleBtn(bakalavrBtn, magistrBtn);
    updateSlides();
  }
});

magistrBtn.addEventListener('click', () => {
  if (bakalavrBtn.classList.contains('button__checked')) {
    toggleBtn(magistrBtn, bakalavrBtn);
    updateSlides();
  }
});

const updateSlides = function () {
  slidersBakalavr.forEach(el => {
    el.classList.toggle('slider__hidden');
    swiper.update();
  });
};

const toggleBtn = function (a, b) {
  a.classList.toggle('button__checked');
  b.classList.remove('button__checked');
};
