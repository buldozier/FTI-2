// Сайдбар на мобилке
const sidebar = document.querySelector('.sidebar__mobile');
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
  scrollTo(0, 0);
});
