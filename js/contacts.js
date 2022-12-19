const showMoreBtn = document.querySelector('.show_more_btn');
const showAllBtn = document.querySelector('.show_all_btn');
const showBtns = document.querySelector('.show_btns');

showMoreBtn.addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.hidden_card');

  for (let i = 0; i < 4; i++) {
    console.log(i);
    hiddenCards[i].classList.remove('hidden_card');
  }

  if (hiddenCards.length == 4) {
    showBtns.remove();
  }
});

showAllBtn.addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.hidden_card');

  hiddenCards.forEach(el => {
    el.classList.remove('hidden_card');
  });

  showBtns.remove();
});
