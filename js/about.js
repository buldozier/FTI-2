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
    document.querySelector('.departments__header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, departmentsBtnPosition);
});

partnersBtn.addEventListener('click', () => {
  const partnersBtnPosition =
    document.querySelector('.partners__header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, partnersBtnPosition);
});


