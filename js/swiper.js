// Swiper
export const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 20,
  allowTouchMove: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
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
