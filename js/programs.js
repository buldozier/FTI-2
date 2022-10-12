// Bakalavr/magistr swiper
const bakalavrBtn = document.querySelector('.bakalavr__button');
const magistrBtn = document.querySelector('.magistr__button');
const slidersBakalavr = document.querySelectorAll('.slider__bakalavr');
const slidersMagistr = document.querySelectorAll('.slider__magistr');

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
  });
  slidersMagistr.forEach(el => {
    el.classList.toggle('slider__hidden');
  });
  swiper.setProgress(0);
  swiper.update();
};

const toggleBtn = function (a, b) {
  a.classList.toggle('button__checked');
  b.classList.remove('button__checked');
};
