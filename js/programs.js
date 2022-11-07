import { swiper } from './swiper.js';
// Bakalavr/magistr swiper
const bakalavrBtn = document.querySelector('.bakalavr_button');
const magistrBtn = document.querySelector('.magistr_button');
const slidersBakalavr = document.querySelectorAll('.slider_bakalavr');
const slidersMagistr = document.querySelectorAll('.slider_magistr');

bakalavrBtn.addEventListener('click', () => {
  if (magistrBtn.classList.contains('button_checked')) {
    toggleBtn(bakalavrBtn, magistrBtn);
    updateSlides();
  }
});

magistrBtn.addEventListener('click', () => {
  if (bakalavrBtn.classList.contains('button_checked')) {
    toggleBtn(magistrBtn, bakalavrBtn);
    updateSlides();
  }
});

const updateSlides = function () {
  slidersBakalavr.forEach(el => {
    el.classList.toggle('slider_hidden');
  });
  slidersMagistr.forEach(el => {
    el.classList.toggle('slider_hidden');
  });
  swiper.setProgress(0);
  swiper.update();
};

const toggleBtn = function (a, b) {
  a.classList.toggle('button_checked');
  b.classList.remove('button_checked');
};
