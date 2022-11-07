// Scroll buttons
const peopleFtiBtn = document.querySelector('.people_fti_btn');
const departmentsBtn = document.querySelector('.departments_btn');
const partnersBtn = document.querySelector('.partners_btn');

peopleFtiBtn.addEventListener('click', () => {
  const peopleFtiBtnPosition =
    document.querySelector('#people_fti').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, peopleFtiBtnPosition);
});

departmentsBtn.addEventListener('click', () => {
  const departmentsBtnPosition =
    document.querySelector('.departments_header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, departmentsBtnPosition);
});

partnersBtn.addEventListener('click', () => {
  const partnersBtnPosition =
    document.querySelector('.partners_header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, partnersBtnPosition);
});


