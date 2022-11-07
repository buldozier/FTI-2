// Сайдбар на мобилке
const sidebar = document.querySelector('.sidebar_mobile');
const menuIcon = document.querySelector('.menu_icon');
const sidebarToggleBtn = document.querySelector('.menu_icon_wrapper');

// Обработчик нажатия вне сайдбара
document.addEventListener('click', e => {
  const inBondaries = e.composedPath().includes(sidebar);
  const inSidebarBtn = e.composedPath().includes(sidebarToggleBtn);

  if (sidebar.classList.contains('sidebar_mobile_active') && !inSidebarBtn && !inBondaries) {
    toggleSidebar();
    document.body.style = '';
  }
});

// Обработчик нажатия на кнопку сайдбара
sidebarToggleBtn.addEventListener('click', () => {
  toggleSidebar();
  if (sidebar.classList.contains('sidebar_mobile_active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style = '';
  }
});

// Функция открытия и закрытия сайдбара
const toggleSidebar = () => {
  menuIcon.classList.toggle('menu_icon_active');
  sidebar.classList.toggle('sidebar_mobile_active');
};

// Btn to top
const btnToTop = document.querySelector('.btn_to_top');

document.addEventListener('scroll', () => {
  if (window.scrollY >= 150) {
    btnToTop.classList.remove('btn_to_top_hidden');
  } else {
    btnToTop.classList.add('btn_to_top_hidden');
  }
});

btnToTop.addEventListener('click', () => {
  scrollTo(0, 0);
});
